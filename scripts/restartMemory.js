const defaultData = {
  ids: {
    User: 1,
    AccessToken: 1,
    ACL: 1,
    RoleMapping: 5,
    Role: 5,
    Usuario: 5,
    Questao: 1,
    Prova: 1,
  },
  models: {
    User: {},
    AccessToken: {},
    ACL: {},
    RoleMapping: {
      1: '{"principalType":"USER","principalId":"f396807c-a55b-485a-8903-905cc99959d7","roleId":1,"id":1}',
      2: '{"principalType":"USER","principalId":"2b99dceb-f946-410b-ba29-75292a3fe4fe","roleId":2,"id":2}',
      3: '{"principalType":"USER","principalId":"c1a9eb88-3445-4f73-9e60-01169d3dd47c","roleId":3,"id":3}',
      4: '{"principalType":"USER","principalId":"d4370aef-e6d2-4bac-9837-31135e2260b0","roleId":4,"id":4}',
    },
    Role: {
      1: '{"name":"admin","created":"2018-07-25T20:07:03.488Z","modified":"2018-07-25T20:07:03.488Z","id":1}',
      2: '{"name":"docente","created":"2018-07-25T20:07:03.490Z","modified":"2018-07-25T20:07:03.490Z","id":2}',
      3: '{"name":"discente","created":"2018-07-25T20:07:03.490Z","modified":"2018-07-25T20:07:03.490Z","id":3}',
      4: '{"name":"super","created":"2018-07-25T20:07:03.490Z","modified":"2018-07-25T20:07:03.490Z","id":4}',
    },
    Usuario: {
      'f396807c-a55b-485a-8903-905cc99959d7':
        '{"id":"f396807c-a55b-485a-8903-905cc99959d7","nome":"Admin SobrenomeAdmin","instituicao":"UFRN","username":"admin","password":"$2a$10$QeIocu660aGYyrxxmVvEfezXrHK0cAD3oPL2H8A3kmfjfIUqm933W","email":"admin@ufrn.br","criadoPor":"sistema","permissoes":[1],"dataCadastro":"2018-07-25T20:07:03.661Z","dataUltimaAlteracao":"2018-07-25T20:07:03.661Z"}',
      '2b99dceb-f946-410b-ba29-75292a3fe4fe':
        '{"id":"2b99dceb-f946-410b-ba29-75292a3fe4fe","nome":"ODocente SobrenomeDocente","instituicao":"UFRN","username":"docente","password":"$2a$10$5AVWg8mL2.aZ2DrXFK4X.uAaW2k9mSXpH/iPUiB9r3J4/Tc0ZDHkm","email":"docente@ufrn.br","criadoPor":"sistema","permissoes":[2],"dataCadastro":"2018-07-25T20:07:03.787Z","dataUltimaAlteracao":"2018-07-25T20:07:03.787Z"}',
      'c1a9eb88-3445-4f73-9e60-01169d3dd47c':
        '{"id":"c1a9eb88-3445-4f73-9e60-01169d3dd47c","nome":"IDiscente SobrenomeDiscente","instituicao":"UFRN","username":"discente","password":"$2a$10$T.MIkgqP1wOpz.EDN4wQHOJBsy6TZiguUj99QL/fi33NB5q2.BeZG","email":"discente@ufrn.br","criadoPor":"sistema","permissoes":[3],"dataCadastro":"2018-07-25T20:07:03.916Z","dataUltimaAlteracao":"2018-07-25T20:07:03.916Z"}',
      'd4370aef-e6d2-4bac-9837-31135e2260b0':
        '{"id":"d4370aef-e6d2-4bac-9837-31135e2260b0","nome":"Super Admin","instituicao":"UFRN","username":"super","password":"$2a$10$cqf2W5742hUJecToqju1wOHnGuA/6FissbIeZ43nygehmN4bxgcHO","email":"super@ufrn.br","criadoPor":"sistema","permissoes":[4],"dataCadastro":"2018-07-25T20:07:04.035Z","dataUltimaAlteracao":"2018-07-25T20:07:04.035Z"}',
    },
    Questao: {},
    Prova: {},
  },
}

const editaJson = require('edit-json-file')
const NOME_ARQUIVO = 'db.json'

let arquivo = editaJson(NOME_ARQUIVO)
arquivo.set(defaultData)
arquivo.save()

console.log('Banco de dados JSON reiniciado.')
