const questaoMultiplaEscolhaEnunciadoEAlternativaVazias = require('test-api/samples/questao/questaoMultiplaEscolhaEnunciadoEAlternativaVazias')
const questaoMultiplaEscolhaAlternativasRepetida = require('test-api/samples/questao/questaoMultiplaEscolhaAlternativasRepetida')
const questaoVouFComAfirmacoesRepetidas = require('test-api/samples/questao/questaoVouFComAfirmacoesRepetidas')
const questaoAssociacaoDeColunasComSentencasRepetidas = require('test-api/samples/questao/questaoAssociacaoDeColunasComSentencasRepetidas')
const questaoDiscursivaInvalida = require('test-api/samples/questao/questaoDiscursivaInvalida')
const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')
const questaoBlocoInvalida = require('test-api/samples/questao/questaoBlocoInvalida')

exports.questaoNaoValidada = [
  {
    name: 'Criar questão de multipla escolha sem enunciado',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolhaEnunciadoEAlternativaVazias,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Validar alternativas repetidas',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolhaAlternativasRepetida,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Nao permitir salvar questao multipla escolha alternativa vazia',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: {
      ...questaoMultiplaEscolha,
      multiplaEscolha: {
        respostaCerta: 'a',
        alternativas: [
          {
            letra: 'a',
            texto: '<p> </p>',
          },
          {
            letra: 'b',
            texto: '<p>    </p>',
          },
        ],
        alternativasPorLinha: 1,
      },
    },
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Validar afirmações de questão vouf',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoVouFComAfirmacoesRepetidas,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Validar afirmações de questão associacao entre colunas',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoAssociacaoDeColunasComSentencasRepetidas,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Validar tamanho da resposta definida para a questao discursiva',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoDiscursivaInvalida,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
  {
    name: 'Validar metadados da questão bloco e questões do bloco',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoBlocoInvalida,
    status: 200,
    func: (err, res, done) => {
      res.body.selo.should.equal('Não validada')
      done()
    },
  },
]
