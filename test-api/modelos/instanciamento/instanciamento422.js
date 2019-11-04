const instanciamento4 = require('test-api/samples/instanciamento/instanciamento4')
const sampleRespostaMultiplaEscolha = require('test-api/samples/resposta/sampleRespostaMultiplaEscolha')
const sampleRespostaVouF = require('test-api/samples/resposta/sampleRespostaVouF')
const sampleRespostaDiscursiva = require('test-api/samples/resposta/sampleRespostaDiscursiva')

exports.instanciamento422 = [
  {
    name: 'Cria instanciamento invalido com periodo de aplicação valido',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/',
    sample: () => {
      const hoje = new Date()
      const amanha = new Date().setDate(hoje.getDate() + 1)
      const instancia = Object.assign({}, instanciamento4, {
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
    name: 'Falha ao tentar salvar resposta sem tipo',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: {
      grupoIndex: 0,
      questaoIndex: 1,
      respostaCandidato: 'a',
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar salvar resposta sem grupo',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: {
      tipo: 'multiplaEscolha',
      questaoIndex: 1,
      respostaCandidato: 'a',
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar salvar resposta sem questao',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: {
      tipo: 'multiplaEscolha',
      grupoIndex: 0,
      respostaCandidato: 'a',
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar salvar resposta em grupo inexistente',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: Object.assign({}, sampleRespostaMultiplaEscolha, { grupoIndex: 10 }),
    status: 422,
  },
  {
    name: 'Falha ao tentar salvar resposta de questão inexistente',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: Object.assign({}, sampleRespostaMultiplaEscolha, { questaoIndex: 10 }),
    status: 422,
  },
  {
    name: 'Falha ao tentar salvar resposta de questao bloco',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: Object.assign({}, sampleRespostaMultiplaEscolha, { tipo: 'bloco' }),
    status: 422,
  },
  {
    name: 'Falhar ao tentar salvar resposta multiplaEscolha com resolucao concluida',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaMultiplaEscolha,
    status: 422,
  },
  {
    name: 'Falhar ao tentar salvar resposta vouf com resolucao concluida',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaVouF,
    status: 422,
  },
  {
    name: 'Falhar ao tentar salvar resposta discursiva com resolucao concluida',
    verb: 'put',
    as: 'discente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaDiscursiva,
    status: 422,
  },
]
