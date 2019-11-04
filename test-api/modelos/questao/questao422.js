const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')
const questaoBloco = require('test-api/samples/questao/questaoBloco')

const getQuestaoMultiplaEscolha = () => JSON.parse(JSON.stringify(questaoMultiplaEscolha))

const getQuestaoBloco = () => JSON.parse(JSON.stringify(questaoBloco))

exports.questao422 = [
  {
    name: 'Falha ao tentar criar questão de multipla escolha com status em branco',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: () => {
      const questao = getQuestaoMultiplaEscolha()
      questao.status = null
      return questao
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão bloco com questão interna sem id',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: () => {
      const questao = getQuestaoBloco()
      delete questao.bloco.questoes[0].id
      return questao
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão com dificuldade inválida',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: () => {
      const questao = getQuestaoMultiplaEscolha()
      questao.dificuldade = 100
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão de multipla escolha com tipo em branco',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: () => {
      const questao = getQuestaoMultiplaEscolha()
      questao.tipo = null
      return questao
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão de multipla escolha com tipo em branco',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: () => {
      const questao = getQuestaoMultiplaEscolha()
      questao.tipo = null
      return questao
    },
    status: 422,
  },
]
