import { metodosParaDesativar } from 'main/models/evento'

export default Evento => {
  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Evento.disableRemoteMethodByName(metodo)
    })
  }
}
