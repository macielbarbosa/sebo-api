const { enumStatusAplicacao } = require('entidades/enumStatusAplicacao')

const { testData } = require('test-api/testData')
const prova = require('test-api/samples/prova/sampleProva')
const provaDinamica = require('test-api/samples/prova/sampleProvaDinamica')
const dadosAplicacaoPapel = require('test-api/samples/sampleDadosAplicacaoPapel')
// const sampleChamadaPreviewProva = require('test-api/samples/sampleChamadaPreviewProva')
const dadosAplicacaoVirtual = require('test-api/samples/sampleDadosAplicacaoVirtual')
const sampleProvaParaGerarPdfDoInstanciamento = require('test-api/samples/prova/sampleProvaParaGerarPdfDoInstanciamento')
const sampleStatusAplicada = require('test-api/samples/prova/sampleStatusProva')
const provaAplicada = require('test-api/samples/prova/sampleProvaAplicada')
const sampleProvaVistaDeProvaHabilitada = require('test-api/samples/prova/sampleProvaVistaDeProvaHabilitada')

const getProva = () => JSON.parse(JSON.stringify(prova))

const { ids } = testData

const getProvaEdit = () => {
  const { grupos } = getProva()
  grupos[0].questoes.pop()
  return { titulo: 'novoTitulo', grupos }
}

