import {
  injetarMultiplos,
  composeAsync,
  transferAttributesToHookState,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroOnNewInstance,
} from 'main/helpers'
import { registrarCriacao } from 'main/models/evento'
import {
  validarSenhaAntesDeSerCriptografada,
  mapearPropriedadePermissoesParaRoles,
  mapearRolesParaPropriedadePermissoes,
  emailExiste,
  forgotPassword,
  updateForgottenPassword,
  updatePassword,
  usernameExiste,
  metodosCriacao,
  metodosParaDesativar,
  datetimeServidor,
  getUsuariosDocente,
  getUsuariosDiscentes,
  getUsuariosDiscentesByEmail,
  atualizaStatusProvas,
  getTurmasDoDocente,
  estatisticasAcademicas,
  getEstatisticasQuestoes,
  getEstatisticasQuestoesByIdDocente,
  estatisticasProvasAplicadas,
  getEstatisticasInstanciaByIdDocente,
  getEstatisticasProvaByIdDocente,
  getEstatisticasInstanciaByIdDiscente,
  getAcumuladoDasInstancias,
  getAlunosEmLote,
  criarUsuarioAluno,
  getUsuariosByPerfil,
  countUsuariosByPerfil,
} from 'main/models/usuario'
import { contratoUsuario } from 'entidades/usuario/contratoUsuario'

export default Usuario => {
  Usuario.afterRemote('findById', mapearRolesParaPropriedadePermissoes)

  Usuario.afterRemote('findOne', mapearRolesParaPropriedadePermissoes)

  Usuario.afterRemote('find', injetarMultiplos(mapearRolesParaPropriedadePermissoes))

  Usuario.beforeRemote('create', validarSenhaAntesDeSerCriptografada)

  Usuario.observe(
    'before save',
    composeAsync([
      addDataCadastroOnNewInstance,
      addDataUltimaAlteracaoOnSave,
      transferAttributesToHookState(['permissoes']),
      validarContratoOnSave(contratoUsuario),
    ])
  )

  Usuario.afterRemote('prototype.__get__provas', atualizaStatusProvas)

  Usuario.observe('after save', mapearPropriedadePermissoesParaRoles)

  Usuario.emailExiste = emailExiste(Usuario)

  Usuario.forgotPassword = forgotPassword
  Usuario.updateForgottenPassword = updateForgottenPassword
  Usuario.updatePassword = updatePassword

  Usuario.usernameExiste = usernameExiste(Usuario)

  Usuario.datetimeServidor = datetimeServidor

  Usuario.usuariosDocente = getUsuariosDocente
  Usuario.usuariosDiscentes = getUsuariosDiscentes
  Usuario.turmasDoDocente = getTurmasDoDocente
  Usuario.usuariosDiscentesByEmail = getUsuariosDiscentesByEmail

  Usuario.estatisticasAcademicas = estatisticasAcademicas
  Usuario.estatisticasQuestoes = getEstatisticasQuestoes
  Usuario.estatisticasProvasAplicadas = estatisticasProvasAplicadas

  Usuario.postAluno = criarUsuarioAluno
  Usuario.usuariosComRoles = getUsuariosByPerfil
  Usuario.countUsuariosComRoles = countUsuariosByPerfil

  Usuario.getEstatisticasQuestoesByIdDocente = getEstatisticasQuestoesByIdDocente
  Usuario.getEstatisticasInstanciaByIdDocente = getEstatisticasInstanciaByIdDocente
  Usuario.getEstatisticasProvaByIdDocente = getEstatisticasProvaByIdDocente
  Usuario.getEstatisticasInstanciaByIdDiscente = getEstatisticasInstanciaByIdDiscente
  Usuario.getAcumuladoDasInstancias = getAcumuladoDasInstancias

  Usuario.alunosEmLote = getAlunosEmLote

  metodosCriacao.forEach(({ metodo, tipoModelo }) => {
    Usuario.afterRemote(metodo, registrarCriacao({ tipoModelo }))
  })

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Usuario.disableRemoteMethodByName(metodo)
    })
  }
}
