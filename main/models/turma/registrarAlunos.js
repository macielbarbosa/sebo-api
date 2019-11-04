import { criarUsuarioAluno } from 'main/models/usuario'

export const registrarAlunos = async contexto => {
  if (contexto.instance) {
    const turma = contexto.instance.toObject()
    const { alunos } = turma
    for (let index in alunos) await criarUsuarioAluno(alunos[index])
  }
}
