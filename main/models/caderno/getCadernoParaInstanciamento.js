import { atributosIrrelevantes } from 'entidades/caderno/cadernoInstanciamento'
import { filterProps } from 'entidades/filterProps'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'

import { getProvaParaInstanciamento } from 'main/models/prova/getProvaParaInstanciamento'

const getProvasParaInstanciamentoAPartirDeProvasIds = async ({ provasIds, todasAsProvas, todasAsQuestoes }) => {
  const provasParaInstanciamento = []
  for (let index in provasIds) {
    const provaId = provasIds[index]
    const prova = todasAsProvas.find(prova => prova.id === provaId)
    if (prova) {
      const provaParaInstanciamento = await getProvaParaInstanciamento({ prova, todasAsQuestoes })
      provasParaInstanciamento.push(provaParaInstanciamento)
    }
  }
  return provasParaInstanciamento
}

export const getCadernoParaInstanciamento = async ({ caderno, todasAsProvas, todasAsQuestoes, isTopLevel }) => {
  const atributosParaInstanciamento = filterProps({ exclude: atributosIrrelevantes })(caderno)
  const provas = await getProvasParaInstanciamentoAPartirDeProvasIds({
    provasIds: caderno.provasIds,
    todasAsProvas,
    todasAsQuestoes,
  })
  const cadernoInstanciamento = { ...atributosParaInstanciamento, provas }
  if (isTopLevel) cadernoInstanciamento.tipo = enumTiposDadosInstanciamento.caderno
  return cadernoInstanciamento
}
