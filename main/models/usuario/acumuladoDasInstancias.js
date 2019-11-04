import { models } from 'server/server'
import { enumStatusInstanciamento } from 'entidades/instanciamento'

const _ordenaOArray = meses => {
  const labelsMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  const hoje = new Date()
  const dados = []
  const m = Number(hoje.getMonth()) + 13

  for (let index = 0; index < 12; index++) {
    const indexFinal = (index + m) % 12
    dados.push({ mes: labelsMeses[indexFinal], valor: meses[indexFinal] })
  }
  return dados
}

const _countAcumuladoDasInstancias = meses => {
  const arrayOrdenado = _ordenaOArray(meses)
  for (let i = 0; i < arrayOrdenado.length; i++)
    arrayOrdenado[i].valor = i !== 0 ? arrayOrdenado[i - 1].valor + arrayOrdenado[i].valor : arrayOrdenado[i].valor
  return arrayOrdenado
}

const _countInstanciasDeCadaMes = instancias => {
  let meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let instancia of instancias) {
    const mesDaInstancia = new Date(instancia.virtual.dataTerminoProva).getMonth()
    meses[Number(mesDaInstancia)]++
  }
  return meses
}

export const getAcumuladoDasInstancias = (usuarioId, cb) => {
  try {
    const { Instanciamento } = models
    let umAnoAtras = new Date()
    umAnoAtras.setFullYear(umAnoAtras.getFullYear() - 1)

    const filtro = {
      where: {
        status: enumStatusInstanciamento.concluida,
        isDeleted: false,
        usuarioId,
        'virtual.dataTerminoProva': { gt: umAnoAtras.toISOString() },
      },
      fields: { id: true, dataUltimaAlteracao: true, status: true, prova: true, virtual: true },
    }

    Instanciamento.find(filtro, function(err, response) {
      if (err) return cb(err)
      const meses = _countInstanciasDeCadaMes(response)
      const dados = _countAcumuladoDasInstancias(meses)
      cb(null, { acumulado: dados })
    })
  } catch (err) {
    throw new Error(err)
  }
}

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local-test') {
  exports._ordenaOArray = _ordenaOArray
  exports._countAcumuladoDasInstancias = _countAcumuladoDasInstancias
  exports._countInstanciasDeCadaMes = _countInstanciasDeCadaMes
}
