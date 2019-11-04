import { models } from 'server/server'
import uid from 'uuid/v4'

import { ForbiddenError } from 'main/erros'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'
import { enumStatusExportacaoQuestoes } from 'entidades/concurso/enumStatusExportacaoQuestoes'
import { tipos as tiposDeImpressao } from 'entidades/impressao/contratoImpressao'
import { enumOperacoes } from 'entidades/operacoesImpressao'
import { convertToFileName } from 'main/utils'
import { enviarFilaImpressao } from 'main/models/impressao'

const { multiplaEscolha: tipoMultiplaEscolha, bloco: tipoBloco } = enumTipoQuestao

const criarImpressaoZip = ({ concurso, versao, dadosQuestoes }) => {
  const { usuarioId, opcoes, id: concursoId } = concurso
  const dadosImpressao = {
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    usuarioId,
    titulo: convertToFileName(`imagens-questoes-${concurso.titulo}`),
    template: opcoes.template,
    metadados: { tipo: tiposDeImpressao.imagensQuestoesConcurso, concursoId, versao, dadosQuestoes },
    extensao: 'zip',
    contentType: 'application/zip',
  }
  return models.Impressao.create(dadosImpressao)
}

const criarImpressoesQuestoes = ({ concurso, versao, dadosQuestoes, impressaoZipId }) => {
  const { id: concursoId, usuarioId } = concurso
  const dadosImpressoesQuestoes = dadosQuestoes.map(dado => ({
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    titulo: convertToFileName(/imgs\/(.*?)\.png/.exec(dado.caminhoImagem)[1]),
    usuarioId,
    template: 'comperve/multiplaEscolha',
    metadados: {
      tipo: tiposDeImpressao.imagemQuestaoConcurso,
      concursoId,
      impressaoZipId,
      versao,
    },
    extensao: 'png',
    contentType: 'image/png',
  }))
  return models.Impressao.create(dadosImpressoesQuestoes)
}

const enviarQuestoesParaImpressao = async ({ dadosQuestoes, impressoesQuestoes }) => {
  console.log('Enviando as questões para a fila de impressão.')
  for (const impressao of impressoesQuestoes) {
    const {
      id: impressaoId,
      titulo,
      template,
      extensao,
      metadados: { versao },
    } = impressao
    const { instanciaQuestao } = dadosQuestoes.find(
      dadosImpressao => dadosImpressao.caminhoImagem === `imgs/${titulo}.png`
    )
    await enviarFilaImpressao({
      impressaoId,
      dados: instanciaQuestao,
      template,
      operacao: {
        id: uid(),
        tipo: enumOperacoes.imagemQuestaoConcurso,
        informacoes: { versao, extensao },
      },
    })
  }
}

const obterDadosQuestao = questao => {
  switch (questao.tipo) {
    case tipoMultiplaEscolha:
      return { questao: questao.numeroNaInstancia, caminhoImagem: `imgs/${uid()}.png`, instanciaQuestao: questao }
    case tipoBloco:
      return questao.bloco.questoes.map(obterDadosQuestao)
    default:
      return []
  }
}

const obterDadosQuestoesInstanciamento = ({ caderno }, dadosExistentes) => {
  const dados = []
  const {
    titulo: tituloCaderno,
    versaoCaderno: { apelido: tipoCaderno },
    provas,
  } = caderno
  provas.forEach(({ titulo: tituloProva, grupos }) => {
    grupos.forEach(({ questoes }) => {
      questoes.forEach(questao => {
        const adicionarDado = dado =>
          dados.push({ ...dadosExistentes, tituloCaderno, tipoCaderno, tituloProva, ...dado })
        const dadosQuestao = obterDadosQuestao(questao)
        if (Array.isArray(dadosQuestao)) dadosQuestao.forEach(adicionarDado)
        else adicionarDado(dadosQuestao)
      })
    })
  })
  return dados
}

const obterDados = async ({ cadernos, cargos, titulo: tituloConcurso }) => {
  const versoesDosCadernos = cadernos.map(({ instanciamento: { versao } }) => ({ versao }))
  const instanciamentos = await models.InstanciamentoConcursos.find({ where: { or: versoesDosCadernos } })
  const dados = []
  cargos.forEach(({ titulo: tituloCargo, etapas }) => {
    etapas.forEach(({ titulo: tituloEtapa, cadernos }) => {
      cadernos.forEach(cadernoId => {
        const instanciamentosCaderno = instanciamentos.filter(({ caderno }) => caderno.id === cadernoId)
        instanciamentosCaderno.forEach(instanciamento => {
          const dadosQuestoesInstanciamento = obterDadosQuestoesInstanciamento(instanciamento, {
            tituloConcurso,
            tituloCargo,
            tituloEtapa,
          })
          dados.push(...dadosQuestoesInstanciamento)
        })
      })
    })
  })
  return dados
}

const atualizarConcurso = ({ concurso, impressaoId }) => {
  concurso.exportacaoQuestoes = {
    status: enumStatusExportacaoQuestoes.andamento,
    impressaoId,
    data: new Date().toISOString(),
  }
  return concurso.save()
}

export const exportarImagensQuestoesConcurso = async concurso => {
  const { cadernos, exportacaoQuestoes: exportacao } = concurso
  if (exportacao && exportacao.status === enumStatusExportacaoQuestoes.andamento)
    throw new ForbiddenError(`A exportação das imagens está em andamento.`)
  const cadernosEstaoInstanciados = cadernos.every(({ instanciamento: { status } }) => status === 'pronto')
  if (!cadernosEstaoInstanciados) throw new ForbiddenError(`Todos os cadernos não estão instanciados.`)
  const versao = uid()
  const dadosQuestoes = await obterDados(concurso)
  const { id: impressaoId } = await criarImpressaoZip({ concurso, versao, dadosQuestoes })
  const impressoesQuestoes = await criarImpressoesQuestoes({
    concurso,
    impressaoZipId: impressaoId,
    versao,
    dadosQuestoes,
  })
  await enviarQuestoesParaImpressao({ dadosQuestoes, impressoesQuestoes })
  const { exportacaoQuestoes } = await atualizarConcurso({ concurso, impressaoId })
  return [exportacaoQuestoes]
}
