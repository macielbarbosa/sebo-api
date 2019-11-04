import JSZip from 'jszip'
import fs from 'fs'
import { convertArrayToCSV } from 'convert-array-to-csv'

import { models } from 'server/server'

import { tipos as tiposDeImpressao } from 'entidades/impressao/contratoImpressao'
import { enumStatusExportacaoQuestoes } from 'entidades/concurso/enumStatusExportacaoQuestoes'
import { convertToFileName, getFileString } from 'main/utils'
import { downloadImpressao } from 'main/models/impressao/download'

const salvarZip = async ({ impressaoZip, zip }) => {
  const arquivo = await zip.generateAsync({ type: 'uint8array' })
  const path = `./storage/zip/${impressaoZip.id}.zip`
  fs.writeFile(path, arquivo, () => {})
}

const obterArquivoParaZip = async impressao => {
  const [readable] = await downloadImpressao(impressao)
  return await getFileString(readable)
}

const adicionarImagemAoZip = async ({ impressao, zip }) => {
  const filename = convertToFileName(impressao.titulo)
  const arquivo = await obterArquivoParaZip(impressao)
  zip.file(`imgs/${filename}.png`, arquivo)
}

const adicionarCSVaoZip = async ({ impressaoZip, zip }) => {
  const {
    metadados: { dadosQuestoes },
  } = impressaoZip
  const dataArrays = dadosQuestoes.map(
    ({ tituloConcurso, tituloCargo, tituloEtapa, tituloCaderno, tipoCaderno, tituloProva, questao, caminhoImagem }) => {
      return [tituloConcurso, tituloCargo, tituloEtapa, tituloCaderno, tipoCaderno, tituloProva, questao, caminhoImagem]
    }
  )
  const header = ['Concurso', 'Cargo', 'Etapa', 'Caderno', 'Tipo do Caderno', 'Prova', 'Questão', 'Caminho imagem']
  const csv = convertArrayToCSV(dataArrays, { header, separator: ';' })
  zip.file('informacoes.csv', csv)
}

const gerarZip = async ({ impressaoZip, versao }) => {
  console.log('Gerando zip da exportação de imagens das questões do concurso.')
  const zip = new JSZip()
  zip.folder('imgs')
  const impressoesQuestoes = await models.Impressao.find({
    where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.imagemQuestaoConcurso },
  })
  for (const impressao of impressoesQuestoes) {
    await adicionarImagemAoZip({ impressao, zip })
  }
  await adicionarCSVaoZip({ impressaoZip, zip })
  await salvarZip({ impressaoZip, zip })
  await impressaoZip.updateAttributes({ status: 'PRONTO' })
  console.log('Zip da exportação das imagens das questões do concurso salvo com sucesso.')
}

const checarTodasImpressoesProntas = async versao => {
  const impressoes = await models.Impressao.find({
    where: {
      'metadados.versao': versao,
      'metadados.tipo': tiposDeImpressao.imagemQuestaoConcurso,
    },
  })
  return impressoes.every(({ status }) => status === 'PRONTO')
}

const removerImagesQuestoes = async versao => {
  console.log('Removendo as imagens das questoes do concurso.')
  const impressoesQuestoes = await models.Impressao.find({
    where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.imagemQuestaoConcurso },
  })
  for (const impressao of impressoesQuestoes) {
    models.Storage.removeFile('png', impressao.id + '.png')
  }
}

const atualizarConcurso = async concursoId => {
  console.log('Atualizando o concurso.')
  const concurso = await models.Concurso.findById(concursoId)
  const { impressaoId } = concurso.exportacaoQuestoes
  await concurso.updateAttributes({
    exportacaoQuestoes: {
      status: enumStatusExportacaoQuestoes.pronto,
      impressaoId,
      data: new Date().toISOString(),
    },
  })
}

export const tratarExportacaoImagemQuestaoConcurso = async ({ versao }) => {
  const todasImpressoesProntas = await checarTodasImpressoesProntas(versao)
  if (!todasImpressoesProntas) return
  console.log('Tratando a exportação de imagem da questão do concurso.')
  const impressaoZip = await models.Impressao.findOne({
    where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.imagensQuestoesConcurso },
  })
  await gerarZip({ impressaoZip, versao })
  await atualizarConcurso(impressaoZip.metadados.concursoId)
  await removerImagesQuestoes(versao)
}
