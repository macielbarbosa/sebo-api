export const admin = {
  id: '6cd50f7b-9d6e-445e-8746-cf1b9328dc5c',
  nome: 'Admin SobrenomeAdmin',
  instituicao: 'UFRN',
  username: 'admin',
  email: 'admin@ufrn.br',
  password: '12345678',
  permissoes: [1],
  validado: true,
}

const docente = {
  id: 'ef51d75f-2ecc-4a14-b6c7-d745ce22d193',
  nome: 'ODocente SobrenomeDocente',
  instituicao: 'UFRN',
  username: 'docente',
  email: 'docente@ufrn.br',
  password: '12345678',
  permissoes: [2],
  validado: true,
}

const discente = {
  id: '66f8c397-a320-4236-b336-328114bd6efd',
  nome: 'IDiscente SobrenomeDiscente',
  instituicao: 'UFRN',
  username: 'discente',
  email: 'discente@ufrn.br',
  password: '12345678',
  permissoes: [3],
  validado: true,
}

const superAdmin = {
  id: '9ae320f1-8dd7-4d85-809b-b36acc208ba9',
  nome: 'Super Admin',
  instituicao: 'UFRN',
  username: 'super',
  email: 'super@ufrn.br',
  password: '12345678',
  permissoes: [4],
  validado: true,
}

const gestor = {
  id: '9ae320f1-8dd7-4d85-809b-b36a66f8c397',
  nome: 'Gestor',
  instituicao: 'UFRN',
  username: 'gestor',
  email: 'gestor@ufrn.br',
  password: '12345678',
  permissoes: [5],
}

export default [admin, docente, discente, superAdmin, gestor]
