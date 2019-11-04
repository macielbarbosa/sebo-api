import { getDadosOnSave } from 'main/helpers/beforeSave'
import { substituirTagsVirtuaisPorTagIds } from './substituirTagsVirtuaisPorTagIds'
import app from 'server/server'

export const processarTagsOnSave = async contexto => {
  const dados = getDadosOnSave(contexto)
  if (dados) {
    if (Array.isArray(dados.tagsVirtuais)) {
      const usuarioAtual = await app.models.Usuario.findById(contexto.options.accessToken.userId)
      dados.tagIds = await substituirTagsVirtuaisPorTagIds({
        dados,
        dicionarioTagsCriadas: {},
        usuarioAtual,
      })
    }
    if (contexto.instance) {
      contexto.instance.unsetAttribute('tagsVirtuais')
      contexto.instance.setAttribute('tagIds', dados.tagIds)
    } else if (contexto.data) {
      delete contexto.data.tagsVirtuais
      contexto.data.tagIds = dados.tagIds
    }
  }
}
