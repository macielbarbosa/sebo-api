import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

import { patchInstanciamento } from './patchInstanciamento'

export const cancelarInstanciamentoCaderno = async (instancia, cadernoId, versao) => {
  const { concurso, mudouStatus } = await patchInstanciamento({
    novasPropriedades: {
      status: statusInstanciamentoCaderno.cancelado,
      dataCancelamento: new Date().toISOString(),
    },
    statusAtual: statusInstanciamentoCaderno.gerando,
  })({ versao, instancia, cadernoId })
  return [mudouStatus, concurso.toObject()]
}
