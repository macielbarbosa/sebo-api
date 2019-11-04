import { models } from 'server/server'

import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

export const checarSeCadernoGerandoEssaVersao = async ({ concursoId, cadernoId, versao, concurso }) => {
  if (!concurso) concurso = await models.Concurso.findById(concursoId)
  if (!concurso) {
    console.log('O concurso não existe.')
    return false
  }
  const caderno = concurso.cadernos.find(caderno => caderno.id === cadernoId)
  if (!caderno) {
    console.log('O caderno não existe mais no concurso.')
    return false
  } else if (caderno.instanciamento.status !== statusInstanciamentoCaderno.gerando) {
    console.log('O caderno não está mais gerando uma versão.')
    return false
  } else if (caderno.instanciamento.versao !== versao) {
    console.log('O caderno está gerando outra versão no momento.')
    return false
  } else return true
}
