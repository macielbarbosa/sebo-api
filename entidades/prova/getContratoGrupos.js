export const getContratoGrupo = questoes => ({
  id: {
    type: 'string',
  },
  nome: {
    type: 'string',
  },
  paratextoInicial: {
    type: 'string',
  },
  paratextoFinal: {
    type: 'string',
  },
  questoes,
})

export const getContratoGrupos = questoes => ({
  type: 'array',
  contratoElemento: getContratoGrupo(questoes),
})
