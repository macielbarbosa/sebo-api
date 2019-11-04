import moment from 'moment'

export const getEstaNoIntervaloDeAplicacao = async function() {
  try {
    const instancia = this

    const now = moment()
    return now.isBetween(instancia.virtual.dataInicioProva, instancia.virtual.dataTerminoProva)
  } catch (e) {
    console.warn(e)
  }
}
