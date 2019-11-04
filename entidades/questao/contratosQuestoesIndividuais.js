import { getContratoQuestaoMultiplaEscolha } from './contratoQuestaoMultiplaEscolha'
import { getContratoQuestaoVOuF } from './contratoQuestaoVOuF'
import { getContratoQuestaoDiscursiva } from './contratoQuestaoDiscursiva'
import { getContratoQuestaoAssociacaoDeColunas } from './contratoQuestaoAssociacaoDeColunas'
import { getContratoQuestaoRedacao } from './contratoQuestaoRedacao'

export const getContratosQuestoesIndividuais = () => ({
  vouf: getContratoQuestaoVOuF(),
  discursiva: getContratoQuestaoDiscursiva(),
  associacaoDeColunas: getContratoQuestaoAssociacaoDeColunas(),
  redacao: getContratoQuestaoRedacao(),
  multiplaEscolha: getContratoQuestaoMultiplaEscolha(),
})
