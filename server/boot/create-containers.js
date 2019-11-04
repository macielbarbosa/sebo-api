const CONTAINERS = ['audio', 'video', 'image']

export default function createContainers({ models: { Armazenamento } }) {
  Armazenamento.getContainers((error, containers) => {
    if (error) console.error('Erro ao requisitar os containers de armazenamento')
    const containersExistentes = containers.map(container => container.name)
    const containersInexistentes = CONTAINERS.filter(container => !containersExistentes.includes(container))
    const criar = name => {
      Armazenamento.createContainer({ name }, error => {
        if (error) console.error(`Erro ao criar o container ${name}`)
      })
    }
    containersInexistentes.forEach(container => criar(container))
  })
}
