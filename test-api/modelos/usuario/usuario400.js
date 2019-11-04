const aluno = require('test-api/samples/aluno/alunoMatriculaString')

exports.usuario400 = [
  {
    name: 'Falha ao tentar criar aluno com matricula mal inserida',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios/aluno',
    sample: aluno,
    status: 400,
  },
]
