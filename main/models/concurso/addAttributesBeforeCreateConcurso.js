import uid from 'uuid/v4'
import { enumNivelCargo } from 'entidades/concurso/enumNivelCargo'
import { enumStatusExportacaoQuestoes } from 'entidades/concurso/enumStatusExportacaoQuestoes'

export const addAttributesBeforeCreateConcurso = async contexto => {
  const { accessToken, body } = contexto.req
  const currentDate = new Date().toISOString()
  body.dataCadastro = currentDate
  body.dataUltimaAlteracao = currentDate
  if (!Array.isArray(body.cargos) || body.cargos.length === 0) {
    body.cargos = [
      {
        id: uid(),
        nivel: enumNivelCargo.indefinido,
        titulo: 'Cargo 1',
        etapas: [{ id: uid(), titulo: 'Etapa 1', cadernos: [] }],
        codigo: '101',
      },
    ]
  }
  if (accessToken) body.usuarioId = accessToken.userId
  body.exportacaoQuestoes = {
    status: enumStatusExportacaoQuestoes.pendente,
  }
}
