import { selecaoAutomatica } from '../questao/selecaoAutomatica'

export const selecionaQuestoesDinamicas = async (dinamica, options) => {
  if (!dinamica || dinamica.length === 0) return []

  const questoesSorteadas = await dinamica.reduce(async (acc = [], { criterios = {} }) => {
    const { quantidade, dificuldade, anoEscolar, tipo } = criterios
    const tipoSemBloco = !!tipo ? tipo : { $ne: 'bloco' }
    const questoesSelecionadas = await acc
    const questoes = await selecaoAutomatica(
      quantidade,
      dificuldade,
      anoEscolar,
      tipoSemBloco,
      questoesSelecionadas.map(({ id }) => id),
      options
    )
    return [...questoesSelecionadas, ...questoes]
  }, [])

  return [
    {
      id: '0',
      nome: '',
      questoes: questoesSorteadas,
    },
  ]
}
