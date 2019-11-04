import { criarTagsNovas } from './criarTagsNovas'
import { converterTagsVirtuaisEmTagIds } from './converterTagsVirtuaisEmTagIds'

export const processarTagsVirtuais = async ({
  dicionarioTagsCriadas,
  tagsVirtuais,
  usuarioAtual,
}) => {
  await criarTagsNovas({
    dicionarioTagsCriadas,
    tagsParaProcessar: tagsVirtuais,
    usuarioAtual,
  })
  return converterTagsVirtuaisEmTagIds({
    dicionarioTagsCriadas,
    tagsVirtuais,
  })
}
