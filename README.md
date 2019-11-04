# multiprova-api

[![pipeline status](https://gitlab.com/tapioca/multiprova/multiprova-api/badges/develop/pipeline.svg)](https://gitlab.com/tapioca/multiprova/multiprova-api/pipelines)
[![quality gate](http://177.20.148.52/sonar/api/badges/gate?key=multiprova-api)](http://177.20.148.52/sonar/dashboard?id=multiprova-api)
[![cobertura de testes](http://177.20.148.52/sonar/api/badges/measure?key=multiprova-api&metric=coverage&blinking=true)](http://177.20.148.52/sonar/component_measures?id=multiprova-api&metric=coverage)
[![Bugs](http://177.20.148.52/sonar/api/badges/measure?key=multiprova-api&metric=bugs&blinking=true)](http://177.20.148.52/sonar/project/issues?id=multiprova-api&resolved=false&types=BUG)
[![Code Smell](http://177.20.148.52/sonar/api/badges/measure?key=multiprova-api&metric=code_smells&blinking=true)](http://177.20.148.52/sonar/project/issues?id=multiprova-api&resolved=false&types=CODE_SMELL)
[![Vulnerabilidade](http://177.20.148.52/sonar/api/badges/measure?key=multiprova-api&metric=vulnerabilities&blinking=true)](http://177.20.148.52/sonar/project/issues?id=multiprova-api&resolved=false&types=VULNERABILITY)

API desenvolvida em [Node.js](https://nodejs.org/) com o Framework [Loopback](https://loopback.io/) para o sistema Multiprova da UFRN.

## Comandos

Os comandos são iguais independendo do ambiente.

| Comando               | Descrição                 |
| --------------------- | ------------------------- |
| `npm start [options]` | Roda o projeto            |
| `npm test [options]`  | Roda os testes do projeto |
| `npm run lint`        | Roda o eslint             |

### Options

Aviso: Opções pode ser concatenadas.

Ex: `npm start option1 option2`

### Start

| Comando    | Comando abreviado | Descrição                                                                                               |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| node       | n                 | Roda o projeto com `node` em vez do `nodemon` que está como padrão.                                     |
| capes      | c                 | Seta o NODE_ENV para `capes`, e adiciona alguns options [alguém da capes inserir aqui o que elas fazem] |
| dev        | d                 | Seta o NODE_ENV para `test` porque por alguma razão esse é o NODE_ENV que estamos usando em dev mesmo.  |
| production | p                 | Seta o NODE_ENV para `production`                                                                       |

### Test

| Comando  | Comando abreviado | Descrição                                           |
| -------- | ----------------- | --------------------------------------------------- |
| coverage | c                 | Faz output da covage dos testes.                    |
| error    |                   | Faz o throw de erro se houver algum teste falhando. |
| api      | a                 | Roda somente os testes de api.                      |
| jest     | j                 | Roda somante os testes jest.                        |

### Utilizando o docker

1. Clone o repositório `$ git clone git@gitlab.com:tapioca/multiprova/multiprova-api.git`
2. Entre no diretório: `$ cd multiprova-api`
3. Instale as dependências: `$ npm i`
4. Execute o rabbit (message broker)
   - Instale e rode o docker [ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#uninstall-old-versions), [debian](https://docs.docker.com/install/linux/docker-ce/debian/), [mac](https://docs.docker.com/docker-for-mac/install/), [windows](https://docs.docker.com/docker-for-windows/install/)
   - Usando o docker-compose:
     - instale o docker compose [linux](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)
       - Rode o seguinte comando na raiz do projeto: `docker-compose up -d`
       - Caso queira parar os containers, rode o seguinte comando na raiz do projeto: `docker-compose down`
   - Caso não use o docker-compose, rode o container do rabbit:
     - [windows e mac] `rmq_container_id=$(docker run -d -p 5672:5672 -p 8080:15672 --restart always rabbitmq) && sleep 10 && docker exec $rmq_container_id rabbitmq-plugins enable rabbitmq_management`.
     - [linux] `sudo rmq_container_id=$(sudo docker run -d -p 5672:5672 -p 8080:15672 --restart always rabbitmq) && sleep 10 && sudo docker exec $rmq_container_id rabbitmq-plugins enable rabbitmq_management`
5. (Opcional) Utilizar o MongoDB + Mongo-express: 
	1. Necessário utilizar o docker-compose (passo 4)
	2. Modificar quais modelos serão salvos no Mongo em [model-config.json]([https://gitlab.com/tapioca/multiprova/multiprova-api/blob/develop/server/model-config.json](https://gitlab.com/tapioca/multiprova/multiprova-api/blob/develop/server/model-config.json)). Ex.: `"dataSource":  "db"` alterado para `"dataSource":  "mongo"`
	3. Para visualizar as tabelas basta entrar em [http://localhost:8081/](http://localhost:8081/)
6. Inicie o serviço através do comando:
   - [linux e mac] `$ npm start`
   - [windows] `$ npm run win-start`

### Não utilizando o docker (windows)

1. Clone o repositório `$ git clone git@gitlab.com:tapioca/multiprova/multiprova-api.git`
2. Entre no diretório: `$ cd multiprova-api`
3. Instale as dependências: `$ npm i`
4. Instale o [rabbitMQ](https://www.rabbitmq.com/download.html) (requer instalação do Erlang)
5. Certifique-se que o rabbitMQ service - start está rodando em seu computador
6. Inicie o serviço através do comando: `$ npm run win-start`

## Informações importantes na wiki

- [Nomenclatura de arquivos](estrutura-de-arquivos)
- [Modelos no banco de dados](api)
- [Extensões do vscode](extensões-do-vscode)
