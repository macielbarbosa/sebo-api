const transformarContratoQuestao = (transformar, contrato) => {
  let contratoTransformado = { ...contrato }
  if (contratoTransformado.bloco) {
    if (transformar.bloco) {
      contratoTransformado = { ...transformar.bloco(contratoTransformado) }
    }
    if (transformar.blocoQuestoes) {
      contratoTransformado.bloco = { ...contratoTransformado.bloco }
      contratoTransformado.bloco.contrato = { ...contratoTransformado.bloco.contrato }
      contratoTransformado.bloco.contrato.questoes = transformar.blocoQuestoes({
        ...contratoTransformado.bloco.contrato.questoes,
      })
    }
    if (transformar.noBloco) {
      contratoTransformado.bloco = { ...contratoTransformado.bloco }
      contratoTransformado.bloco.contrato = { ...contratoTransformado.bloco.contrato }
      contratoTransformado.bloco.contrato.questoes = { ...contratoTransformado.bloco.contrato.questoes }
      contratoTransformado.bloco.contrato.questoes.elemento = {
        ...contratoTransformado.bloco.contrato.questoes.elemento,
      }
      contratoTransformado.bloco.contrato.questoes.elemento.polymorphic = {
        ...contratoTransformado.bloco.contrato.questoes.elemento.polymorphic,
      }
      const contratosNoBloco = { ...contratoTransformado.bloco.contrato.questoes.elemento.polymorphic.contratos }
      Object.keys(contratosNoBloco).forEach(tipo => {
        contratosNoBloco[tipo] = transformar.noBloco({ ...contratosNoBloco[tipo] })
      })
      contratoTransformado.bloco.contrato.questoes.elemento.polymorphic.contratos = contratosNoBloco
    }
  } else if (transformar.singular) {
    contratoTransformado = transformar.singular(contratoTransformado)
  }
  return contratoTransformado
}

export const transformarContratosQuestao = transformar => contratos => {
  const contratosTransformados = {}
  for (let tipo in contratos) {
    contratosTransformados[tipo] = transformarContratoQuestao(transformar, contratos[tipo])
  }
  return contratosTransformados
}
