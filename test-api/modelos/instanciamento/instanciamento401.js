const sampleRespostaMultiplaEscolha = require('test-api/samples/resposta/sampleRespostaMultiplaEscolha')
const prova = require('test-api/samples/prova/sampleProva')

exports.instanciamento401 = [
  {
    name: 'Falha ao tentar alterar resposta como docente',
    verb: 'put',
    as: 'docente',
    rota: '/api/instanciamentos/:instanciaParaSalvarResposta/salvar-resposta',
    sample: sampleRespostaMultiplaEscolha,
    status: 401,
  },
  {
    name: 'Falha ao criar instanciamento como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/instanciamentos/',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao criar instanciamento como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/instanciamentos/',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao criar instanciamento como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/instanciamentos/',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao tentar excluir instanciamentos de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/instanciamentos/:provaDoDocente',
    status: 401,
  },
  {
    name: 'Falha ao tentar listar instancias com um certo idMatriz como um discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/by-matriz',
    filter: 'idMatriz=df968732-802c-4006-a59d-126d2ebda7fa',
    status: 401,
  },
  {
    name: 'Falha ao tentar listar instancias com um certo idMatriz como um discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/instanciamentos/by-matriz',
    filter: 'idMatriz=df968732-802c-4006-a59d-126d2ebda7fa',
    status: 401,
  },
]
