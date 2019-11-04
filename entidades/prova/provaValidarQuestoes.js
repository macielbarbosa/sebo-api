import { validarQuestao } from 'entidades/questao/validarQuestao'

export const provaValidarQuestoes = questoes => {
  let sucesso = true
  const erros = []
  try {
    if (Array.isArray(questoes))
      questoes.forEach(questao => {
        const questaoValidacao = validarQuestao(questao, true)
        if (!questaoValidacao.sucesso) {
          sucesso = false
          erros.push(questaoValidacao.erros)
        }
      })
  } catch (erro) {
    console.error(erro)
  }
  return { sucesso, erros }
}
