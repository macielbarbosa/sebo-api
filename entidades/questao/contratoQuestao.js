import { getContratosQuestao } from './contratosQuestao'

export const getContratoQuestao = () => ({
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: getContratosQuestao(),
  },
})

export const contratoQuestao = Object.freeze(getContratoQuestao())
