import app from 'server/server'
import { NotFoundError } from 'main/erros'

export const downloadImpressao = async impressao => {
  if (!impressao) throw new NotFoundError('Arquivo ainda não foi gerado.')
  let downloadStream
  try {
    downloadStream = await app.models.Storage.downloadStream(
      impressao.extensao,
      impressao.id + `.${impressao.extensao}`
    )
  } catch (error) {
    console.error(error)
    throw new NotFoundError('Arquivo não existe no storage.')
  }
  const name = `${impressao.titulo}`.substring(0, 250)
  const filename = `${name}.${impressao.extensao}`
  const contentDisposition = `attachment; filename=${filename}`
  return [downloadStream, impressao.contentType, contentDisposition]
}

export const download = Impressao => async impressaoId => {
  const impressao = await Impressao.findOne({ where: { and: [{ id: impressaoId }, { status: 'PRONTO' }] } })
  if (!impressao) throw new NotFoundError('Arquivo ainda não foi gerado.')
  return downloadImpressao(impressao)
}
