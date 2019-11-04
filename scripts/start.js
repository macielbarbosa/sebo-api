var shell = require('shelljs')

let { argv } = process

process.env.NODE_ENV = 'local-start'
process.env.BABEL_ENV = 'development'
process.env.NODE_PATH = '.'

let runner = 'nodemon'
let options = '--color '
let killPortUsed = 'kill $(lsof -t -i:3010)'

if (argv.includes('n') || argv.includes('node')) runner = 'node'
else options += ' --ignore db.json --ignore db-capes.json --ignore storage/ --ignore test-api/'

if (argv.includes('capes') || argv.includes('c')) process.env.NODE_ENV = 'capes'

if (argv.includes('capes-file') || argv.includes('f')) process.env.NODE_ENV = 'capes-file'

if (argv.includes('dev') || argv.includes('d')) process.env.NODE_ENV = 'test'

if (argv.includes('production') || argv.includes('p')) process.env.NODE_ENV = 'production'

shell.exec(killPortUsed)
shell.exec(`${runner} . ${options}`)
