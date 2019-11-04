import { resetOutput, addToOutput } from 'scripts/testApiOutput'
import { modelFunctionWrapper } from 'main/helpers'

const processarConsumers = Model => consumers => {
  for (let consumerName in consumers) {
    const consumerFunction = Model[consumerName]
    Model.remoteMethod(consumerName, {
      accepts: {
        arg: 'payload',
        type: 'string',
      },
      http: {
        verb: 'post',
      },
    })
    Model[consumerName] = modelFunctionWrapper(consumerFunction)
    Model.settings.acls.push({
      accessType: 'EXECUTE',
      principalType: 'ROLE',
      principalId: 'super',
      permission: 'ALLOW',
      property: consumerName,
    })
  }
}

const processarProcucers = Model => producers => {
  for (let producerName in producers) {
    resetOutput(producerName)
    const producerConfig = producers[producerName]
    const { exchange } = producerConfig
    Model[producerName] = mensagem => {
      addToOutput(producerName)(mensagem)
      console.log(`MockRabbit: Mensagem mandada com sucesso para fila: ${exchange}`)
    }
  }
}

export default Model => {
  if (process.env.NODE_ENV === 'local-test' && Model.settings.mixins.MessageQueue) {
    const { consumers, producers } = Model.settings.mixins.MessageQueue
    delete Model.settings.MessageQueue
    processarConsumers(Model)(consumers)
    processarProcucers(Model)(producers)
  }
}
