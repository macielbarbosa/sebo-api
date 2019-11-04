import app from 'server/server'
import { ValidationError } from 'main/erros'
import { errorCodes } from 'entidades/errorCodes'
import { enumStatusInstanciamento } from 'entidades/instanciamento'
import {
  corrigirQuestaoAssociacaoDeColunas,
  corrigirQuestaoMultiplaEscolha,
  corrigirQuestaoVouF,
} from 'main/models/instanciamento/corrigirQuestao'

export const salvarRespostas = async (prova, respostas) => {
  const { idNumero } = respostas
  const { participantes } = prova.dadosAplicacao

  const participanteIndex = participantes.findIndex(x => x.matricula === respostas.matricula)
  if (participanteIndex === -1) {
    throw new ValidationError({
      message: 'Matrícula não corresponde a nenhum participante',
      code: errorCodes.participanteNaoEncontrado,
    })
  }
  const candidato = participantes[participanteIndex]

  const validacao = await buscarCandidatoAtribuido(prova.id, respostas)
  if (!validacao.sucesso && !respostas.forcar) {
    throw new ValidationError({
      message: 'Aluno já atribuído a(s) prova(s): ' + validacao.erros.join(', '),
      code: errorCodes.AlunoAtribuidoEmOutrasProvas,
    })
  }

  let filter = {
    where: {
      idMatriz: prova.id,
      'prova.idNumero': idNumero,
    },
  }

  const instancias = await app.models.Instanciamento.find(filter)
  const instancia = instancias[0]

  if (instancia === undefined) {
    throw new ValidationError({ message: 'Prova nao encontrada', code: errorCodes.provaInvalida })
  }

  if (instancia.prova.matricula !== respostas.matricula && !respostas.forcar) {
    throw new ValidationError({
      message: 'Prova já atribuída ao aluno: ' + instancia.prova.matricula + ' - ' + instancia.prova.nomeCandidato,
      code: errorCodes.provaJaDeOutroAluno,
    })
  }

  if (instancia.tipoAplicacao !== 'papel') {
    throw new ValidationError({ message: 'Tipo aplicacao deve ser papel', code: errorCodes.tipoAplicacaoInvalido })
  }

  if (instancia.notasPublicadas !== undefined && instancia.notasPublicadas === true) {
    throw new ValidationError({
      message: 'As notas desta prova ja foram publicadas',
      code: errorCodes.tipoAplicacaoInvalido,
    })
  }

  let erros = []
  let indexQuestaoNaInstancia = 0

  for (let grupo of instancia.prova.grupos) {
    for (let questao of grupo.questoes) {
      if (questao.tipo === 'bloco') {
        for (let subquestao of questao.bloco.questoes) {
          const resultado = processarQuestao(respostas.respostas[indexQuestaoNaInstancia], subquestao)
          if (resultado.length) {
            erros = erros.concat(resultado)
          }
          indexQuestaoNaInstancia++
        }
      } else {
        const resultado = processarQuestao(respostas.respostas[indexQuestaoNaInstancia], questao)
        if (resultado.length) {
          erros = erros.concat(resultado)
        }
        indexQuestaoNaInstancia++
      }
    }
  }

  if (erros.length) throw new ValidationError(erros)
  instancia.candidatoId = candidato.id
  instancia.prova.nomeCandidato = candidato.nome
  instancia.prova.matricula = candidato.matricula
  instancia.status = enumStatusInstanciamento.emExecucao
  instancia.save()
}

const processarQuestao = (respostas, questao) => {
  let erros = []
  // eslint-disable-next-line default-case
  switch (questao.tipo) {
    case 'associacaoDeColunas': {
      erros = salvarRespostasAssociacaoDeColunas(questao, respostas)
      break
    }
    case 'multiplaEscolha': {
      erros = salvarRespostaMultiplaEscolha(questao, respostas)
      break
    }
    case 'vouf': {
      erros = salvarRespostasVouF(questao, respostas)
      break
    }
  }

  return erros
}

const salvarRespostasVouF = (questao, respostas) => {
  let index = 0
  const validacao = verificaTipo(questao.tipo, respostas)

  if (validacao.sucesso) {
    for (let afirmacao of questao.vouf.afirmacoes) {
      afirmacao.respostaCandidato = respostas.respostaCandidato[index]
      afirmacao.dataRespostaCandidato = new Date()
      index++
    }
    corrigirQuestaoVouF(questao)
  }

  return validacao.erros
}

const salvarRespostasAssociacaoDeColunas = (questao, respostas) => {
  let index = 0
  const validacao = verificaTipo(questao.tipo, respostas)

  if (validacao.sucesso) {
    for (let afirmacao of questao.associacaoDeColunas.colunaB) {
      afirmacao.respostaCandidato = parseInt(respostas.respostaCandidato[index], 16)
      afirmacao.dataRespostaCandidato = new Date()
      index++
    }
    corrigirQuestaoAssociacaoDeColunas(questao)
  }

  return validacao.erros
}

const salvarRespostaMultiplaEscolha = (questao, resposta) => {
  const validacao = verificaTipo(questao.tipo, resposta)

  if (validacao.sucesso) {
    questao.multiplaEscolha.respostaCandidato = resposta.respostaCandidato
    questao.multiplaEscolha.dataRespostaCandidato = new Date()
    corrigirQuestaoMultiplaEscolha(questao)
  }

  return validacao.erros
}

const verificaTipo = (tipoQuestao, resposta) => {
  const validacao = { sucesso: true, erros: [] }

  if (tipoQuestao !== resposta.tipo) {
    validacao.sucesso = false
    validacao.erros.push({
      code: errorCodes.tipo,
      message: 'Questão ' + (resposta.questaoIndex + 1) + ' é do tipo ' + tipoQuestao,
    })
  }

  return validacao
}

const buscarCandidatoAtribuido = async (idMatriz, respostas) => {
  const validacao = { sucesso: true, erros: [] }

  let filter = {
    where: {
      idMatriz: idMatriz,
      'prova.matricula': respostas.matricula,
    },
  }

  const instancias = await app.models.Instanciamento.find(filter)
  if (instancias.length) {
    validacao.sucesso = false
    for (let instancia of instancias) {
      validacao.erros.push(instancia.prova.idNumero)
    }
  }

  return validacao
}
