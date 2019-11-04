import { contratoPreviewQuestaoAssociacaoDeColunas as associacaoDeColunas } from './contratoPreviewQuestaoAssociacaoDeColunas'
import { contratoPreviewQuestaoBloco as bloco } from './contratoPreviewQuestaoBloco'
import { contratoPreviewQuestaoDiscursiva as discursiva } from './contratoPreviewQuestaoDiscursiva'
import { contratoPreviewQuestaoMultiplaEscolha as multiplaEscolha } from './contratoPreviewQuestaoMultiplaEscolha'
import { contratoPreviewQuestaoVOuF as vouf } from './contratoPreviewQuestaoVOuF'

const contratos = {
  associacaoDeColunas,
  discursiva,
  multiplaEscolha,
  bloco,
  vouf,
}

export const getContratoQuestaoPreview = () => ({
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos,
  },
})

export const contratoQuestaoPreview = Object.freeze(getContratoQuestaoPreview())
