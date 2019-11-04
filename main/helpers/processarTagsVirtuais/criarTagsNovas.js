import { checarTagVirtualParaCriacao } from './checarTagVirtualParaCriacao'

export const criarTagsNovas = ({
  dicionarioTagsCriadas,
  tagsParaProcessar,
  usuarioAtual,
}) => {
  return new Promise(resolve => {
    const quatidadeTagsParaProcessar = tagsParaProcessar.length
    let quantidadeTagsProcessadas = 0
    if (quatidadeTagsParaProcessar === 0) resolve()
    const resolverQuantoTodasProcessadas = () => {
      quantidadeTagsProcessadas++
      if (quatidadeTagsParaProcessar === quantidadeTagsProcessadas) {
        resolve()
      }
    }
    const checarEssaTagVirtualParaCriacao = checarTagVirtualParaCriacao({
      dicionarioTagsCriadas,
      usuarioAtual,
      callback: resolverQuantoTodasProcessadas,
    })
    tagsParaProcessar.forEach(checarEssaTagVirtualParaCriacao)
  })
}
