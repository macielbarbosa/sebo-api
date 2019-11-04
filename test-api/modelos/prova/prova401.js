const prova = require('test-api/samples/prova/sampleProva')
const sampleProvaVistaDeProvaHabilitada = require('test-api/samples/prova/sampleProvaVistaDeProvaHabilitada')

exports.prova401 = [
  {
    name: 'Falha ao criar prova como discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/provas/',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao criar prova como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/provas/',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao tentar alterar prova de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/provas/:provaDoDocente',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao tentar alterar prova pronta para aplicação',
    verb: 'patch',
    as: 'docente',
    rota: '/api/provas/:provaProntaParaAplicacao',
    sample: prova,
    status: 401,
  },
  {
    name: 'Falha ao tentar excluir prova de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/provas/:provaDoDocente',
    status: 401,
  },
  {
    name: 'Falha ao tentar alterar vista de prova de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/provas/:provaVistaProvaCorrigida/vista-de-prova',
    sample: sampleProvaVistaDeProvaHabilitada,
    status: 401,
  },
]
