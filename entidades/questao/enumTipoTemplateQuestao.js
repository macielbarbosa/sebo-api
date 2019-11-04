export const comperve = Object.freeze({
  multiplaEscolhaComperve: 'comperve/multiplaEscolha',
  blocoComperve: 'comperve/bloco',

  multiplaEscolha: 'comperve/multiplaEscolha',
  bloco: 'comperve/bloco',
})

export const geral = Object.freeze({
  multiplaEscolhaGeral: 'geral/multiplaEscolha',
  blocoGeral: 'geral/bloco',
  associacaoDeColunasGeral: 'geral/associacaoDeColunas',
  discursivaGeral: 'geral/discursiva',
  voufGeral: 'geral/vouf',

  multiplaEscolha: 'geral/multiplaEscolha',
  bloco: 'geral/bloco',
  associacaoDeColunas: 'geral/associacaoDeColunas',
  discursiva: 'geral/discursiva',
  vouf: 'geral/vouf',
})

export const enumTipoTemplateQuestao = Object.freeze({
  ...geral,
  ...comperve,
})

export const tiposTemplateQuestao = { comperve, geral }
