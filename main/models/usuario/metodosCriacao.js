import { TIPO_QUESTAO, TIPO_PROVA, TIPO_CADERNO, TIPO_CONCURSO, TIPO_USUARIO, TIPO_TURMA } from 'main/models/evento'

export const metodosCriacao = [
  { metodo: 'create', tipoModelo: TIPO_USUARIO },
  { metodo: 'prototype.__create__questoes', tipoModelo: TIPO_QUESTAO },
  { metodo: 'prototype.__create__provas', tipoModelo: TIPO_PROVA },
  { metodo: 'prototype.__create__cadernos', tipoModelo: TIPO_CADERNO },
  { metodo: 'prototype.__create__concursos', tipoModelo: TIPO_CONCURSO },
  { metodo: 'prototype.__create__turmas', tipoModelo: TIPO_TURMA },
]
