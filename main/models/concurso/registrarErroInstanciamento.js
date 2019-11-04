import { patchInstanciamento } from './patchInstanciamento'
import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

export const registrarErroInstanciamento = async ({ versao, cadernoId, concurso }) => {
  const { concurso: instancia, mudouStatus } = await patchInstanciamento({
    novasPropriedades: { status: statusInstanciamentoCaderno.erro },
    statusAtual: statusInstanciamentoCaderno.gerando,
  })({
    versao,
    instancia: concurso,
    cadernoId,
  })
  return [mudouStatus, instancia.toObject()]
}
