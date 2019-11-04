import app from 'server/server'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

export const duplicarProva = async id => {
  const { Prova } = app.models
  const {
    questaoIds,
    tagIds,
    tipoProva,
    titulo,
    tema,
    instituicao,
    descricao,
    nomeProfessor,
    tipoEmbaralhamento,
    grupos,
    valor,
    sistemaDeNotasDaProva,
    template,
    tags,
    criadoPor,
    usuarioId,
    questoes,
  } = await Prova.findById(id)
  return Prova.create({
    questaoIds,
    tagIds,
    tipoProva,
    titulo,
    tema,
    instituicao,
    nomeProfessor,
    tipoEmbaralhamento,
    grupos,
    valor,
    sistemaDeNotasDaProva,
    template,
    tags,
    descricao: 'Cópia de ' + descricao,
    status: enumStatusAplicacao.elaboracao,
    vistaProvaHabilitada: false,
    criadoPor,
    usuarioId,
    dataCadastro: new Date().toISOString(),
    questoes,
  })
}
