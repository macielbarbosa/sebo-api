const sampleProvaVistaDeProvaHabilitada = require('test-api/samples/prova/sampleProvaVistaDeProvaHabilitada')

exports.prova403 = [
  {
    name: 'Falha ao tentar trocar o status da vista de prova como docente quando a prova não tem dados de aplicação.',
    verb: 'patch',
    as: 'docente',
    rota: '/api/provas/:provaProntaParaAplicacao/vista-de-prova',
    sample: sampleProvaVistaDeProvaHabilitada,
    status: 403,
  },
]
