import uid from 'uuid/v4'

import app from 'server/server'

import { enumStatusCaderno } from 'entidades/caderno/cadernoNoConcurso/enumStatusCaderno'
import { enumOperacoes } from 'entidades/operacoesInstanciamento'
import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'
import { tipos as tiposDeImpressao } from 'entidades/impressao/contratoImpressao'
import { enumTipoTemplate } from 'entidades/enumTipoTemplate'

import { ForbiddenError, NotFoundError } from 'main/erros'
import { enviarFilaInstanciamento } from 'main/models/instanciamento'
import { getCadernoParaInstanciamento } from 'main/models/caderno/getCadernoParaInstanciamento'
import { convertToFileName } from 'main/utils'

const criarImpressaoCaderno = ({ concurso, versao, caderno }) => {
  let { usuarioId, opcoes, id } = concurso
  const cargo = concurso.cargos.find(cargo => {
    return cargo.etapas.some(etapa => etapa.cadernos.some(cadernoId => caderno.id === cadernoId))
  })
  const dadosImpressao = {
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    usuarioId,
    titulo: convertToFileName(`${cargo.titulo}-${caderno.titulo}`),
    template: opcoes.template,
    metadados: { tipo: tiposDeImpressao.concurso, concursoId: id, versao, cadernoId: caderno.id },
    extensao: 'zip',
    contentType: 'application/zip',
  }
  return app.models.Impressao.create(dadosImpressao)
}

const mapTemplateConcursoParaCaderno = {
  Comperve: 'comperve/caderno',
  Geral: 'geral/caderno',
}

const criarImpressaoVersoesCaderno = async ({ concurso, caderno, versoesCaderno, versao }) => {
  const dadosImpressoesCaderno = versoesCaderno.map(versaoCaderno => ({
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    titulo: convertToFileName(`${caderno.titulo}-${versaoCaderno.apelido}`),
    usuarioId: concurso.usuarioId,
    template: mapTemplateConcursoParaCaderno[concurso.opcoes.template],
    metadados: {
      tipo: tiposDeImpressao.cadernoConcurso,
      cadernoId: caderno.id,
      concursoId: concurso.id,
      versaoCaderno,
      versao,
    },
    extensao: 'pdf',
    contentType: 'application/pdf',
  }))
  return app.models.Impressao.create(dadosImpressoesCaderno)
}

const criarImpressaoGararitos = ({ concurso, versao }) => {
  const dadosImpressoes = {
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    titulo: `gabaritos-${versao}`,
    metadados: { tipo: tiposDeImpressao.gabaritosConcurso, concursoId: concurso.id, versao },
    usuarioId: concurso.usuarioId,
    template: enumTipoTemplate.gabaritoConcurso,
    extensao: 'pdf',
    contentType: 'application/pdf',
  }
  return app.models.Impressao.create(dadosImpressoes)
}

export const getCadernoConcursoParaInstanciamento = async ({ concurso, caderno }) => {
  let cadernoInstanciamento = await getCadernoParaInstanciamento({
    caderno,
    todasAsProvas: concurso.provas,
    todasAsQuestoes: concurso.questoes,
  })
  return {
    tipo: enumTiposDadosInstanciamento.cadernoConcurso,
    ...cadernoInstanciamento,
  }
}

const editarInstanciamentoCaderno = ({ instancia, versao, cadernoId, impressaoCaderno }) => {
  const caderno = instancia.cadernos.find(caderno => caderno.id === cadernoId)
  caderno.instanciamento = {
    dataInstanciamento: new Date().toISOString(),
    versao,
    status: statusInstanciamentoCaderno.gerando,
    impressaoId: impressaoCaderno.id,
  }
  return instancia.save()
}

const enviarCadernosInstanciamento = async ({ instancia, versao, caderno, versoesCaderno, impressoesVersoes }) => {
  const concurso = instancia.toObject()
  const dados = await getCadernoConcursoParaInstanciamento({ concurso, caderno })
  const envios = []
  impressoesVersoes.forEach(({ metadados, template, id }) => {
    const { versaoCaderno } = metadados
    const impressaoId = id
    const envio = enviarFilaInstanciamento({
      operacao: {
        id: uid(),
        tipo: enumOperacoes.instanciamento,
        informacoes: { versao, concursoId: instancia.id, cadernoId: caderno.id, versaoCaderno, impressaoId, template },
      },
      dados,
    })
    envios.push(envio)
  })
  await Promise.all(envios)
  return versoesCaderno
}

export const instanciarCaderno = async (instancia, cadernoId) => {
  let caderno = instancia.toObject().cadernos.find(caderno => caderno.id === cadernoId)
  if (!caderno) throw new NotFoundError('Caderno com {cadernoId} não encotrado no concurso')
  if (caderno.status !== enumStatusCaderno.edFinalizada)
    throw new ForbiddenError(`Cadernos está com "status" diferente de "${enumStatusCaderno.edFinalizada}".`)
  let concurso = instancia.toObject()
  const versao = uid()
  const { numeroInstancias } = instancia.opcoes
  const versoesCaderno = [...Array(numeroInstancias).keys()].map(index => ({ id: uid(), apelido: String(index + 1) }))
  const impressaoCaderno = await criarImpressaoCaderno({ concurso, versao, caderno })
  const impressoesVersoes = await criarImpressaoVersoesCaderno({ concurso, caderno, versoesCaderno, versao })
  await criarImpressaoGararitos({ concurso, versao })
  concurso = await editarInstanciamentoCaderno({ instancia, versao, cadernoId, impressaoCaderno })
  await enviarCadernosInstanciamento({ instancia, versao, caderno, versoesCaderno, impressoesVersoes })
  caderno = concurso.cadernos.find(caderno => caderno.id === cadernoId)
  return [versao, concurso, caderno, versoesCaderno]
}
