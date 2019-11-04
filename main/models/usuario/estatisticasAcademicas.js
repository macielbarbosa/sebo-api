import { models } from 'server/server'
import { mapPermissionToRolename } from 'main/models/usuario/mapPermissaoToRolename'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

export const estatisticasAcademicas = cb => {
  try {
    const { Turma } = models
    const estatisticas = {}

    var p1 = Turma.count({ isDeleted: false })
      .then(res => {
        estatisticas.turmas = res
      })
      .catch(err => cb(new Error(err)))
    var p2 = getUsariosPorRole(mapPermissionToRolename[2])
      .then(res => {
        estatisticas.docentes = res
      })
      .catch(err => cb(new Error(err)))
    var p3 = getUsariosPorRole(mapPermissionToRolename[3])
      .then(res => {
        estatisticas.discentes = res
      })
      .catch(err => cb(new Error(err)))
    var p4 = getInstanciasAplicadas()
      .then(res => {
        estatisticas.instanciasAplicadas = res
      })
      .catch(err => cb(new Error(err)))
    Promise.all([p1, p2, p3, p4])
      .then(() => {
        cb(null, estatisticas)
      })
      .catch(err => cb(new Error(err)))
  } catch (e) {
    cb(new Error())
  }
}

const getUsariosPorRole = async rolename => {
  const RoleMapping = models.RoleMapping
  let Roledb = models.Role
  let idPermissao
  let roleInfo = await Roledb.findOne({
    where: { name: rolename },
  })
  idPermissao = roleInfo.id
  return await RoleMapping.count({ roleId: idPermissao })
}

const getIdProvasAplicadas = async () => {
  const Prova = models.Prova
  const ids = await Prova.find({ where: { status: enumStatusAplicacao.aplicada } })
  return ids.map(prova => prova.id)
}

const getInstanciasAplicadas = async () => {
  const Instanciamento = models.Instanciamento
  const idProvas = await getIdProvasAplicadas()
  return await Instanciamento.count({ idMatriz: { inq: idProvas } })
}
