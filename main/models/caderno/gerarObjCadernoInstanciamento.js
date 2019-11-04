import { models } from 'server/server'
import { gerarObjProvaInstanciamento } from 'main/models/prova'

const ordenar = (provas, provasIds) => {
  let ordenada = Array.from({ length: provas.length })
  provas.forEach(prova => {
    const index = provasIds.findIndex(p => p.id === prova.id)
    ordenada[index] = prova
  })
  return ordenada
}

const getObjetoProvasOrdenado = (provas, filtroIds) => {
  const provasOrdenadas = ordenar(provas, filtroIds)
  const objProvas = []
  provasOrdenadas.forEach(prova =>
    gerarObjProvaInstanciamento(prova, res => {
      objProvas.push(res)
    })
  )

  return objProvas
}

export const gerarObjCadernoInstanciamento = ({
  id,
  provasIds,
  titulo,
  descricao,
  usuarioId,
  template,
  duracao,
  fraseDeRodape,
  logoCaderno,
  logoComperve,
  instrucoes,
}) => {
  const filtroIds = provasIds.map(id => ({ id }))
  const { Prova } = models
  const numInstancias = 2
  return new Promise((resolve, reject) => {
    Prova.find({ where: { or: filtroIds } }, (err, provas) => {
      if (err) reject(err)
      resolve({
        provas: getObjetoProvasOrdenado(provas, filtroIds),
        id,
        titulo,
        descricao,
        usuarioId,
        template,
        duracao,
        fraseDeRodape,
        logoCaderno,
        logoComperve,
        instrucoes,
        numInstancias,
      })
    })
  })
}
