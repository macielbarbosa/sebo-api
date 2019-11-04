export const adicionarAclsPermitirExecucao = (permissoes, modelo) => {
  permissoes.forEach(({ principalId, properties }) => {
    properties.forEach(property => {
      modelo.settings.acls.push({
        principalId,
        property,
        accessType: 'EXECUTE',
        principalType: 'ROLE',
        permission: 'ALLOW',
      })
    })
  })
}
