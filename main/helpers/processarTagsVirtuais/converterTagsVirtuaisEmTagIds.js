import { converterTagVirtualEmTagId } from './converterTagVirtualEmTagId'

export const converterTagsVirtuaisEmTagIds = ({
  dicionarioTagsCriadas,
  tagsVirtuais,
}) => {
  return tagsVirtuais.map(converterTagVirtualEmTagId(dicionarioTagsCriadas))
}
