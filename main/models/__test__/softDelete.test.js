const modelosSemSoftDelete = require('server/modelos-sem-softdelete.json')
const jsonModelosSoftDelete = require('./jsonModelosSoftDelete')
const dirModelos = 'common/models'

describe('Verificacao de modelos com SoftDelete', () => {
  modelosSemSoftDelete.forEach(modelo => {
    it(`O json do modelo ${modelo} não deve ter "mixins": { "SoftDelete": true }. Caso seja necessário, remova o nome do modelo em server/modelos-sem-softdelete.json`, () => {
      const jsonModelo = require(`${dirModelos}/${modelo}.json`)
      expect(jsonModelo).not.toHaveProperty('mixins.SoftDelete', true)
    })
  })

  jsonModelosSoftDelete.forEach(json => {
    it(`O json do modelo ${json.replace(
      '.json',
      ''
    )} deve ter "mixins": { "SoftDelete": true }. Caso não seja necessário, inclua o nome do modelo em server/modelos-sem-softdelete.json`, () => {
      const jsonModelo = require(`${dirModelos}/${json}`)
      expect(jsonModelo).toHaveProperty('mixins.SoftDelete', true)
    })
  })
})
