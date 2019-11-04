import app from 'server/server'

export const criarImpressao = ({ usuarioId, titulo, template, metadados, extensao, contentType }) => {
  const dadosImpressao = {
    dataCadastro: new Date().toISOString(),
    status: 'PROCESSANDO',
    usuarioId,
    titulo,
    template,
    metadados,
    extensao,
    contentType,
  }
  return app.models.Impressao.create(dadosImpressao)
}
