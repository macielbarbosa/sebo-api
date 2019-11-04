import JSZip from 'jszip'
import fs from 'fs'
import { convertArrayToCSV } from 'convert-array-to-csv'

import app from 'server/server'

import { tipos as tiposDeImpressao } from 'entidades/impressao/contratoImpressao'
import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

import { convertToFileName, getFileString } from 'main/utils'
import { downloadImpressao } from 'main/models/impressao/download'
import { checarSeCadernoGerandoEssaVersao, getGabarito } from 'main/models/concurso'

const saveZip = async ({ impressao, zip }) => {
  const arquivo = await zip.generateAsync({ type: 'uint8array' })
  const fileName = impressao.id
  const extensao = 'zip'
  const path = `./storage/${extensao}/${fileName}.${extensao}`
  fs.writeFile(path, arquivo, () => { })
}

const editarInstanciamentoCadernoParaPronto = async ({ concursoId, cadernoId, versao }) => {
  const concurso = await app.models.Concurso.findById(concursoId)
  const estaGerandoVersao = await checarSeCadernoGerandoEssaVersao({ concursoId, cadernoId, versao })
  if (!estaGerandoVersao) return
  const caderno = concurso.cadernos.find(caderno => caderno.id === cadernoId)
  caderno.instanciamento.status = statusInstanciamentoCaderno.pronto
  await concurso.save()
}

const addImpressaoToZip = async ({ filename, zip, impressao }) => {
  filename = convertToFileName(filename)
  const [readable] = await downloadImpressao(impressao)
  const file = await getFileString(readable)
  zip.file(`${filename}.pdf`, file, { createFolders: false })
  return zip
}

const addVersaoCadernoToZip = async ({ impressao, cargo, caderno, zip }) => {
  const { versaoCaderno } = impressao.metadados
  let filename = `${versaoCaderno.id.substring(0, 5)}-${cargo.titulo}-${caderno.titulo}-tipo-${versaoCaderno.apelido}`
  await addImpressaoToZip({ impressao, filename, zip })
  return zip
}

const addGabaritosCSV = async ({ versao, zip, concurso, filename }) => {
  let instanciamentos = await app.models.InstanciamentoConcursos.find({ where: { versao } })
  let gabaritos = []
  instanciamentos.forEach(({ caderno }) => gabaritos.push(getGabarito({ caderno, concurso })))
  const dataArrays = []
  gabaritos.forEach(({ respostas, versaoCaderno }) => {
    respostas.forEach((resposta, index) => {
      if (!dataArrays[index]) dataArrays[index] = {}
      dataArrays[index].questoes = index + 1
      dataArrays[index][versaoCaderno.apelido] = resposta
    })
  })
  const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, { separator: ';' })
  zip.file(`${convertToFileName(filename)}.csv`, csvFromArrayOfArrays, { createFolders: false })
}

const addGabaritosToZip = async ({ versao, cargo, caderno, zip, concurso }) => {
  const impressao = await app.models.Impressao.findOne({
    where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.gabaritosConcurso },
  })
  let filename = `${cargo.titulo}-${caderno.titulo}-gabaritos`
  await addImpressaoToZip({ impressao, filename, zip })
  await addGabaritosCSV({ versao, zip, concurso, filename })
  return zip
}

const gerarZipDeCaderno = async ({ concursoId, impressao, cadernoId, versao }) => {
  console.log('Gerando zip do caderno de concurso.')
  const concurso = await app.models.Concurso.findById(concursoId)
  const estaGerandoVersao = await checarSeCadernoGerandoEssaVersao({ concurso, cadernoId, versao })
  if (!estaGerandoVersao) return
  let zip = new JSZip()
  const caderno = concurso.cadernos.find(caderno => caderno.id === cadernoId)
  const cargo = concurso.cargos.find(cargo => {
    return cargo.etapas.some(etapa => etapa.cadernos.some(caderno => caderno === cadernoId))
  })
  const impressoesVersoes = await app.models.Impressao.find({
    where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.cadernoConcurso },
  })
  const adicionandoNoZip = []
  impressoesVersoes.forEach(impressao => {
    adicionandoNoZip.push(addVersaoCadernoToZip({ impressao, cargo, caderno, zip }))
  })
  await Promise.all(adicionandoNoZip)
  zip = await addGabaritosToZip({ versao, cargo, caderno, zip, concurso })
  await saveZip({ impressao, zip })
  await impressao.updateAttributes({ status: 'PRONTO' })
  console.log('Zip do caderno de concurso salvo com sucesso.')
}

const checarSeTodasImpressoesProntas = async ({ versao }) => {
  const impressoes = await app.models.Impressao.find({
    where: {
      or: [
        { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.cadernoConcurso },
        { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.gabaritosConcurso },
      ],
    },
  })
  let todasProntas = true
  impressoes.forEach(({ status }) => {
    if (status !== 'PRONTO') todasProntas = false
  })
  return todasProntas
}

export const tratarOperacoesConcurso = async ({ versao, concursoId, cadernoId }) => {
  console.log('Tratando impressão de caderno do concurso.')
  const todasImpressoesProntas = await checarSeTodasImpressoesProntas({ versao })
  if (todasImpressoesProntas) {
    const impressao = await app.models.Impressao.findOne({
      where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.concurso },
    })
    await gerarZipDeCaderno({ concursoId, impressao, cadernoId, versao })
    await editarInstanciamentoCadernoParaPronto({ concursoId, cadernoId, versao })
  }
  return
}
