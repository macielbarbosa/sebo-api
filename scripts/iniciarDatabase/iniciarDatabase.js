import roles from './roles'
import usuarios, { admin } from './usuarios'

const createInstance = async (app, model, instance) => {
  try {
    console.log(`Criando ${model}: `, JSON.stringify(instance, null, 2))
    await app.models[model].create(instance)
    console.log('Criado com sucesso.')
  } catch (error) {
    const { details, status, name, errmsg } = error
    if (name === 'MongoError' && errmsg && errmsg.includes('duplicate')) {
      console.error('Não precisa ser criado, já existe.')
    } else if (details && JSON.stringify(details).includes('uniqueness')) {
      console.error('Não precisa ser criado, já existe.')
    } else {
      console.error(`Houve um erro na criação com status ${status}.`)
      console.error(JSON.stringify(details, null, 2))
    }
  }
}

const createInstances = async (app, model, instances) => {
  for (let index in instances) {
    await createInstance(app, model, instances[index])
  }
}

export const iniciarDatabase = async app => {
  console.log('Iniciando banco de dados.')
  const { NODE_ENV } = process.env
  console.log(`NODE_ENV: ${NODE_ENV}`)
  const nodeEnvsParaCriarTodosSampleUsuarios = ['develop', 'test', 'local-test', 'local-start', 'local-start', 'capes']
  if (nodeEnvsParaCriarTodosSampleUsuarios.some(nodeEnv => NODE_ENV === nodeEnv)) {
    await createInstances(app, 'Role', roles)
    await createInstances(app, 'Usuario', usuarios)
  } else if (NODE_ENV === 'production') {
    await createInstances(app, 'Role', roles)
    await createInstances(app, 'Usuario', [admin])
  }
}