exports.prova200 = [
  {
    name: 'Criar prova como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: prova,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaDoDocente = res.body.id
      done()
    },
  },
  {
    name: 'Criar prova para exclusão',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: prova,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaParaExcluir = res.body.id
      done()
    },
  },
  {
    name: 'Duplicação de prova',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/:provaParaExcluir/duplicar',
    status: 200,
  },
  {
    name: 'Criar prova para aplicar papel',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: prova,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaParaAplicarPapel = res.body.id
      done()
    },
  },
  {
    name: 'Aplicar prova tipo papel',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/aplicar/:provaParaAplicarPapel',
    sample: dadosAplicacaoPapel,
    status: 200,
    func: (err, res, done) => {
      const { prova } = res.body
      prova.status.should.equal(enumStatusAplicacao.prontaParaAplicacao)
      const type = typeof prova.dadosAplicacao
      type.should.equal('object')
      done()
    },
  },
  {
    name: 'Reverter aplicação de prova tipo papel',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/reverter-aplicacao/:provaParaAplicarPapel',
    status: 200,
    func: (err, res, done) => {
      const { prova } = res.body
      prova.status.should.equal(enumStatusAplicacao.elaboracao)
      const temDadosAplicacao = Boolean(prova.dadosAplicacao)
      temDadosAplicacao.should.equal(true)
      done()
    },
  },
  {
    name: 'Criar prova para aplicar virtual',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: prova,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaParaAplicarVirtual = res.body.id
      done()
    },
  },
  {
    name: 'Aplicar prova tipo virtual',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/aplicar/:provaParaAplicarVirtual',
    sample: dadosAplicacaoVirtual,
    status: 200,
    func: (err, res, done) => {
      const { prova } = res.body
      prova.status.should.equal(enumStatusAplicacao.prontaParaAplicacao)
      const type = typeof prova.dadosAplicacao
      type.should.equal('object')
      done()
    },
  },
  {
    name: 'Reverter aplicação de prova tipo virtual',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/reverter-aplicacao/:provaParaAplicarVirtual',
    status: 200,
    func: (err, res, done) => {
      const { prova } = res.body
      prova.status.should.equal(enumStatusAplicacao.elaboracao)
      const temDadosAplicacao = Boolean(prova.dadosAplicacao)
      temDadosAplicacao.should.equal(true)
      done()
    },
  },
  {
    name: 'Criar prova dinamica',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: provaDinamica,
    status: 200,
  },
  {
    name: 'Buscar provas do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/provas',
    status: 200,
    func: (err, res, done) => {
      res.body.forEach(prova => {
        const { questoes, questaoIds } = prova
        questoes.length.should.equal(questaoIds.length)
      })
      done()
    },
  },
  {
    name: 'Excluir prova',
    verb: 'delete',
    as: 'docente',
    rota: '/api/provas/:provaParaExcluir',
    status: 200,
  },
  {
    name: 'Buscar provas excluídas do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/provas/lixeira',
    status: 200,
  },
  {
    name: 'Buscar contagem de provas excluídas do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/provas/lixeira/count',
    status: 200,
  },
  {
    name: 'Restaurar prova da lixeira',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/lixeira/restaurar/:provaParaExcluir',
    status: 200,
  },
  {
    name: 'Excluir prova novamente',
    verb: 'delete',
    as: 'docente',
    rota: '/api/provas/:provaParaExcluir',
    status: 200,
  },
  {
    name: 'Excluir prova da lixeira',
    verb: 'delete',
    as: 'docente',
    rota: '/api/provas/lixeira/:provaParaExcluir',
    status: 200,
  },
  {
    name: 'Altera prova como docente',
    verb: 'patch',
    as: 'docente',
    rota: '/api/provas/:provaDoDocente',
    sample: getProvaEdit,
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      const { grupos } = getProvaEdit()
      const questaoIds = []
      grupos.forEach(grupo => grupo.questoes.forEach(questao => questaoIds.push(questao.questaoId)))
      dados.questaoIds.forEach((id, index) => id.should.equal(questaoIds[index]))
      dados.titulo.should.equal('novoTitulo')
      done()
    },
  },
  // {
  //   name: 'Gerar preview de prova em pdf como docente',
  //   verb: 'post',
  //   as: 'docente',
  //   rota: '/api/provas/preview',
  //   sample: sampleChamadaPreviewProva,
  //   status: 200,
  //   func: (err, res, done) => {
  //     const dados = res.body
  //     dados.status.should.equal('PROCESSANDO')
  //     const tipoImpressaoId = typeof dados.impressaoId
  //     tipoImpressaoId.should.equal('string')
  //     done()
  //   },
  // },
  {
    name: 'Gerar pdf de instancias de prova em pdf como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/imprimir-instancias/:provaDoDocente',
    sample: {
      template: sampleProvaParaGerarPdfDoInstanciamento.template,
      titulo: sampleProvaParaGerarPdfDoInstanciamento.titulo,
      dados: sampleProvaParaGerarPdfDoInstanciamento,
      usuarioId: ':docente',
    },
    status: 200,
  },
  {
    name: 'Criar prova para publicação das notas',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: provaAplicada,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaAplicada = res.body.id
      done()
    },
  },
  {
    name: 'Alterar status da prova para Aplicada',
    verb: 'patch',
    as: 'docente',
    rota: '/api/provas/:provaAplicada',
    sample: sampleStatusAplicada,
    status: 200,
    func: (err, res, done) => {
      const { status } = res.body
      status.should.equal(enumStatusAplicacao.aplicada)
      done()
    },
  },
  {
    name: 'Alterar vista de prova para Aplicada ao aluno',
    verb: 'patch',
    as: 'docente',
    rota: '/api/provas/:provaVistaProva/vista-de-prova',
    sample: sampleProvaVistaDeProvaHabilitada,
    status: 200,
    func: (err, res, done) => {
      const { vistaProvaHabilitada } = res.body
      vistaProvaHabilitada.should.equal(false)
      done()
    },
  },
  {
    name: 'Publicar notas para os alunos',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/:provaAplicada/publicar-notas',
    status: 200,
    func: (err, res, done) => {
      const { notasPulicadas } = res.body
      notasPulicadas.should.equal(true)
      done()
    },
  },
  {
    name: 'Despublicar notas para os alunos',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/:provaAplicada/despublicar-notas',
    status: 200,
    func: (err, res, done) => {
      const { notasPulicadas } = res.body
      notasPulicadas.should.equal(false)
      done()
    },
  },
]
