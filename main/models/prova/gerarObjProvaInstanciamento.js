import app from 'server/server'
import { enumTipoUsuario } from 'main/models/usuario'
import { enumTipoAplicacao } from 'entidades/enumTipoAplicacao'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

const isElaboracao = prova => {
  return prova.status === enumStatusAplicacao.elaboracao
}

const isVirtual = prova => {
  return prova.dadosAplicacao.tipoAplicacao === enumTipoAplicacao.virtual
}

const isProntaParaAplicacao = prova => {
  return prova.status === enumStatusAplicacao.prontaParaAplicacao
}

export const getUsuariosAlunos = () => {
  const RoleMapping = app.models.RoleMapping
  return Promise.resolve(
    RoleMapping.find({
      where: {
        roleId: enumTipoUsuario.discente,
      },
    })
  )
}

export const getParticipantesFromProva = async (provaId) => {
  const Prova = app.models.Prova
  return await Prova.findById(provaId)
}

const getCandidatosIds = prova => instancias => {
  const candidatosIds = []
  instancias.map(candidato => candidatosIds.push(candidato.principalId))
  prova.dadosAplicacao.virtual.candidatosIds = candidatosIds
}

const encontraQuestaoNoArray = (questaoId, questoesDoEscopo) => {
  return questoesDoEscopo.find(qt => qt.id === questaoId)
}

const colocaQuestoesNoGrupo = (grupo, questoesDoEscopo) => {
  const { questoes } = grupo
  const questoesDoGrupo = []
  questoes.forEach(questao => {
    const novaQuestao = encontraQuestaoNoArray(questao.questaoId, questoesDoEscopo)
    novaQuestao.fixa = questao.fixa
    questoesDoGrupo.push(novaQuestao)
  })
  grupo.questoes = questoesDoGrupo
  return grupo
}

const getQuestoesParaColocarDentroDosGrupos = prova => {
  console.log('Prova em elaboração. Gerando Preview.')
  const { grupos } = prova
  const gruposComQuestoes = []
  return new Promise((resolve, reject) => {
    prova.questoes.find().then(questoesDoEscopo => {
      try {
        grupos.forEach(grupo => gruposComQuestoes.push(colocaQuestoesNoGrupo(grupo, questoesDoEscopo)))
        prova.grupos = gruposComQuestoes
        resolve(prova)
      } catch (err) {
        reject(new Error('Erro ao tentar colocar as questões nos grupos', err))
      }
    })
  })
}

export const gerarObjProvaInstanciamento = prova => {
  return new Promise((resolve, reject) => {
    if (!prova) reject(new Error('O objeto prova é inválido'))
    if (isElaboracao(prova)) resolve(getQuestoesParaColocarDentroDosGrupos(prova))
    if (!prova.dadosAplicacao) {
      reject(new Error('O objeto prova.dadosAplicação é inválido'))
    }
    prova.grupos = prova.dadosAplicacao.grupos
    if (isProntaParaAplicacao(prova)) {
      console.log('Prova pronta para aplicação gerando objeto JSON.')
      if (isVirtual(prova)) {
        console.log('Prova virtual')
        getUsuariosAlunos()
          .then(getCandidatosIds(prova))
          .then(() => resolve(prova))
          .catch(reject)
      } else resolve(prova)
    } else reject(new Error('O status da prova é inválido para instanciamento'))
  })
}
