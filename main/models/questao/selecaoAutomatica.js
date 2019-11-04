import { validarContratoComThrow } from 'main/helpers'
import { contratoSelecaoAutomaticaQuestoes } from 'entidades/questao'
import { InternalError } from '../../erros'
import app from 'server/server'

export const selecaoAutomatica = async (
  quantidadeDeQuestoes,
  dificuldade,
  anoEscolar,
  tipo,
  questoesSelecionadas = [],
  options,
  cb
) => {
  await validarContratoComThrow({
    contrato: contratoSelecaoAutomaticaQuestoes,
    dados: { quantidadeDeQuestoes, dificuldade, anoEscolar, tipo, questoesSelecionadas },
  })
  try {
    const Questao = app.models.Questao
    const filtroDificuldade = dificuldade ? { dificuldade } : {}
    const filtroAnoEscolar = anoEscolar ? { anoEscolar } : {}
    const filtroTipo = tipo ? { tipo } : {}
    const filtroSelo = { selo: 'Validada' }

    if (Questao.dataSource.connector.name === 'mongodb') {
      const questoes = await Questao.dataSource.connector.db
        .collection('Questao')
        .aggregate([
          {
            $match: {
              _id: { $nin: questoesSelecionadas },
              usuarioId: options.accessToken.userId,
              ...filtroDificuldade,
              ...filtroAnoEscolar,
              ...filtroTipo,
              ...filtroSelo,
            },
          },
          { $sample: { size: quantidadeDeQuestoes } },
        ])
        .toArray()
      const arrayQuestoes = questoes.map(({ _id, ...rest }) => ({ id: _id, ...rest }))
      if (!!cb) return [arrayQuestoes]
      else return arrayQuestoes
    } else {
      console.error('para usar a feature seleção automática é necessário usar o mongo como datasource de Questoes')
      throw new InternalError()
    }
  } catch (error) {
    throw new InternalError(error)
  }
}
