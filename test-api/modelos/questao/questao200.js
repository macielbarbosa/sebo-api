const { testData } = require('test-api/testData')

const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')
const questaoBloco = require('test-api/samples/questao/questaoBloco')
const questaoVouF = require('test-api/samples/questao/questaoVouF')
const questaoDiscursiva = require('test-api/samples/questao/questaoDiscursiva')
const questaoAssociacaoDeColunas = require('test-api/samples/questao/questaoAssociacaoDeColunas')
const questaoRedacao = require('test-api/samples/questao/questaoRedacao')
const previewMultiplaEscolha = require('test-api/samples/questaoPreview/previewMultiplaEscolha')
const previewBloco = require('test-api/samples/questaoPreview/previewBloco')

const { ids } = testData

exports.questao200 = [
  {
    name: 'Criar questão de multipla escolha válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolha,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocente = res.body.id
      done()
    },
  },
  {
    name: 'Edita questão de multipla escolha como docente',
    verb: 'patch',
    as: 'docente',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { enunciado: 'a', tagsVirtuais: [] },
    status: 200,
  },
  {
    name: 'Criar questão de bloco válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoBloco,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocenteQuestaoBloco = res.body.id
      done()
    },
    status: 200,
  },
  {
    name: 'Gera preview de questão de multipla escolha',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes/preview',
    sample: previewMultiplaEscolha,
    status: 200,
    func: (err, res, done) => {
      res.body.status.should.equal('PROCESSANDO')
      const typeOfId = typeof res.body.impressaoId
      typeOfId.should.equal('string')
      done()
    },
  },
  {
    name: 'Gera preview de questão de bloco',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes/preview',
    sample: previewBloco,
    status: 200,
  },
  {
    name: 'Criar questão de V ou F válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoVouF,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocenteVouF = res.body.id
      done()
    },
  },
  {
    name: 'Criar questão discursiva válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoDiscursiva,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocenteDiscursiva = res.body.id
      done()
    },
  },
  {
    name: 'Criar questão associação entre colunas válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoAssociacaoDeColunas,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocenteAssociacaoDeColunas = res.body.id
      done()
    },
  },
  {
    name: 'Criar questão de redação válida como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoRedacao,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocenteRedacao = res.body.id
      done()
    },
  },
  {
    name: 'Listar questoes',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/questoes',
    status: 200,
  },
]
