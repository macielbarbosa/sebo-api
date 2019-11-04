import app from 'server/server'

import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

import { patchInstanciamento } from './patchInstanciamento'

const excluirInstanciamentos = async ({ versao }) => {
  const instancias = await app.models.InstanciamentoConcursos.find({ where: { versao } })
  for (let index in instancias) await instancias[index].destroy()
  return instancias.length
}

export const excluirInstanciamentoCaderno = async (instancia, cadernoId, versao) => {
  const { concurso, mudouStatus } = await patchInstanciamento({
    novasPropriedades: {
      status: statusInstanciamentoCaderno.excluido,
      dataExluido: new Date().toISOString(),
    },
  })({ versao, instancia, cadernoId })
  const numeroDeInstanciamentosExcluidos = await excluirInstanciamentos({ versao })
  return [mudouStatus, numeroDeInstanciamentosExcluidos, concurso.toObject()]
}
