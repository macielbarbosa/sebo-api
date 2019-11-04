const { restartTestApi } = require('./restartTestApi')
var shell = require('shelljs')

let { argv } = process

process.env.NODE_ENV = 'local-test'
process.env.BABEL_ENV = 'test'
process.env.NODE_PATH = '.'

const argFile = argv.find(str => str.search('file=') >= 0)
let file = argFile && argFile.split('=')[1]

const runTestesApi = async () => {
  await restartTestApi()
  console.log('============ INICIANDO TESTES DE API ============')
  if (argv.includes('c') || argv.includes('coverage')) shell.exec('nyc mocha --color --exit test-api/')
  else shell.exec('mocha --color --exit test-api/')
  if (shell.error() && argv.includes('error')) {
    console.error('Houve alguma falha no testes de api.')
    process.exit(1)
  }
}

const runTestesJest = file => {
  console.log('============ INICIANDO TESTES JEST ============')
  const localTest = file || 'main'
  shell.exec(`jest --color --forceExit --detectOpenHandles ${localTest}`)
  if (shell.error() && argv.includes('error')) {
    console.error('Houve alguma falha no testes jest.')
    process.exit(1)
  }
}

if (argv.includes('api') || argv.includes('a')) {
  runTestesApi()
} else if (argv.includes('jest') || argv.includes('j')) {
  runTestesJest(file)
} else {
  runTestesJest(file)
  runTestesApi()
}
