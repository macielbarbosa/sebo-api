exports.dbTestStable = {
  ids: {
    AccessToken: 5,
    Usuario: 2,
    RoleMapping: 6,
    Evento: 16,
    Tag: 10,
    Prova: 4,
    Questao: 2,
    Impressao: 3,
    Turma: 1,
    Caderno: 3,
    Concurso: 3,
  },
  models: {
    User: {},
    AccessToken: {
      '6ZY4LB6iuiBED5ha5wgjH3PZcDMFWyTXdx5b2czFOqPRUioXZvUtRmJvNdXbSGQ2':
        '{"id":"6ZY4LB6iuiBED5ha5wgjH3PZcDMFWyTXdx5b2czFOqPRUioXZvUtRmJvNdXbSGQ2","ttl":1209600,"created":"2019-01-28T04:18:57.930Z","userId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '7Mp7278GGdydYiqrZAfpFKh3mzOMzPKOKXMU8YezAGYaqkTSDIdYShbi2b0ZRCex':
        '{"id":"7Mp7278GGdydYiqrZAfpFKh3mzOMzPKOKXMU8YezAGYaqkTSDIdYShbi2b0ZRCex","ttl":1209600,"created":"2019-01-28T04:18:58.043Z","userId":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf"}',
      HYawTyBmZRnowfsstq2sH3HizjYeFPvztqA0qBXxs5ExIZ4svet5bYf1LMcT2mDQ:
        '{"id":"HYawTyBmZRnowfsstq2sH3HizjYeFPvztqA0qBXxs5ExIZ4svet5bYf1LMcT2mDQ","ttl":1209600,"created":"2019-01-28T04:18:58.148Z","userId":"cd6565ad-d520-4e6d-a139-7f17dd906b6c"}',
      PE6GMOOFzcFuOPb4S0ZvOtkoCk9VoJEhUHK1VZYFtWMt6tvbYdLSOGBIzc2eouNJ:
        '{"id":"PE6GMOOFzcFuOPb4S0ZvOtkoCk9VoJEhUHK1VZYFtWMt6tvbYdLSOGBIzc2eouNJ","ttl":1209600,"created":"2019-01-28T04:18:58.246Z","userId":"2d2f51ff-31d5-4bf3-979e-78cfc4ecb356"}',
      nzeTCuN8vY4KCgmZ1QoMn6qLuOtXaPOgxhv82aN6PNjY7ktyuCVIDZmvphoH9mqe:
        '{"id":"nzeTCuN8vY4KCgmZ1QoMn6qLuOtXaPOgxhv82aN6PNjY7ktyuCVIDZmvphoH9mqe","ttl":1209600,"created":"2019-01-28T04:18:58.246Z","userId":"8522bc22-cb71-41b5-a9ac-dc7d53747e50"}',
    },
    ACL: {},
    RoleMapping: {
      '1':
        '{"principalType":"USER","principalId":"2d2f51ff-31d5-4bf3-979e-78cfc4ecb356","roleId":1,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":1}',
      '2':
        '{"principalType":"USER","principalId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","roleId":2,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":2}',
      '3':
        '{"principalType":"USER","principalId":"cd6565ad-d520-4e6d-a139-7f17dd906b6c","roleId":3,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":3}',
      '4':
        '{"principalType":"USER","principalId":"3e68a6da-79f2-4d4c-9730-7da504b2b7f5","roleId":4,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":4}',
      '5':
        '{"principalType":"USER","principalId":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","roleId":2,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":5}',
      '10':
        '{"principalType":"USER","principalId":"8522bc22-cb71-41b5-a9ac-dc7d53747e50","roleId":5,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":10}',
      '11':
        '{"principalType":"USER","principalId":"dccc93c2-41db-4aa8-a415-f4712e9fce11","roleId":3,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":11}',
      '12':
        '{"principalType":"USER","principalId":"dccc93c2-41db-4aa8-a415-f4712e9fce12","roleId":3,"deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":12}',
    },
    Role: {
      '1':
        '{"name":"admin","created":"2018-09-08T17:19:26.894Z","modified":"2018-09-08T17:19:26.894Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":1}',
      '2':
        '{"name":"docente","created":"2018-09-08T17:19:26.895Z","modified":"2018-09-08T17:19:26.895Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":2}',
      '3':
        '{"name":"discente","created":"2018-09-08T17:19:26.895Z","modified":"2018-09-08T17:19:26.895Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":3}',
      '4':
        '{"name":"super","created":"2018-09-08T17:19:26.895Z","modified":"2018-09-08T17:19:26.895Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":4}',
      '5':
        '{"name":"gestor","created":"2018-09-08T17:19:26.895Z","modified":"2018-09-08T17:19:26.895Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"id":5}',
    },
    Usuario: {
      '2d2f51ff-31d5-4bf3-979e-78cfc4ecb356':
        '{"id":"2d2f51ff-31d5-4bf3-979e-78cfc4ecb356","nome":"Admin SobrenomeAdmin","instituicao":"UFRN","username":"admin","password":"$2a$10$C3NMCzkPsYk4yELTVjQusu47oB/YFaPukWv6AlGjO3W3gnS4ao.zS","email":"admin@ufrn.br","dataCadastro":"2018-09-08T17:19:27.042Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"dataUltimaAlteracao":"2018-09-08T17:19:27.042Z"}',
      'dccc93c2-41db-4aa8-a415-f4712e9fce10':
        '{"id":"dccc93c2-41db-4aa8-a415-f4712e9fce10","nome":"ODocente SobrenomeDocente","instituicao":"UFRN","username":"docente","password":"$2a$10$ojj58HJ9bZF.WOcs3W5G/u/h1zifGQ4Ht51XCH/58xlKtqNRhAYQa","email":"docente@ufrn.br","dataCadastro":"2018-09-08T17:19:27.144Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"dataUltimaAlteracao":"2018-09-08T17:19:27.144Z"}',
      'cd6565ad-d520-4e6d-a139-7f17dd906b6c':
        '{"id":"cd6565ad-d520-4e6d-a139-7f17dd906b6c","nome":"IDiscente SobrenomeDiscente","instituicao":"UFRN","username":"discente","password":"$2a$10$xs3b23twGFvJldoBRWNNJOMVSuXZZa6J/CsaNfkGpK/w8wmUud0gy","email":"discente@ufrn.br","dataCadastro":"2018-09-08T17:19:27.244Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"dataUltimaAlteracao":"2018-09-08T17:19:27.244Z"}',
      '3e68a6da-79f2-4d4c-9730-7da504b2b7f5':
        '{"id":"3e68a6da-79f2-4d4c-9730-7da504b2b7f5","nome":"Super Admin","instituicao":"UFRN","username":"super","password":"$2a$10$bokCG9CQWTxhqMb1qnE.HuAU2T8McZCCVBZ/RLCBLHrwdKq0pSsYS","email":"super@ufrn.br","dataCadastro":"2018-09-08T17:19:27.344Z","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"dataUltimaAlteracao":"2018-09-08T17:19:27.344Z"}',
      '70e2569a-2fbd-4c3d-ae02-156fc30c6ccf':
        '{"id":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","nome":"professor","instituicao":"UFRN","username":"professor","password":"$2a$10$RYMl412hkY6Zk.HNbeRAVOPl9pGpZAOTLIYKgK1fn7U26MCsGhj3a","email":"professor@gmail.com","isDeleted":false,"dataCadastro":"2019-01-26T06:22:33.088Z","dataUltimaAlteracao":"2019-01-26T06:22:33.088Z"}',
      '8522bc22-cb71-41b5-a9ac-dc7d53747e50':
        '{"id":"8522bc22-cb71-41b5-a9ac-dc7d53747e50","nome":"gestor","instituicao":"UFRN","username":"gestor","password":"$2a$10$RYMl412hkY6Zk.HNbeRAVOPl9pGpZAOTLIYKgK1fn7U26MCsGhj3a","email":"gestor@ufrn.com","isDeleted":false,"dataCadastro":"2019-01-26T06:22:33.088Z","dataUltimaAlteracao":"2019-01-26T06:22:33.088Z"}',
      'dccc93c2-41db-4aa8-a415-f4712e9fce11':
        '{"id":"dccc93c2-41db-4aa8-a415-f4712e9fce11","nome":"Cicrano de tal","instituicao":"UFRN","username":"cicrano","password":"$2a$10$RYMl412hkY6Zk.HNbeRAVOPl9pGpZAOTLIYKgK1fn7U26MCsGhj3a","email":"cicrano@gmail.com","isDeleted":false,"dataCadastro":"2019-01-26T06:22:33.088Z","dataUltimaAlteracao":"2019-01-26T06:22:33.088Z"}',
      'dccc93c2-41db-4aa8-a415-f4712e9fce12':
        '{"id":"dccc93c2-41db-4aa8-a415-f4712e9fce12","nome":"Beltrano de tal","instituicao":"UFRN","username":"beltrano","password":"$2a$10$RYMl412hkY6Zk.HNbeRAVOPl9pGpZAOTLIYKgK1fn7U26MCsGhj3a","email":"beltrano@gmail.com","isDeleted":false,"dataCadastro":"2019-01-26T06:22:33.088Z","dataUltimaAlteracao":"2019-01-26T06:22:33.088Z"}',
    },
    Questao: {
      'a1616594-18ae-48d8-9ec5-f3081c60245b':
        '{"id":"a1616594-18ae-48d8-9ec5-f3081c60245b","selo": "Validada","dataCadastro":"2019-03-26T01:21:00.314Z","dataUltimaAlteracao":"2019-03-26T01:21:00.314Z","enunciado":"<p> Enunciado de um bloco: </p>","tipo":"bloco","status":{"id":"el","texto":"Em elaboração"},"bloco":{"fraseInicial":"<p>Texto para as questões 1 a 3:</p><p></p><p><strong>Retrato</strong><br/></p><p>Eu não tinha este rosto de hoje, <br/>assim calmo, assim triste, assim magro, <br/>nem estes olhos tão vazios, <br/>nem o lábio amargo.<br/></p><p>Eu não tinha estas mãos sem força, <br/>tão paradas e frias e mortas; <br/>eu não tinha este coração <br/>que nem se mostra. <br/></p><p>Eu não dei por esta mudança, <br/>tão simples, tão certa, tão fácil: <br/>- Em que espelho ficou perdida <br/>a minha face?</p><p></p><p>Cecília Meireles , Antologia Poética. Rio de Janeiro: Editora Nova Fronteira, 2001. </p>","questoes":[{"id":"82483c2b-bcd1-482e-98cf-8133b257165f","enunciado":"<p> A função de linguagem predominante no texto é a: </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>   Emotiva.  </p>"},{"letra":"b","texto":"<p> Conativa. </p>"},{"letra":"c","texto":"<p> Metalinguística. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["153f6228-d1c9-47ef-86d5-2e40a4d432d5"]},{"id":"29988d79-1d8f-4f12-b2d9-703440e2f54d","enunciado":"<p> Para expressar as mudanças físicas de seu corpo e como o mesmo se encontra depois delas, o eu lírico utiliza predominantemente os recursos da:    </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Descrição.  </p>"},{"letra":"b","texto":"<p>  Narração.  </p>"},{"letra":"c","texto":"<p> Dissertação. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["444d287b-c221-42ca-9249-c5dd5b001932"]},{"id":"0a77bb91-a6ec-4bcb-91db-68cbfdc6f3d8","enunciado":"<p> Sobre a relação entre as palavras no trecho <em>&quot;eu não tinha este coração/ que nem se mostra&quot;</em> , o vocábulo <em>&quot;que&quot;</em> assume a função morfossintática de: </p>","dificuldade":2,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Pronome relativo. </p>"},{"letra":"b","texto":"<p> Conjunção integrante. </p>"},{"letra":"c","texto":"<p> Interjeição. </p>"},{"letra":"d","texto":"<p> Conjunção integrante. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["d3dee93f-1daf-4120-864b-132bc40d402d"]}]},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[]}',
      'a09b6edb-bc93-44fc-9247-ed8dade64ae9':
        '{"id":"a09b6edb-bc93-44fc-9247-ed8dade64ae9","selo": "Validada","dataCadastro":"2019-03-26T01:21:00.314Z","dataUltimaAlteracao":"2019-03-26T01:21:00.314Z","enunciado":"<p> Enunciado de um bloco: </p>","tipo":"bloco","status":{"id":"el","texto":"Em elaboração"},"bloco":{"fraseInicial":"<p>Texto para as questões 1 a 3:</p><p></p><p><strong>Retrato</strong><br/></p><p>Eu não tinha este rosto de hoje, <br/>assim calmo, assim triste, assim magro, <br/>nem estes olhos tão vazios, <br/>nem o lábio amargo.<br/></p><p>Eu não tinha estas mãos sem força, <br/>tão paradas e frias e mortas; <br/>eu não tinha este coração <br/>que nem se mostra. <br/></p><p>Eu não dei por esta mudança, <br/>tão simples, tão certa, tão fácil: <br/>- Em que espelho ficou perdida <br/>a minha face?</p><p></p><p>Cecília Meireles , Antologia Poética. Rio de Janeiro: Editora Nova Fronteira, 2001. </p>","questoes":[{"id":"82483c2b-bcd1-482e-98cf-8133b257165f","enunciado":"<p> A função de linguagem predominante no texto é a: </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>   Emotiva.  </p>"},{"letra":"b","texto":"<p> Conativa. </p>"},{"letra":"c","texto":"<p> Metalinguística. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["153f6228-d1c9-47ef-86d5-2e40a4d432d5"]},{"id":"29988d79-1d8f-4f12-b2d9-703440e2f54d","enunciado":"<p> Para expressar as mudanças físicas de seu corpo e como o mesmo se encontra depois delas, o eu lírico utiliza predominantemente os recursos da:    </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Descrição.  </p>"},{"letra":"b","texto":"<p>  Narração.  </p>"},{"letra":"c","texto":"<p> Dissertação. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["444d287b-c221-42ca-9249-c5dd5b001932"]},{"id":"0a77bb91-a6ec-4bcb-91db-68cbfdc6f3d8","enunciado":"<p> Sobre a relação entre as palavras no trecho <em>&quot;eu não tinha este coração/ que nem se mostra&quot;</em> , o vocábulo <em>&quot;que&quot;</em> assume a função morfossintática de: </p>","dificuldade":2,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Pronome relativo. </p>"},{"letra":"b","texto":"<p> Conjunção integrante. </p>"},{"letra":"c","texto":"<p> Interjeição. </p>"},{"letra":"d","texto":"<p> Conjunção integrante. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["d3dee93f-1daf-4120-864b-132bc40d402d"]}]},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[]}',
      'd2a37f71-f673-4695-a377-75b0d5d6698b':
        '{"id":"d2a37f71-f673-4695-a377-75b0d5d6698b","selo": "Validada","dataCadastro":"2019-03-26T01:21:00.273Z","dataUltimaAlteracao":"2019-03-26T01:21:00.296Z","enunciado":"a","dificuldade":1,"anoEscolar":"Ensino superior: basico","tipo":"multiplaEscolha","status":{"id":"el","texto":"Em elaboração"},"multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Ela é a menina mais bonita da escola. </p>"},{"letra":"b","texto":"<p> Os médicos fizeram todos os possíveis mais o paciente não sobreviveu. </p>"},{"letra":"c","texto":"<p>Eu comprei o chocolate mas gostoso da loja.</p>"},{"letra":"d","texto":"<p> Eu iria ao cinema, mais não tenho dinheiro. </p>"},{"letra":"e","texto":"<p> Nenhuma das alternativas </p>"}],"alternativasPorLinha":1},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[],"tagsVirtuais":null}',
      '11111111-f673-4695-a377-75b0d5d6698b':
        '{"id":"11111111-f673-4695-a377-75b0d5d6698b","selo": "Validada","dataCadastro":"2019-03-26T01:21:00.273Z","dataUltimaAlteracao":"2019-03-26T01:21:00.296Z","enunciado":"a","dificuldade":1,"anoEscolar":"Ensino superior: basico","tipo":"multiplaEscolha","status":{"id":"el","texto":"Em elaboração"},"multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Ela é a menina mais bonita da escola. </p>"},{"letra":"b","texto":"<p> Os médicos fizeram todos os possíveis mais o paciente não sobreviveu. </p>"},{"letra":"c","texto":"<p>Eu comprei o chocolate mas gostoso da loja.</p>"},{"letra":"d","texto":"<p> Eu iria ao cinema, mais não tenho dinheiro. </p>"},{"letra":"e","texto":"<p> Nenhuma das alternativas </p>"}],"alternativasPorLinha":1},"usuarioId":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","criadoPor":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","isDeleted":false,"ocultoLixeira":false,"tagIds":[],"tagsVirtuais":null}',
    },
    QuestaoDoConcurso: {},
    Prova: {
      '62dfdb67-2ac8-4c15-a92f-f3500e33ffe4':
        '{"id":"62dfdb67-2ac8-4c15-a92f-f3500e33ffe4","vistaProvaHabilitada":false,"tipoProva":"convencional","dataCadastro":"2019-01-27T02:52:39.950Z","dataUltimaAlteracao":"2019-01-27T02:52:40.242Z","descricao":"Prova exemplo de matemática","titulo":"novoTitulo","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"id":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em aplicação","tipoEmbaralhamento":2,"usuarioId":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b"],"criadoPor":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","isDeleted":false,"ocultoLixeira":false,"tagIds":["397b0bb2-9356-44f9-bad7-426a7ad927f6"],"tema":"Matemática"}',
      '5de1bf01-19fd-4dbc-88a8-7b4014fff2c2':
        '{"id":"5de1bf01-19fd-4dbc-88a8-7b4014fff2c2","vistaProvaHabilitada":false,"tipoProva":"convencional","dataCadastro":"2019-01-27T02:52:40.000Z","dataUltimaAlteracao":"2019-01-27T02:52:40.000Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"id":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"id":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"70e2569a-2fbd-4c3d-ae02-156fc30c6ccf","isDeleted":true,"ocultoLixeira":true,"tagIds":["263b18f6-0c6b-410f-9d51-ced95a204915"],"tema":"Matemática","deletedAt":"2019-01-27T02:52:40.150Z"}',
      '235e318c-4c52-41e6-a0c4-2cbe8b599df7':
        '{"id":"235e318c-4c52-41e6-a0c4-2cbe8b599df7","tipoProva":"convencional","dataCadastro":"2019-01-28T04:18:58.687Z","dataUltimaAlteracao":"2019-01-28T04:18:58.687Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["c03c66a7-130c-4bee-a031-cc905682291f"],"tema":"Matemática"}',
      'e444885b-25ee-4a42-b148-b8334e385a5a':
        '{"id":"e444885b-25ee-4a42-b148-b8334e385a5a","vistaProvaHabilitada":true,"tipoProva":"convencional","dataCadastro":"2019-01-28T04:18:58.690Z","dataUltimaAlteracao":"2019-01-28T04:18:58.690Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em aplicação","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["a3626f58-2cf6-4644-84b9-fa67ab8a7e01"],"tema":"Matemática"}',
      '9aba557f-ba7d-468a-90f4-35f5e316ad80':
        '{"id":"9aba557f-ba7d-468a-90f4-35f5e316ad80","vistaProvaHabilitada":false,"tipoProva":"convencional","dataCadastro":"2019-01-28T04:18:58.728Z","dataUltimaAlteracao":"2019-01-28T04:18:58.728Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em aplicação","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":true,"ocultoLixeira":true,"tagIds":["039b3a82-59e2-470b-936f-d9b648f73602"],"tema":"Matemática","deletedAt":"2019-01-28T04:18:58.858Z"}',
      '5f60dce5-7ee1-436b-9b5d-0746b4aea25f':
        '{"id":"5f60dce5-7ee1-436b-9b5d-0746b4aea25f","vistaProvaHabilitada":false,"tipoProva":"convencional","dataCadastro":"2019-01-28T04:34:36.739Z","dataUltimaAlteracao":"2019-01-28T04:34:36.884Z","descricao":"Prova exemplo de matemática","titulo":"novoTitulo","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Pronta para aplicação","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["5f650f55-4c08-415f-8cca-8d740bae75e4"],"tema":"Matemática"}',
      '8f48f5d8-a320-4e99-8817-5e934bd63525':
        '{"id":"8f48f5d8-a320-4e99-8817-5e934bd63525","vistaProvaHabilitada":true,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["4db49fa0-de67-48f4-9ec2-38f7660fa2b0"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[],"tipoProva":"convencional","descricao":"DescriçãoNovaProvahhhhhhhhhhhhhh","titulo":"Novaprova","tema":"","instituicao":"","nomeProfessor":"ODocenteSobrenomeDocente","tipoEmbaralhamento":2,"status":"Aplicada","grupos":[{"questoes":[{"questaoId":"4db49fa0-de67-48f4-9ec2-38f7660fa2b0","fixa":false,"peso":1,"valor":1}],"nome":"","id":"67a65446-4a4f-4982-b8c4-a616d1ee3867"}],"valor":1,"sistemaDeNotasDaProva":"valorEmQuestoes","template":"comperve/prova","dataCadastro":"2019-07-31T17:22:38.871Z","dataUltimaAlteracao":"2019-07-31T18:11:59.426Z","dadosAplicacao":{"tipoAplicacao":"virtual","virtual":{"dataInicioProva":"2020-01-01T20:20","dataTerminoProva":"2020-01-10T20:20","duracaoDaProva":12},"participantes":[{"email":"john@doe.com","nome":"JohnDoe","matricula":200}],"grupos":[{"id":"67a65446-4a4f-4982-b8c4-a616d1ee3867","nome":"","questoes":[{"id":"4db49fa0-de67-48f4-9ec2-38f7660fa2b0","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["7e22551f-747a-48c0-bc79-294240cc58de","90bf52a1-7152-4ae7-8970-c87d8ccb8a99","e36ea600-ad96-48ba-8f5f-418897d7c9a6"],"enunciado":"<p>AssinaleV(verdadeiro)ouF(falso)asafirmaçõessobreasfunçõesusualmenteexercidasnoSistemadeAdministraçãodeMateriais.</p>","dificuldade":2,"anoEscolar":"Ensinosuperior:basico","tipo":"vouf","status":{"id":"el","texto":"Emelaboração"},"vouf":{"afirmacoes":[{"texto":"<p>Aatividaderesponsávelpelaidentificação,codificaçãoecatalogaçãodemateriaisefornecedoressedenominaclassificaçãodemateriais.</p>","letra":"?"},{"texto":"<p>Aatividaderesponsávelpelocontrole,inventárioeprogramaçãodasnecessidadesdomaterialsedenominagerênciadecompras.</p>","letra":"?"},{"texto":"<p>Aatividaderesponsávelpelaprocuradefornecedoresemateriaisepelaopçãoporcompra,transformação,permutaedoaçãoéagerênciadeestoques.</p>","letra":"?"},{"texto":"<p>Aatividadequetemaresponsabilidadepelaguarda,preservaçãoesegurançadosmateriaiséoarmazenamentodemateriais.</p>","letra":"?"},{"texto":"<p>Aatividadequetemaresponsabilidadepelorecebimento,conferência,fornecimento,transferênciasedevoluçõessedenominaalienaçãodemateriais.</p><p></p>","letra":"?"}]},"elaborador":"ODocenteSobrenomeDocente","tagsVirtuais":null,"publico":false,"dataCadastro":"2019-06-03T14:13:57.377Z","dataUltimaAlteracao":"2019-06-14T00:54:18.947Z","fixa":false,"peso":1,"valor":1}]}],"dataInstanciamento":"2019-07-31T18:11:59.426Z"},"questoes":[{"id":"4db49fa0-de67-48f4-9ec2-38f7660fa2b0","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["7e22551f-747a-48c0-bc79-294240cc58de","90bf52a1-7152-4ae7-8970-c87d8ccb8a99","e36ea600-ad96-48ba-8f5f-418897d7c9a6"],"enunciado":"<p>AssinaleV(verdadeiro)ouF(falso)asafirmaçõessobreasfunçõesusualmenteexercidasnoSistemadeAdministraçãodeMateriais.</p>","dificuldade":2,"anoEscolar":"Ensinosuperior:basico","tipo":"vouf","status":{"id":"el","texto":"Emelaboração"},"vouf":{"afirmacoes":[{"texto":"<p>Aatividaderesponsávelpelaidentificação,codificaçãoecatalogaçãodemateriaisefornecedoressedenominaclassificaçãodemateriais.</p>","letra":"?"},{"texto":"<p>Aatividaderesponsávelpelocontrole,inventárioeprogramaçãodasnecessidadesdomaterialsedenominagerênciadecompras.</p>","letra":"?"},{"texto":"<p>Aatividaderesponsávelpelaprocuradefornecedoresemateriaisepelaopçãoporcompra,transformação,permutaedoaçãoéagerênciadeestoques.</p>","letra":"?"},{"texto":"<p>Aatividadequetemaresponsabilidadepelaguarda,preservaçãoesegurançadosmateriaiséoarmazenamentodemateriais.</p>","letra":"?"},{"texto":"<p>Aatividadequetemaresponsabilidadepelorecebimento,conferência,fornecimento,transferênciasedevoluçõessedenominaalienaçãodemateriais.</p><p></p>","letra":"?"}]},"elaborador":"ODocenteSobrenomeDocente","tagsVirtuais":null,"publico":false,"dataCadastro":"2019-06-03T14:13:57.377Z","dataUltimaAlteracao":"2019-06-14T00:54:18.947Z"}],"tags":[]}',
    },
    Tag: {
      '59936d08-0e89-4c12-b6e2-147089a4a494':
        '{"id":"59936d08-0e89-4c12-b6e2-147089a4a494","dataCadastro":"2018-09-30T14:03:01.877Z","dataUltimaAlteracao":"2018-09-30T14:03:01.877Z","nome":"Português","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'dbd0f149-bbe4-4fe6-839b-021bc4569cbe':
        '{"id":"dbd0f149-bbe4-4fe6-839b-021bc4569cbe","dataCadastro":"2018-09-30T14:11:00.314Z","dataUltimaAlteracao":"2018-09-30T14:11:00.314Z","nome":"Tirinhas","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '7a98ada8-eee4-40ce-83c1-68c2c5925963':
        '{"id":"7a98ada8-eee4-40ce-83c1-68c2c5925963","dataCadastro":"2018-09-30T14:44:40.556Z","dataUltimaAlteracao":"2018-09-30T14:44:40.556Z","nome":"Filosofia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'de70763e-147b-446f-a9fe-a8646b4a19b1':
        '{"id":"de70763e-147b-446f-a9fe-a8646b4a19b1","dataCadastro":"2018-09-30T14:45:02.911Z","dataUltimaAlteracao":"2018-09-30T14:45:02.911Z","nome":"Filosofia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '9cde926d-b1a0-4d51-8b1e-83735b9e493a':
        '{"id":"9cde926d-b1a0-4d51-8b1e-83735b9e493a","dataCadastro":"2018-09-30T14:48:00.090Z","dataUltimaAlteracao":"2018-09-30T14:48:00.090Z","nome":"Filosofia Política","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '4267cf11-7b1b-431a-b70e-d823776ea8cf':
        '{"id":"4267cf11-7b1b-431a-b70e-d823776ea8cf","dataCadastro":"2018-09-30T14:49:38.587Z","dataUltimaAlteracao":"2018-09-30T14:49:38.587Z","nome":"Sociologia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'da9b6d8d-1f2a-40c9-9f3e-1be43ed9b350':
        '{"id":"da9b6d8d-1f2a-40c9-9f3e-1be43ed9b350","dataCadastro":"2018-09-30T15:12:34.794Z","dataUltimaAlteracao":"2018-09-30T15:12:34.794Z","nome":"Tecnologia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '39f6fb1e-12db-4c63-ab72-3037fe6431e5':
        '{"id":"39f6fb1e-12db-4c63-ab72-3037fe6431e5","dataCadastro":"2018-09-30T15:20:16.796Z","dataUltimaAlteracao":"2018-09-30T15:20:16.796Z","nome":"Aeronautica","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'b0403491-9a88-486a-a6db-9149fb76dd91':
        '{"id":"b0403491-9a88-486a-a6db-9149fb76dd91","dataCadastro":"2018-09-30T15:29:01.425Z","dataUltimaAlteracao":"2018-09-30T15:29:01.425Z","nome":"Engenharia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'f55cae43-8287-44fd-be79-7f95540cd855':
        '{"id":"f55cae43-8287-44fd-be79-7f95540cd855","dataCadastro":"2018-09-30T16:12:53.786Z","dataUltimaAlteracao":"2018-09-30T16:12:53.786Z","nome":"Física","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'ebf291cb-97bd-44fc-a2a4-0dd9b97fb949':
        '{"id":"ebf291cb-97bd-44fc-a2a4-0dd9b97fb949","dataCadastro":"2018-09-30T16:26:57.382Z","dataUltimaAlteracao":"2018-09-30T16:26:57.382Z","nome":"Fórmulas","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '85b7eb39-cce7-4737-85ac-e2655510432a':
        '{"id":"85b7eb39-cce7-4737-85ac-e2655510432a","dataCadastro":"2018-09-30T16:27:36.617Z","dataUltimaAlteracao":"2018-09-30T16:27:36.617Z","nome":"Imagem","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'be333a97-944c-4c9e-8f83-d5b815aea3c0':
        '{"id":"be333a97-944c-4c9e-8f83-d5b815aea3c0","dataCadastro":"2018-09-30T16:31:53.012Z","dataUltimaAlteracao":"2018-09-30T16:31:53.012Z","nome":"Química","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '2504c1ab-5cf1-41ba-9097-26cc68491a74':
        '{"id":"2504c1ab-5cf1-41ba-9097-26cc68491a74","dataCadastro":"2018-09-30T16:37:01.040Z","dataUltimaAlteracao":"2018-09-30T16:37:01.040Z","nome":"Biologia","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'a1a994b3-8ab1-49ac-b9e5-463b471dcb49':
        '{"id":"a1a994b3-8ab1-49ac-b9e5-463b471dcb49","dataCadastro":"2018-09-30T16:45:30.335Z","dataUltimaAlteracao":"2018-09-30T16:45:30.335Z","nome":"Matemática","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      'fdd079c7-6026-4579-91b0-51745f2b8f3b':
        '{"id":"fdd079c7-6026-4579-91b0-51745f2b8f3b","dataCadastro":"2018-09-30T16:52:36.679Z","dataUltimaAlteracao":"2018-09-30T16:52:36.679Z","nome":"Computação Numérica","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10"}',
      '26ad0236-6fdd-454d-b134-b85d96f80462':
        '{"id":"26ad0236-6fdd-454d-b134-b85d96f80462","dataCadastro":"2018-11-24T05:18:42.955Z","dataUltimaAlteracao":"2018-11-24T05:18:42.955Z","nome":"maciel","usuarioId":"1e38f048-9eca-4dd1-b6c4-a0006d19c7e2","isDeleted":false}',
      '353f283a-7c2f-418c-a33b-97af1b6a7897':
        '{"id":"353f283a-7c2f-418c-a33b-97af1b6a7897","dataCadastro":"2019-01-27T02:52:39.711Z","dataUltimaAlteracao":"2019-01-27T02:52:39.711Z","nome":"Português","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'e2ad8407-8308-4f99-9325-d9b16cffbb79':
        '{"id":"e2ad8407-8308-4f99-9325-d9b16cffbb79","dataCadastro":"2019-01-27T02:52:39.712Z","dataUltimaAlteracao":"2019-01-27T02:52:39.712Z","nome":"Mat","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'cba51bbe-b6fd-47a8-8a27-51e8791c22f0':
        '{"id":"cba51bbe-b6fd-47a8-8a27-51e8791c22f0","dataCadastro":"2019-01-27T02:52:39.712Z","dataUltimaAlteracao":"2019-01-27T02:52:39.712Z","nome":"rel","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '397b0bb2-9356-44f9-bad7-426a7ad927f6':
        '{"id":"397b0bb2-9356-44f9-bad7-426a7ad927f6","dataCadastro":"2019-01-27T02:52:39.939Z","dataUltimaAlteracao":"2019-01-27T02:52:39.939Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '263b18f6-0c6b-410f-9d51-ced95a204915':
        '{"id":"263b18f6-0c6b-410f-9d51-ced95a204915","dataCadastro":"2019-01-27T02:52:39.988Z","dataUltimaAlteracao":"2019-01-27T02:52:39.988Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'c5d2c1bf-f378-456d-9f89-05249589d5aa':
        '{"id":"c5d2c1bf-f378-456d-9f89-05249589d5aa","dataCadastro":"2019-01-27T02:52:40.360Z","dataUltimaAlteracao":"2019-01-27T02:52:40.360Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '99bd3ca8-6a5e-47ce-9449-2759631e49fc':
        '{"id":"99bd3ca8-6a5e-47ce-9449-2759631e49fc","dataCadastro":"2019-01-27T02:52:40.390Z","dataUltimaAlteracao":"2019-01-27T02:52:40.390Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '0c1f9112-1daa-484a-92aa-e11fc4aa69c9':
        '{"id":"0c1f9112-1daa-484a-92aa-e11fc4aa69c9","dataCadastro":"2019-01-27T02:52:40.416Z","dataUltimaAlteracao":"2019-01-27T02:52:40.416Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'c03c66a7-130c-4bee-a031-cc905682291f':
        '{"id":"c03c66a7-130c-4bee-a031-cc905682291f","dataCadastro":"2019-01-28T04:18:58.684Z","dataUltimaAlteracao":"2019-01-28T04:18:58.684Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'a3626f58-2cf6-4644-84b9-fa67ab8a7e01':
        '{"id":"a3626f58-2cf6-4644-84b9-fa67ab8a7e01","dataCadastro":"2019-01-28T04:18:58.685Z","dataUltimaAlteracao":"2019-01-28T04:18:58.685Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '039b3a82-59e2-470b-936f-d9b648f73602':
        '{"id":"039b3a82-59e2-470b-936f-d9b648f73602","dataCadastro":"2019-01-28T04:18:58.706Z","dataUltimaAlteracao":"2019-01-28T04:18:58.706Z","nome":"NovaTagProva","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '5cc2106b-b869-442b-a201-5968122f22db':
        '{"id":"5cc2106b-b869-442b-a201-5968122f22db","dataCadastro":"2019-01-28T04:18:58.725Z","dataUltimaAlteracao":"2019-01-28T04:18:58.725Z","nome":"Português","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'd5b7b405-91cd-44b0-90fa-bccae507469f':
        '{"id":"d5b7b405-91cd-44b0-90fa-bccae507469f","dataCadastro":"2019-01-28T04:18:58.725Z","dataUltimaAlteracao":"2019-01-28T04:18:58.725Z","nome":"Mat","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      'c8301138-b74d-432e-adfe-1a4a18e60fca':
        '{"id":"c8301138-b74d-432e-adfe-1a4a18e60fca","dataCadastro":"2019-01-28T04:18:58.726Z","dataUltimaAlteracao":"2019-01-28T04:18:58.726Z","nome":"rel","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '8441186d-90ea-4844-b6e2-c09873955899':
        '{"id":"8441186d-90ea-4844-b6e2-c09873955899","dataCadastro":"2019-01-28T04:18:58.938Z","dataUltimaAlteracao":"2019-01-28T04:18:58.938Z","nome":"Português","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '2af17558-218c-44cc-8584-151e8564d36e':
        '{"id":"2af17558-218c-44cc-8584-151e8564d36e","dataCadastro":"2019-01-28T04:18:58.938Z","dataUltimaAlteracao":"2019-01-28T04:18:58.938Z","nome":"Mat","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '99ad651a-6d1d-4be2-91b9-3e9473fa7c1e':
        '{"id":"99ad651a-6d1d-4be2-91b9-3e9473fa7c1e","dataCadastro":"2019-01-28T04:18:58.939Z","dataUltimaAlteracao":"2019-01-28T04:18:58.939Z","nome":"rel","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
    },
    Caderno: {
      '1b90e67a-bf78-47ed-bc3c-67305d29c839':
        '{"id":"1b90e67a-bf78-47ed-bc3c-67305d29c839","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2018-09-30T14:56:20.797Z","dataUltimaAlteracao":"2018-10-23T17:10:09.956Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["56718d09-5f21-4eec-8cca-968e09c85828","992a0984-7371-42ad-b2d7-3b13e1aaff96"]}',
      'a2bf7d65-6bec-40e4-8bf7-16b582e424bc':
        '{"id":"a2bf7d65-6bec-40e4-8bf7-16b582e424bc","titulo":"Engenharia Aeronáutica (Conceitos básicos)","descricao":"Caderno Exemplo de Engenharia","dataCadastro":"2018-09-30T16:20:33.380Z","dataUltimaAlteracao":"2018-09-30T16:21:55.196Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["3945758a-1812-449b-b1bc-1f6d6fe846dd","954d86c9-c9bc-4b81-ac6f-8ee5f5f07b4c"]}',
      '1e6b6f5e-13cb-481b-8b19-cb6994de7fbe':
        '{"id":"1e6b6f5e-13cb-481b-8b19-cb6994de7fbe","titulo":"Engenharia Aeronáutica (Conhecimentos Específicos)","descricao":"Caderno Exemplo de Engenharia Aeronáutica","dataCadastro":"2018-09-30T16:22:46.773Z","dataUltimaAlteracao":"2018-09-30T16:22:46.773Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["35b75a37-e953-4cd5-b2b3-35e56d19b65d"]}',
      '1685f4e6-a9a1-43e9-b4ac-efed4dec14e8':
        '{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza","descricao":"Caderno Exemplo de Ciências da Natureza","dataCadastro":"2018-09-30T17:02:14.112Z","dataUltimaAlteracao":"2018-10-14T21:44:55.109Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["475525d3-2f28-4667-8238-38ee3067c77e","b9b3dc30-957e-4af3-a710-e6d8adc131ed","7917dc7d-43f3-4e9e-a66b-f6cd7bee8338","56718d09-5f21-4eec-8cca-968e09c85828"]}',
      '4854393f-1e04-493d-96a3-fe4a7de49997':
        '{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática","descricao":"Caderno Exemplo de Português e Matemática","dataCadastro":"2018-09-30T17:20:21.669Z","dataUltimaAlteracao":"2018-10-11T12:35:12.491Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["4b48d330-f8c9-4ff8-9b06-55818c7f2fca","3945758a-1812-449b-b1bc-1f6d6fe846dd","35b75a37-e953-4cd5-b2b3-35e56d19b65d"]}',
      'c3af036a-4327-4d76-98a9-b9ab7fff3160':
        '{"id":"c3af036a-4327-4d76-98a9-b9ab7fff3160","titulo":"teste","descricao":"string","dataCadastro":"2018-10-24T21:23:57.871Z","dataUltimaAlteracao":"2018-11-11T16:35:59.317Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["9d0743b1-b881-4f0c-ab3b-1716d08b49a3","2946c767-00ed-4ca1-9957-26efb256ced7"]}',
      'd0b637d3-1652-47a6-9b3c-ad9c7a686ad1':
        '{"id":"d0b637d3-1652-47a6-9b3c-ad9c7a686ad1","titulo":"a","descricao":"string","dataCadastro":"2018-10-24T21:24:15.308Z","dataUltimaAlteracao":"2018-10-31T12:03:52.308Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"provasIds":["832b3468-4d65-403d-8fc4-cf909045f802","5b03a450-56fc-4fa9-9527-60359d8c6b40","5a76e47f-d636-4b93-8d30-da69ee58f32c"]}',
      '62f2992c-aea3-4b3c-a0ee-b026814326b3':
        '{"id":"62f2992c-aea3-4b3c-a0ee-b026814326b3","titulo":"Teste de exclusão","descricao":"teste de exclusão","dataCadastro":"2018-11-14T17:37:23.363Z","dataUltimaAlteracao":"2018-11-14T17:37:23.363Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":true,"deletedAt":"2018-11-14T18:23:08.850Z"}',
      '3f9f4290-6967-4353-99f8-aed1db398071':
        '{"id":"3f9f4290-6967-4353-99f8-aed1db398071","titulo":"novoTitulo","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-27T02:52:40.438Z","dataUltimaAlteracao":"2019-01-27T02:52:40.637Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":false,"quantidadeInstancias":1}',
      'ca07d0e2-502a-47fa-9436-7783ac3d6b8c':
        '{"id":"ca07d0e2-502a-47fa-9436-7783ac3d6b8c","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-27T02:52:40.511Z","dataUltimaAlteracao":"2019-01-27T02:52:40.511Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":true,"quantidadeInstancias":1,"deletedAt":"2019-01-27T02:52:40.545Z"}',
      'd7884616-fba3-448a-836b-7c4b988d46d3':
        '{"id":"d7884616-fba3-448a-836b-7c4b988d46d3","titulo":"novoTitulo","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.982Z","dataUltimaAlteracao":"2019-01-28T04:18:59.019Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":false,"quantidadeInstancias":1}',
      'ffef172b-55c1-4aee-a331-5e38891bccc6':
        '{"id":"ffef172b-55c1-4aee-a331-5e38891bccc6","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.992Z","dataUltimaAlteracao":"2019-01-28T04:18:58.992Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":true,"quantidadeInstancias":1,"deletedAt":"2019-01-28T04:18:59.003Z"}',
    },
    Impressao: {
      'ee24cab2-5cb9-46d8-bc76-af4338ecb4e3':
        '{"id":"ee24cab2-5cb9-46d8-bc76-af4338ecb4e3","titulo":"placeholder","dataCadastro":"2019-01-28T04:18:58.842Z","dataUltimaAlteracao":"2019-01-28T04:18:58.842Z","status":"PROCESSANDO","statusInstanciamento":"PROCESSANDO","template":"geral/previewBloco","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
      '4ea610d9-e283-468d-9c1f-137cfb4ff14b':
        '{"id":"4ea610d9-e283-468d-9c1f-137cfb4ff14b","titulo":"novoTitulo","dataCadastro":"2019-01-28T04:18:59.034Z","dataUltimaAlteracao":"2019-01-28T04:18:59.034Z","status":"PROCESSANDO","statusInstanciamento":"PROCESSANDO","template":"geral/caderno","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
    },
    Evento: {
      'c433a15c-d25d-4094-9c62-4e02b379c9f9':
        '{"id":"c433a15c-d25d-4094-9c62-4e02b379c9f9","tipoEvento":"criacao","tipoModelo":"usuario","instancia":{"id":"40738cf9-2d26-4166-b5d3-4e9948663314","nome":"Fulano Silva","instituicao":"UFRN","username":"fulano","password":"$2a$10$1/pb7cUS03o6S5.GYw7lveLVjTwjbIUyTOuLJ1buNkU1J3gC1YLRu","email":"fulano@gmail.com","isDeleted":false,"dataCadastro":"2019-01-28T04:18:58.354Z","dataUltimaAlteracao":"2019-01-28T04:18:58.354Z"},"username":"admin","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.379Z","isDeleted":false}',
      '9864ec43-8859-489f-a119-a52061fc969b':
        '{"id":"9864ec43-8859-489f-a119-a52061fc969b","tipoEvento":"criacao","tipoModelo":"prova","instancia":{"id":"235e318c-4c52-41e6-a0c4-2cbe8b599df7","dataCadastro":"2019-01-28T04:18:58.687Z","dataUltimaAlteracao":"2019-01-28T04:18:58.687Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["c03c66a7-130c-4bee-a031-cc905682291f"],"tema":"Matemática"},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.692Z","isDeleted":false}',
      '2452af88-2a1b-4199-806d-6ca66b9556ec':
        '{"id":"2452af88-2a1b-4199-806d-6ca66b9556ec","tipoEvento":"criacao","tipoModelo":"prova","instancia":{"id":"e444885b-25ee-4a42-b148-b8334e385a5a","dataCadastro":"2019-01-28T04:18:58.690Z","dataUltimaAlteracao":"2019-01-28T04:18:58.690Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["a3626f58-2cf6-4644-84b9-fa67ab8a7e01"],"tema":"Matemática"},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.698Z","isDeleted":false}',
      '93263e72-3ec0-471c-a775-89cdeaa2ce42':
        '{"id":"93263e72-3ec0-471c-a775-89cdeaa2ce42","tipoEvento":"criacao","tipoModelo":"prova","instancia":{"id":"9aba557f-ba7d-468a-90f4-35f5e316ad80","dataCadastro":"2019-01-28T04:18:58.728Z","dataUltimaAlteracao":"2019-01-28T04:18:58.728Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":["039b3a82-59e2-470b-936f-d9b648f73602"],"tema":"Matemática"},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.735Z","isDeleted":false}',
      '34eeb0ac-61a6-4255-bf82-19ba51c6df6e':
        '{"id":"34eeb0ac-61a6-4255-bf82-19ba51c6df6e","tipoEvento":"criacao","tipoModelo":"questao","instancia":{"id":"a09b6edb-bc93-44fc-9247-ed8dade64ae9","dataCadastro":"2019-01-28T04:18:58.732Z","dataUltimaAlteracao":"2019-01-28T04:18:58.732Z","tipo":"bloco","status":{"id":"el","texto":"Em elaboração"},"bloco":{"fraseInicial":"<p>Texto para as questões 1 a 3:</p><p></p><p><strong>Retrato</strong><br/></p><p>Eu não tinha este rosto de hoje, <br/>assim calmo, assim triste, assim magro, <br/>nem estes olhos tão vazios, <br/>nem o lábio amargo.<br/></p><p>Eu não tinha estas mãos sem força, <br/>tão paradas e frias e mortas; <br/>eu não tinha este coração <br/>que nem se mostra. <br/></p><p>Eu não dei por esta mudança, <br/>tão simples, tão certa, tão fácil: <br/>- Em que espelho ficou perdida <br/>a minha face?</p><p></p><p>Cecília Meireles , Antologia Poética. Rio de Janeiro: Editora Nova Fronteira, 2001. </p>","questoes":[{"id":"82483c2b-bcd1-482e-98cf-8133b257165f","enunciado":"<p> A função de linguagem predominante no texto é a: </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>   Emotiva.  </p>"},{"letra":"b","texto":"<p> Conativa. </p>"},{"letra":"c","texto":"<p> Metalinguística. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["5cc2106b-b869-442b-a201-5968122f22db"]},{"id":"29988d79-1d8f-4f12-b2d9-703440e2f54d","enunciado":"<p> Para expressar as mudanças físicas de seu corpo e como o mesmo se encontra depois delas, o eu lírico utiliza predominantemente os recursos da:    </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Descrição.  </p>"},{"letra":"b","texto":"<p>  Narração.  </p>"},{"letra":"c","texto":"<p> Dissertação. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["d5b7b405-91cd-44b0-90fa-bccae507469f"]},{"id":"0a77bb91-a6ec-4bcb-91db-68cbfdc6f3d8","enunciado":"<p> Sobre a relação entre as palavras no trecho <em>&quot;eu não tinha este coração/ que nem se mostra&quot;</em> , o vocábulo <em>&quot;que&quot;</em> assume a função morfossintática de: </p>","dificuldade":2,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Pronome relativo. </p>"},{"letra":"b","texto":"<p> Conjunção integrante. </p>"},{"letra":"c","texto":"<p> Interjeição. </p>"},{"letra":"d","texto":"<p> Conjunção integrante. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["c8301138-b74d-432e-adfe-1a4a18e60fca"]}]},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[]},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.740Z","isDeleted":false}',
      '709472e9-d5f5-4d19-b6c6-55114d24eaff':
        '{"id":"709472e9-d5f5-4d19-b6c6-55114d24eaff","tipoEvento":"exclusao","tipoModelo":"prova","instancia":[{"id":"9aba557f-ba7d-468a-90f4-35f5e316ad80","dataCadastro":"2019-01-28T04:18:58.728Z","dataUltimaAlteracao":"2019-01-28T04:18:58.728Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2019-01-28T04:18:58.774Z","isDeleted":true,"ocultoLixeira":false,"tagIds":["039b3a82-59e2-470b-936f-d9b648f73602"],"tema":"Matemática","questoes":[{"id":"a1616594-18ae-48d8-9ec5-f3081c60245b","dataCadastro":"2019-01-27T05:07:27.000Z","dataUltimaAlteracao":"2019-01-27T05:07:27.000Z","tipo":"bloco","status":{"id":"el","texto":"Em elaboração"},"bloco":{"fraseInicial":"<p>Texto para as questões 1 a 3:</p><p></p><p><strong>Retrato</strong><br/></p><p>Eu não tinha este rosto de hoje, <br/>assim calmo, assim triste, assim magro, <br/>nem estes olhos tão vazios, <br/>nem o lábio amargo.<br/></p><p>Eu não tinha estas mãos sem força, <br/>tão paradas e frias e mortas; <br/>eu não tinha este coração <br/>que nem se mostra. <br/></p><p>Eu não dei por esta mudança, <br/>tão simples, tão certa, tão fácil: <br/>- Em que espelho ficou perdida <br/>a minha face?</p><p></p><p>Cecília Meireles , Antologia Poética. Rio de Janeiro: Editora Nova Fronteira, 2001. </p>","questoes":[{"id":"82483c2b-bcd1-482e-98cf-8133b257165f","enunciado":"<p> A função de linguagem predominante no texto é a: </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>   Emotiva.  </p>"},{"letra":"b","texto":"<p> Conativa. </p>"},{"letra":"c","texto":"<p> Metalinguística. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["2ffb1d6f-6846-4295-a8d7-112deb37ba76"]},{"id":"29988d79-1d8f-4f12-b2d9-703440e2f54d","enunciado":"<p> Para expressar as mudanças físicas de seu corpo e como o mesmo se encontra depois delas, o eu lírico utiliza predominantemente os recursos da:    </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Descrição.  </p>"},{"letra":"b","texto":"<p>  Narração.  </p>"},{"letra":"c","texto":"<p> Dissertação. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["891ff786-0d3a-4f04-807e-b70656fb4b5e"]},{"id":"0a77bb91-a6ec-4bcb-91db-68cbfdc6f3d8","enunciado":"<p> Sobre a relação entre as palavras no trecho <em>&quot;eu não tinha este coração/ que nem se mostra&quot;</em> , o vocábulo <em>&quot;que&quot;</em> assume a função morfossintática de: </p>","dificuldade":2,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Pronome relativo. </p>"},{"letra":"b","texto":"<p> Conjunção integrante. </p>"},{"letra":"c","texto":"<p> Interjeição. </p>"},{"letra":"d","texto":"<p> Conjunção integrante. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["5861f531-0c13-4186-b34d-e75641ff695f"]}]},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[]},{"id":"d2a37f71-f673-4695-a377-75b0d5d6698b","dataCadastro":"2018-09-30T14:11:00.317Z","dataUltimaAlteracao":"2018-11-29T01:56:11.262Z","enunciado":"<p></p><p> </p><p>Considerando as linguagens verbal e não verbal, a reação de Haroldo (tigre) em face da atitude de Calvin demonstra: </p>","dificuldade":1,"tipo":"multiplaEscolha","status":{"id":"pp","texto":"Primeira revisão pedagógica"},"multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>Incompreensão</p>"},{"letra":"b","texto":"<p> Preocupação. </p>"},{"letra":"c","texto":"<p> Indiferença. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"ocultoLixeira":false,"tagIds":["59936d08-0e89-4c12-b6e2-147089a4a494","dbd0f149-bbe4-4fe6-839b-021bc4569cbe","85b7eb39-cce7-4737-85ac-e2655510432a"]}]}],"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.825Z","isDeleted":false}',
      '3a7aa80b-45d3-4906-b6b9-01010450612c':
        '{"id":"3a7aa80b-45d3-4906-b6b9-01010450612c","tipoEvento":"exclusao","tipoModelo":"prova","instancia":[{"id":"9aba557f-ba7d-468a-90f4-35f5e316ad80","dataCadastro":"2019-01-28T04:18:58.728Z","dataUltimaAlteracao":"2019-01-28T04:18:58.728Z","descricao":"Prova exemplo de matemática","titulo":"Prova de matemática","dataAplicacao":"2018-10-23T19:02:58.366Z","instituicao":"UFRN","grupos":[{"id":"b537291a-6bb7-4b2d-9614-cc476c077332","nome":"","questoes":[{"questaoId":"a1616594-18ae-48d8-9ec5-f3081c60245b","fixa":false},{"questaoId":"d2a37f71-f673-4695-a377-75b0d5d6698b","fixa":false}]}],"nomeProfessor":"Friedrich Descartes","template":"geral/prova","status":"Em elaboração","tipoEmbaralhamento":2,"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","questaoIds":["a1616594-18ae-48d8-9ec5-f3081c60245b","d2a37f71-f673-4695-a377-75b0d5d6698b"],"criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2019-01-28T04:18:58.858Z","isDeleted":true,"ocultoLixeira":true,"tagIds":["039b3a82-59e2-470b-936f-d9b648f73602"],"tema":"Matemática","questoes":[{"id":"a1616594-18ae-48d8-9ec5-f3081c60245b","dataCadastro":"2019-01-27T05:07:27.000Z","dataUltimaAlteracao":"2019-01-27T05:07:27.000Z","tipo":"bloco","status":{"id":"el","texto":"Em elaboração"},"bloco":{"fraseInicial":"<p>Texto para as questões 1 a 3:</p><p></p><p><strong>Retrato</strong><br/></p><p>Eu não tinha este rosto de hoje, <br/>assim calmo, assim triste, assim magro, <br/>nem estes olhos tão vazios, <br/>nem o lábio amargo.<br/></p><p>Eu não tinha estas mãos sem força, <br/>tão paradas e frias e mortas; <br/>eu não tinha este coração <br/>que nem se mostra. <br/></p><p>Eu não dei por esta mudança, <br/>tão simples, tão certa, tão fácil: <br/>- Em que espelho ficou perdida <br/>a minha face?</p><p></p><p>Cecília Meireles , Antologia Poética. Rio de Janeiro: Editora Nova Fronteira, 2001. </p>","questoes":[{"id":"82483c2b-bcd1-482e-98cf-8133b257165f","enunciado":"<p> A função de linguagem predominante no texto é a: </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>   Emotiva.  </p>"},{"letra":"b","texto":"<p> Conativa. </p>"},{"letra":"c","texto":"<p> Metalinguística. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["2ffb1d6f-6846-4295-a8d7-112deb37ba76"]},{"id":"29988d79-1d8f-4f12-b2d9-703440e2f54d","enunciado":"<p> Para expressar as mudanças físicas de seu corpo e como o mesmo se encontra depois delas, o eu lírico utiliza predominantemente os recursos da:    </p>","dificuldade":1,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Descrição.  </p>"},{"letra":"b","texto":"<p>  Narração.  </p>"},{"letra":"c","texto":"<p> Dissertação. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["891ff786-0d3a-4f04-807e-b70656fb4b5e"]},{"id":"0a77bb91-a6ec-4bcb-91db-68cbfdc6f3d8","enunciado":"<p> Sobre a relação entre as palavras no trecho <em>&quot;eu não tinha este coração/ que nem se mostra&quot;</em> , o vocábulo <em>&quot;que&quot;</em> assume a função morfossintática de: </p>","dificuldade":2,"tipo":"multiplaEscolha","multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p> Pronome relativo. </p>"},{"letra":"b","texto":"<p> Conjunção integrante. </p>"},{"letra":"c","texto":"<p> Interjeição. </p>"},{"letra":"d","texto":"<p> Conjunção integrante. </p>"}],"alternativasPorLinha":2},"anoEscolar":"Ensino superior: basico","tagIds":["5861f531-0c13-4186-b34d-e75641ff695f"]}]},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false,"ocultoLixeira":false,"tagIds":[]},{"id":"d2a37f71-f673-4695-a377-75b0d5d6698b","dataCadastro":"2018-09-30T14:11:00.317Z","dataUltimaAlteracao":"2018-11-29T01:56:11.262Z","enunciado":"<p></p><p> </p><p>Considerando as linguagens verbal e não verbal, a reação de Haroldo (tigre) em face da atitude de Calvin demonstra: </p>","dificuldade":1,"tipo":"multiplaEscolha","status":{"id":"pp","texto":"Primeira revisão pedagógica"},"multiplaEscolha":{"respostaCerta":"a","alternativas":[{"letra":"a","texto":"<p>Incompreensão</p>"},{"letra":"b","texto":"<p> Preocupação. </p>"},{"letra":"c","texto":"<p> Indiferença. </p>"},{"letra":"d","texto":"<p> Nenhuma das alternativas. </p>"}],"alternativasPorLinha":2},"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","criadoPor":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2018-11-07T00:11:55.948Z","isDeleted":false,"ocultoLixeira":false,"tagIds":["59936d08-0e89-4c12-b6e2-147089a4a494","dbd0f149-bbe4-4fe6-839b-021bc4569cbe","85b7eb39-cce7-4737-85ac-e2655510432a"]}]}],"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.885Z","isDeleted":false}',
      'b5bf49c6-1ee5-42b2-bf5e-ea31cd624c64':
        '{"id":"b5bf49c6-1ee5-42b2-bf5e-ea31cd624c64","tipoEvento":"criacao","tipoModelo":"caderno","instancia":{"id":"d7884616-fba3-448a-836b-7c4b988d46d3","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.982Z","dataUltimaAlteracao":"2019-01-28T04:18:58.982Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":false,"quantidadeInstancias":1},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.983Z","isDeleted":false}',
      'dc62134c-5bad-4bc9-81ba-e08d76e1a596':
        '{"id":"dc62134c-5bad-4bc9-81ba-e08d76e1a596","tipoEvento":"criacao","tipoModelo":"caderno","instancia":{"id":"ffef172b-55c1-4aee-a331-5e38891bccc6","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.992Z","dataUltimaAlteracao":"2019-01-28T04:18:58.992Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":false,"quantidadeInstancias":1},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:58.994Z","isDeleted":false}',
      '1cbeb3f6-dcaf-48af-9fb7-5bcbeef3baa0':
        '{"id":"1cbeb3f6-dcaf-48af-9fb7-5bcbeef3baa0","tipoEvento":"exclusao","tipoModelo":"caderno","instancia":[{"id":"ffef172b-55c1-4aee-a331-5e38891bccc6","titulo":"Caderno de Ciências Humanas","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.992Z","dataUltimaAlteracao":"2019-01-28T04:18:58.992Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"deletedAt":"2019-01-28T04:18:59.003Z","isDeleted":true,"quantidadeInstancias":1}],"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.010Z","isDeleted":false}',
      '2a4c37bc-9cfc-4594-999c-d0b86ee3da6f':
        '{"id":"2a4c37bc-9cfc-4594-999c-d0b86ee3da6f","tipoEvento":"atualizacao","tipoModelo":"caderno","instancia":{"id":"d7884616-fba3-448a-836b-7c4b988d46d3","titulo":"novoTitulo","descricao":"Caderno exemplo de Ciências Humanas","dataCadastro":"2019-01-28T04:18:58.982Z","dataUltimaAlteracao":"2019-01-28T04:18:59.019Z","template":"geral/caderno","duracao":{"hora":1,"minuto":10},"instrucoes":[],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","provasIds":[],"isDeleted":false,"quantidadeInstancias":1},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.022Z","isDeleted":false}',
      '809def03-9539-4619-a393-986b71658166':
        '{"id":"809def03-9539-4619-a393-986b71658166","tipoEvento":"criacao","tipoModelo":"concurso","instancia":{"id":"afd87336-bc8f-4f08-9b2a-8418eab85f04","titulo":"Concurso da prefeitura de Naboo","descricao":"Concurso Exemplo","cargos":[{"titulo":"Professor do Ensino Secundário ","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-01","cadernos":[{"id":"1b90e67a-bf78-47ed-bc3c-67305d29c839","titulo":"Caderno de Ciências Humanas"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]}]},{"titulo":"Engenheiro Aeronáutico","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"a2bf7d65-6bec-40e4-8bf7-16b582e424bc","titulo":"Engenharia Aeronáutica"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]},{"titulo":"Conhecimentos Específicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"1e6b6f5e-13cb-481b-8b19-cb6994de7fbe","titulo":"Engenharia Aeronáutica (Conhecimentos Específicos)"}]}]}],"dataCadastro":"2019-01-28T04:18:59.124Z","dataUltimaAlteracao":"2019-01-28T04:18:59.124Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.126Z","isDeleted":false}',
      'c7f44a79-2538-4a83-b5c7-b41920ce248e':
        '{"id":"c7f44a79-2538-4a83-b5c7-b41920ce248e","tipoEvento":"criacao","tipoModelo":"concurso","instancia":{"id":"af7de802-2464-4e2f-bf49-ddee97b5c6bf","titulo":"Concurso da prefeitura de Naboo","descricao":"Concurso Exemplo","cargos":[{"titulo":"Professor do Ensino Secundário ","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-01","cadernos":[{"id":"1b90e67a-bf78-47ed-bc3c-67305d29c839","titulo":"Caderno de Ciências Humanas"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]}]},{"titulo":"Engenheiro Aeronáutico","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"a2bf7d65-6bec-40e4-8bf7-16b582e424bc","titulo":"Engenharia Aeronáutica"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]},{"titulo":"Conhecimentos Específicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"1e6b6f5e-13cb-481b-8b19-cb6994de7fbe","titulo":"Engenharia Aeronáutica (Conhecimentos Específicos)"}]}]}],"dataCadastro":"2019-01-28T04:18:59.140Z","dataUltimaAlteracao":"2019-01-28T04:18:59.140Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.141Z","isDeleted":false}',
      '22ffe664-3d06-4688-87f0-603a1dd9ea80':
        '{"id":"22ffe664-3d06-4688-87f0-603a1dd9ea80","tipoEvento":"exclusao","tipoModelo":"concurso","instancia":[{"id":"af7de802-2464-4e2f-bf49-ddee97b5c6bf","titulo":"Concurso da prefeitura de Naboo","descricao":"Concurso Exemplo","cargos":[{"titulo":"Professor do Ensino Secundário ","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-01","cadernos":[{"id":"1b90e67a-bf78-47ed-bc3c-67305d29c839","titulo":"Caderno de Ciências Humanas"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]}]},{"titulo":"Engenheiro Aeronáutico","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"a2bf7d65-6bec-40e4-8bf7-16b582e424bc","titulo":"Engenharia Aeronáutica"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]},{"titulo":"Conhecimentos Específicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"1e6b6f5e-13cb-481b-8b19-cb6994de7fbe","titulo":"Engenharia Aeronáutica (Conhecimentos Específicos)"}]}]}],"dataCadastro":"2019-01-28T04:18:59.140Z","dataUltimaAlteracao":"2019-01-28T04:18:59.140Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","deletedAt":"2019-01-28T04:18:59.152Z","isDeleted":true}],"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.159Z","isDeleted":false}',
      'ab7b9834-a01f-4861-8b93-9e56a46f4be6':
        '{"id":"ab7b9834-a01f-4861-8b93-9e56a46f4be6","tipoEvento":"atualizacao","tipoModelo":"concurso","instancia":{"id":"afd87336-bc8f-4f08-9b2a-8418eab85f04","titulo":"novoTitulo","descricao":"Concurso Exemplo","cargos":[{"titulo":"Professor do Ensino Secundário ","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-01","cadernos":[{"id":"1b90e67a-bf78-47ed-bc3c-67305d29c839","titulo":"Caderno de Ciências Humanas"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]}]},{"titulo":"Engenheiro Aeronáutico","etapas":[{"titulo":"Conhecimentos Básicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"a2bf7d65-6bec-40e4-8bf7-16b582e424bc","titulo":"Engenharia Aeronáutica"},{"id":"1685f4e6-a9a1-43e9-b4ac-efed4dec14e8","titulo":"Caderno de Ciências da Natureza"},{"id":"4854393f-1e04-493d-96a3-fe4a7de49997","titulo":"Caderno de Português e Matemática"}]},{"titulo":"Conhecimentos Específicos","dataAplicacao":"2018-10-02","cadernos":[{"id":"1e6b6f5e-13cb-481b-8b19-cb6994de7fbe","titulo":"Engenharia Aeronáutica (Conhecimentos Específicos)"}]}]}],"dataCadastro":"2019-01-28T04:18:59.124Z","dataUltimaAlteracao":"2019-01-28T04:18:59.169Z","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false},"username":"docente","conexao":"::ffff:127.0.0.1","data":"2019-01-28T04:18:59.172Z","isDeleted":false}',
    },
    Concurso: {},
    Instanciamento: {
      '11111111-b425-45e5-a0cc-f6cb142edded': {
        _id: '11111111-b425-45e5-a0cc-f6cb142edded',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Concluída',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '3' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '4' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '5' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: false,
        usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
        isDeleted: false,
      },
      'wwwwwwww-b425-45e5-a0cc-f6cb142edded': {
        _id: 'wwwwwwww-b425-45e5-a0cc-f6cb142edded',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Concluída',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  notaQuestao: 1,
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  notaQuestao:2,
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },                
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: false,
        usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
        isDeleted: false,
      },
      '381ac40a-b425-45e5-a0cc-f6cb142edded': {
        _id: '381ac40a-b425-45e5-a0cc-f6cb142edded',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Concluída',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '3' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '4' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '5' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: false,
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      '22222222-b425-45e5-a0cc-f6cb142edded': {
        _id: '22222222-b425-45e5-a0cc-f6cb142edded',
        candidatoId: 'cd6565ad-d520-4e6d-a139-7f17dd906b6c',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Concluída',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '3' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '4' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '5' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: true,
        usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
        isDeleted: false,
      },
      'aaaaaaaa-b425-45e5-a0cc-f6cb142edded': {
        _id: 'aaaaaaaa-b425-45e5-a0cc-f6cb142edded',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Não iniciada',
        candidatoId: 'cd6565ad-d520-4e6d-a139-7f17dd906b6c',
        tipoAplicacao: 'virtual',
        virtual: { dataAplicacao: '1900-08-15T12:00', dataTerminoProva: '3000-08-15T23:59', dataInicioProva: '1000-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  notaQuestao: 1,
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  notaQuestao:2,
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },                
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: false,
        usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
        isDeleted: false,
      },
      'dddddddd-b425-45e5-a0cc-f6cb142edded': {
        _id: 'dddddddd-b425-45e5-a0cc-f6cb142edded',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Concluída',
        tipoAplicacao: 'papel',
        candidatoId:'cd6565ad-d520-4e6d-a139-7f17dd906b6c',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: true,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'a', letraNaMatriz: 'd' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'd', letraNaMatriz: 'c' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '3' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '4' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '5' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        notasPublicadas: false,
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      '930ac327-4f26-4bc7-9deb-244ba6c7e6ef': {
        _id: '930ac327-4f26-4bc7-9deb-244ba6c7e6ef',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Não iniciada',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '1' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'd',
                    alternativas: [
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'a', letraNaMatriz: 'b' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'b', letraNaMatriz: 'c' },
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'c', letraNaMatriz: 'd' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'd', letraNaMatriz: 'a' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '3' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '4' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '5' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      '0995ba7c-0bc1-4126-9ffa-065007f13ee7': {
        _id: '0995ba7c-0bc1-4126-9ffa-065007f13ee7',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Não iniciada',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '1' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'c',
                    alternativas: [
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'a', letraNaMatriz: 'c' },
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'b', letraNaMatriz: 'd' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'c', letraNaMatriz: 'a' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'd', letraNaMatriz: 'b' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '2' },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '3' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '4' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '5' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      '6cf715db-4f9a-4526-9815-740ffaa04a77': {
        _id: '6cf715db-4f9a-4526-9815-740ffaa04a77',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Não iniciada',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '1' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '2' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '3' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'a',
                    alternativas: [
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'a', letraNaMatriz: 'a' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'c', letraNaMatriz: 'c' },
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'd', letraNaMatriz: 'd' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '4' },
                },
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '5' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      'bfb31d89-f41e-408c-b949-227afab6780f': {
        _id: 'bfb31d89-f41e-408c-b949-227afab6780f',
        dataCadastro: { $date: { $numberLong: '1565915738391' } },
        status: 'Não iniciada',
        tipoAplicacao: 'papel',
        papel: { dataAplicacao: '2019-08-15T12:00', dataTerminoProva: '2019-08-15T23:59' },
        tipo: 'prova',
        idMatriz: '07f8af35-a194-45f6-987b-fe3080aa5bce',
        prova: {
          titulo: 'Prova em papel',
          tema: '',
          instituicao: '',
          tipoEmbaralhamento: { $numberInt: '2' },
          nomeProfessor: 'ODocente SobrenomeDocente',
          vistaProvaHabilitada: false,
          grupos: [
            {
              questoes: [
                {
                  questaoMatrizId: '2ac08ca2-7281-41a9-addb-22f630fe38ef',
                  numeroNaMatriz: { $numberInt: '1' },
                  numeroNaInstancia: { $numberInt: '1' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UFSM 2014] Pode ser estranho para nossa espécie, que tanto orgulho sente de sua capacidade de criar e lidar com as novas tecnologias a seu favor, parar para pensar que, de certa forma, ainda temos semelhanças incontestáveis com as plantas angiospermas! Com relação a esse fato, avalie as alternativas a seguir e coloque verdadeira (V) ou falsa (F).</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto: '<p>compartilham o mesmo tipo de nutrição.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>têm corpos pluricelulares organizados em tecidos e órgãos.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>reproduzem-se de forma sexuada e assexuada.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto: '<p>formam gametas masculinos e femininos.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ff036b03-de2d-4fe8-ad47-6f47d8ee71aa',
                  numeroNaMatriz: { $numberInt: '2' },
                  numeroNaInstancia: { $numberInt: '2' },
                  enunciado:
                    '<p>Associe as duas colunas, relacionando as teorias administrativas, que formam a base da teoria da administração, aos respectivos enfoques principais pertinentes. A seguir, assinale a alternativa que apresenta a sequência correta.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Teoria das Relações Humanas</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Teoria Contingencial</p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '5' },
                        posicaoMatriz: { $numberInt: '4' },
                      },
                      {
                        conteudo: '<p>Teoria Clássica</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Teoria de Sistemas</p>',
                        rotulo: { $numberInt: '4' },
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '3' },
                      },
                      {
                        conteudo: '<p>Administração Cientifica</p>',
                        rotulo: { $numberInt: '5' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>ambiente</p>',
                        rotuloMatriz: { $numberInt: '4' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tarefas</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>estrutura</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '4' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>tecnologia</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>pessoas</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '3' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'ef363329-cd8e-4e53-9a67-9f9988a9bfb9',
                  numeroNaMatriz: { $numberInt: '5' },
                  numeroNaInstancia: { $numberInt: '3' },
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>[UEL 2014] No século XX, devido às crises, houve o questionamento da racionalidade econômica e das tecnologias dominantes diante do uso desenfreado dos recursos naturais, exigindo, com isso, mudanças de atitude frente aos cuidados com o meio ambiente. Em relação às atuais políticas públicas ambientais no Brasil, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.</p>',
                  tipo: 'vouf',
                  vouf: {
                    afirmacoes: [
                      {
                        texto:
                          '<p>A Agenda Habitat contribuiu para a elaboração da Agenda 21 Brasileira, especialmente no que tange ao eixo temático denominado Cidades Sustentáveis, com o intuito de melhorar as condições dos assentamentos humanos.</p>',
                        posicaoNaMatriz: { $numberInt: '2' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Verde é responsável pela formulação e gestão dos recursos hídricos decorrentes de atividades poluidoras, como a realização de estudos e pesquisas sobre poluição, qualidade do ar, da água e do solo.</p>',
                        posicaoNaMatriz: { $numberInt: '1' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>Apesar de pautada na década de 1980, a problemática ambiental urbana ganhou visibilidade na década de 1990, impulsionada pelos fóruns internacionais.</p>',
                        posicaoNaMatriz: { $numberInt: '4' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A erradicação da pobreza e a resolução do problema habitacional são requisitos para a promoção do desenvolvimento sustentável nas grandes cidades.</p>',
                        posicaoNaMatriz: { $numberInt: '3' },
                        letra: 'F',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        texto:
                          '<p>A Agenda Marrom, criada em 1970, ganhou importância efetiva e foi elaborada com o intuito de atender, de maneira pioneira, à  conservação da vegetação ripária nas zonas rurais.</p>',
                        posicaoNaMatriz: { $numberInt: '0' },
                        letra: 'V',
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: '349207c0-45d8-43a6-b579-f2013c2b8ae4',
                  numeroNaMatriz: { $numberInt: '4' },
                  numeroNaInstancia: { $numberInt: '4' },
                  enunciado:
                    '<p>O processo de digestão tem etapas distintas e muito importantes. Em cada parte do tubo digestivo o alimento sofre a ação de substâncias com funções diferentes. </p><p></p><p>Enumere a segunda coluna de acordo com a primeira, relacionando cada substância com a parte do tudo digestivo na qual o alimento sofre sua ação.</p>',
                  tipo: 'associacaoDeColunas',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  associacaoDeColunas: {
                    colunaA: [
                      {
                        conteudo: '<p>Ptialina</p>',
                        rotulo: { $numberInt: '1' },
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                      },
                      {
                        conteudo: '<p>Suco gástrico </p>',
                        rotulo: { $numberInt: '2' },
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                      },
                      {
                        conteudo: '<p>Bile</p>',
                        rotulo: { $numberInt: '3' },
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                      },
                    ],
                    colunaB: [
                      {
                        conteudo: '<p>Intestino delgado</p>',
                        rotuloMatriz: { $numberInt: '3' },
                        posicaoMatriz: { $numberInt: '2' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Estômago</p>',
                        rotuloMatriz: { $numberInt: '2' },
                        posicaoMatriz: { $numberInt: '1' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                      {
                        conteudo: '<p>Boca</p>',
                        rotuloMatriz: { $numberInt: '1' },
                        posicaoMatriz: { $numberInt: '0' },
                        respostaCandidato: null,
                        dataRespostaCandidato: null,
                      },
                    ],
                  },
                },
                {
                  questaoMatrizId: 'de8c7e4b-63b6-4c8e-a7d4-e867c9be3f80',
                  fixa: false,
                  valor: { $numberInt: '1' },
                  enunciado:
                    '<p>Um agricultor, preocupado com o baixo desempenho de sua plantação de mandioca, resolve investir em um melhoramento genético de suas plantas para a obtenção de uma linhagem altamente produtiva. Qual o tipo de reprodução deverá ser escolhido pelo agricultor para a obtenção da variedade de mandioca adequada?</p>',
                  tipo: 'multiplaEscolha',
                  multiplaEscolha: {
                    respostaCerta: 'd',
                    alternativas: [
                      { texto: '<p>Gâmica</p>', letraNaInstancia: 'a', letraNaMatriz: 'c' },
                      { texto: '<p>Enxertia</p>', letraNaInstancia: 'b', letraNaMatriz: 'b' },
                      { texto: '<p>Gemulação</p>', letraNaInstancia: 'c', letraNaMatriz: 'd' },
                      { texto: '<p>Brotamento</p>', letraNaInstancia: 'd', letraNaMatriz: 'a' },
                    ],
                    alternativasPorLinha: { $numberInt: '1' },
                    respostaCandidato: null,
                    dataRespostaCandidato: null,
                  },
                  numeroNaMatriz: { $numberInt: '3' },
                  numeroNaInstancia: { $numberInt: '5' },
                },
              ],
              nome: '',
              id: '8469e9b9-439d-4427-a7e8-18eb7baabf2c',
              numeroDeQuestoesNoGrupo: { $numberInt: '5' },
            },
          ],
          numeroDeQuestoesNaProva: { $numberInt: '5' },
          valor: { $numberInt: '5' },
        },
        usuarioId: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
        isDeleted: false,
      },
      '1b546fed-2d54-4836-9977-eb9dd2a89a34':
        '{"id": "1b546fed-2d54-4836-9977-eb9dd2a89a34","dataCadastro": "2019-07-18T02:11:59.070Z","candidatoId": "dccc93c2-41db-4aa8-a415-f4712e9fce11","status": "Não iniciada","tipoAplicacao": "virtual","virtual": {"dataInicioProva": "2019-08-28T10:10","dataTerminoProva": "2019-08-28T23:50","duracaoDaProva": 30},"tipo": "prova","idMatriz": "8f48f5d8-a320-4e99-8817-5e934bd63525","prova": {},"usuarioId": "dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted": false}',
      '1b546fed-2d54-4836-9977-eb9dd2a89a35':
        '{"id": "1b546fed-2d54-4836-9977-eb9dd2a89a35","dataCadastro": "2019-07-18T02:11:59.070Z","candidatoId": "dccc93c2-41db-4aa8-a415-f4712e9fce12","status": "Não iniciada","tipoAplicacao": "virtual","virtual": {"dataInicioProva": "2019-08-28T10:10","dataTerminoProva": "3019-08-28T23:50","duracaoDaProva": 30},"tipo": "prova","idMatriz": "8f48f5d8-a320-4e99-8817-5e934bd63525","prova": {},"usuarioId": "dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted": false}',
    },
    InstanciamentoConcursos: {},
    Turma: {
      '8fc27401-331d-4dfb-9fa3-724f4e9cd34a':
        '{"id":"8fc27401-331d-4dfb-9fa3-724f4e9cd34a","dataCadastro":"2019-02-28T00:24:46.006Z","dataUltimaAlteracao":"2019-02-28T00:24:46.006Z","nome":"Física 1","ano":2012,"periodo":4,"numero":"2A","metadados":{"professor":"Fulano de Tal"},"alunos":[{"nome":"Cicrano de tal","matricula":23423423432,"email":"cicrano@gmail.com","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce11"},{"nome":"Beltrano de tal","matricula":345623523452,"email":"beltrano@gmail.com","usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce12"}],"usuarioId":"dccc93c2-41db-4aa8-a415-f4712e9fce10","isDeleted":false}',
    },
    Notificacao: {},
    QuestaoCedida: {},
  },
}
