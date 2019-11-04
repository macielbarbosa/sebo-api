import { getContratoQuestaoBloco } from './contratoQuestaoBloco'
import { getContratosQuestoesIndividuais } from './contratosQuestoesIndividuais'

export const getContratosQuestao = () => ({
  bloco: getContratoQuestaoBloco(),
  ...getContratosQuestoesIndividuais(),
})

const getContratoQuestao = () => ({
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: getContratosQuestao(),
  },
})

export const contratoQuestao = Object.freeze(getContratoQuestao())

export const getAtributosEspecificos = () => {
  const contratos = getContratosQuestao()
  const atributosEspecificos = {}
  for (let tipo in contratos) {
    atributosEspecificos[tipo] = contratos[tipo][tipo]
  }
  return atributosEspecificos
}
