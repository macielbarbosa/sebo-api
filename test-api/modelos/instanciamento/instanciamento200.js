import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'

const instanciamento2 = require('test-api/samples/instanciamento/instanciamento2')
const instanciamento3 = require('test-api/samples/instanciamento/instanciamento3')
const instanciamento5 = require('test-api/samples/instanciamento/instanciamento5')
const instanciamento7 = require('test-api/samples/instanciamento/instanciamento7')
const sampleRespostaMultiplaEscolha = require('test-api/samples/resposta/sampleRespostaMultiplaEscolha')
const sampleRespostaVouF = require('test-api/samples/resposta/sampleRespostaVouF')
const sampleRespostaDiscursiva = require('test-api/samples/resposta/sampleRespostaDiscursiva')

const sampleProvaAlunoParaGerarPDFInstanciamento = require('test-api/samples/prova/sampleProvaParaGerarPdfDoInstanciamento')

const { testData } = require('test-api/testData')
const { ids } = testData

exports.instanciamento200 = [
  {
    name: 'Cria instanciamento com periodo de aplicação valido',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/',
    sample: () => {
      const hoje = new Date()
      const amanha = new Date().setDate(hoje.getDate() + 1)
      const instancia = Object.assign({}, instanciamento2, {
        virtual: {
          dataInicioProva: hoje,
          dataTerminoProva: amanha,
          duracaoDaProva: 30,
        },
      })
      return instancia
    },
    status: 200,
  },
  {
    name: 'Cria instanciamento cujo periodo de aplicacao já acabou',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/',
    sample: () => {
      const anteontem = new Date().setDate(new Date().getDate() - 2)
      const ontem = new Date().setDate(new Date().getDate() - 1)
      const instancia = Object.assign({}, instanciamento7, {
        virtual: {
          dataInicioProva: anteontem,
          dataTerminoProva: ontem,
          duracaoDaProva: 30,
        },
        status: enumStatusInstanciamento.concluida,
      })
      return instancia
    },
    func: (err, res, done) => {
      ids.instanciaCriadaComPeriodoDeAplicacaoPassado = res.body.id
      done()
    },
    status: 200,
  },
  {
    name: 'Cria instanciamento concluido e com vista de prova Habilitada',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/',
    sample: () => {
      const hoje = new Date()
      const amanha = new Date().setDate(hoje.getDate() + 1)
      const instancia = Object.assign({}, instanciamento5, {
        virtual: {
          dataInicioProva: hoje,
          dataTerminoProva: amanha,
          duracaoDaProva: 30,
        },
        status: enumStatusInstanciamento.concluida,
      })
      return instancia
    },
    func: (err, res, done) => {
      ids.instanciaCriada = res.body.id

      done()
    },
    status: 200,
  },

  {
    name: 'Count funciona',
    verb: 'get',
    as: 'super',
    rota: '/api/instanciamentos/count',
    status: 200,
  },
  {
    name: 'Inciar resolucao da prova',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/iniciar-resolucao',
    status: 200,
  },
  {
    name: 'Salvar resposta multiplaEscolha',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaMultiplaEscolha,
    status: 200,
  },
  {
    name: 'Salvar resposta vouf',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaVouF,
    status: 200,
  },
  {
    name: 'Salvar resposta discursiva',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaDiscursiva,
    status: 200,
  },
  {
    name: 'Finalizar resolucao',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/finalizar-resolucao',
    sample: sampleRespostaDiscursiva,
    status: 200,
  },
  {
    name: 'Listar instancias para Discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/by-candidato',
    status: 200,
  },
  {
    name: 'listar instancias com um certo idMatriz como um docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/instanciamentos/by-matriz',
    filter: 'idMatriz=df968732-802c-4006-a59d-126d2ebda7fa',
    status: 200,
  },
  {
    name: 'Gerar pdf de instancias de prova em pdf como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas/imprimir-instancias/:provaDoDocente',
    sample: {
      template: sampleProvaAlunoParaGerarPDFInstanciamento.template,
      titulo: sampleProvaAlunoParaGerarPDFInstanciamento.titulo,
      dados: sampleProvaAlunoParaGerarPDFInstanciamento,
      usuarioId: ':docente',
    },
    status: 200,
  },
  {
    name: 'Cria instanciamento com notasPublicadas',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/',
    sample: () => {
      const hoje = new Date()
      const amanha = new Date().setDate(hoje.getDate() + 1)
      const instancia = Object.assign(
        {},
        instanciamento3,
        {
          virtual: {
            dataInicioProva: hoje,
            dataTerminoProva: amanha,
            duracaoDaProva: 30,
          },
        },
        { notasPublicadas: true }
      )
      return instancia
    },
    status: 200,
  },
  {
    name: 'Listar instancia com a nota do aluno',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/by-candidato',
    status: 200,
    func: (err, res, done) => {
      const instancias = res.body
      instancias.forEach(instancia => {
        if (instancia.notaProva !== undefined) instancia.notasPublicadas.should.equal(true)
      })
      done()
    },
  },
  {
    name: 'get instancia para vista como um discente',
    verb: 'get',
    as: 'discente',
    rota: `/api/instanciamentos/:instanciaCriada/vista-de-prova`,
    status: 200,
    func: (err, res, done) => {
      const instancia = res.body
      ;(typeof instancia.prova.vistaProvaHabilitada).should.equal('boolean')
      ;(typeof instancia.status).should.equal('string')
      instancia.status.should.equal(enumStatusInstanciamento.concluida)
      instancia.prova.vistaProvaHabilitada.should.equal(true)
      done()
    },
  },
  {
    name: 'checa se uma instancia está no período de aplicacao (true)',
    verb: 'get',
    as: 'discente',
    rota: `/api/instanciamentos/:instanciaCriada/esta-no-intervalo-de-aplicacao`,
    status: 200,
    func: (err, res, done) => {
      ;(typeof res.body).should.equal('boolean')
      res.body.should.equal(true)
      done()
    },
  },
  {
    name: 'checa se uma instancia está no período de aplicacao (false)',
    verb: 'get',
    as: 'discente',
    rota: `/api/instanciamentos/:instanciaCriadaComPeriodoDeAplicacaoPassado/esta-no-intervalo-de-aplicacao`,
    status: 200,
    func: (err, res, done) => {
      ;(typeof res.body).should.equal('boolean')
      res.body.should.equal(false)
      done()
    },
  },
]
