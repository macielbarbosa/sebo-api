const { dbTestStable } = require('../../test-api/db-test-stable')

module.exports = {
  models: {
    Instanciamento: {
      find: filter => {
        return filterCollection(dbTestStable.models.Instanciamento)(filter)
      },
    },
  },
}

const filterCollection = collection => filter => {
  const { where } = filter
  let result = []
  for (let key of Object.keys(where)) {
    result = [...result, ...filterCollectionByField(collection)(key, where[key])]
  }
  return result
}

const filterCollectionByField = collection => (fieldName, value) => {
  const result = []
  for (let key of Object.keys(collection)) {
    const item = collection[key]
    if (item[fieldName]) {
      if (item[fieldName] === value) result.push({ ...item, ...crudMock })
    }
  }
  return result
}

const crudMock = {
  save: () => {},
}
