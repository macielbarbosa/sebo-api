export const aclsPermitirExecucaoConcurso = [
  {
    principalId: '$owner',
    properties: [
      'aplicarProva',
      'reverterAplicacao',
      'instanciar',
      'cancelarInstanciamento',
      'excluirInstanciamento',
      'criarEtapa',
      'excluirEtapa',
      'alterarEtapa',
      'criarCaderno',
      'excluirCaderno',
      'alterarCaderno',
      'alterarCargo',
      'excluirCargo',
      'isQuestaoAssociada',
      'isProvaAssociada',
      'asssociarProvaAoCadernoDoConcurso',
      'desasssociarProvaAoCadernoDoConcurso',
      'exportarImagensQuestoes',
    ],
  },
  {
    principalId: 'docente',
    properties: ['create', 'gerarImpressaoDeQuestaoInstanciada', 'previewCapa'],
  },
]
