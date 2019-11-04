import { models } from 'server/server'

export const listaInstanciasDoCandidato = (candidatoId, cb) => {
  try {
    const { Instanciamento } = models
    const filter = {
      where: {
        candidatoId: candidatoId,
        tipoAplicacao: 'virtual',
        isDeleted: false,
      },
      fields: {
        id: true,
        candidatoId: true,
        virtual: true,
        prova: true,
        status: true,
        notasPublicadas: true,
        idMatriz: true,
      },
    }
    Instanciamento.find(filter, function (err, instanciamentos) {
      if (err) return cb(err)
      instanciamentos.forEach(instancia => {
        if (instancia.notasPublicadas && instancia.prova) {
          const todasAsQuestoes = instancia.prova.grupos.reduce((prev, current) => [...prev, ...current.questoes], [])
          const somaDasQUestoes = todasAsQuestoes.reduce((prev, current) => {
            let nota = 0
            if (current.tipo === 'bloco')
              for (let questao of current.bloco.questoes) {
                nota += questao.notaQuestao !== undefined ? Number(questao.notaQuestao) : 0
              }
            else nota += current.notaQuestao !== undefined ? Number(current.notaQuestao) : 0

            return prev + nota
          }, 0)
          instancia.notaProva = somaDasQUestoes
        }
      })
      instanciamentos.forEach(limpaInstancia)
      cb(null, instanciamentos)
    })
  } catch (e) {
    cb(new Error())
  }
}

const limpaInstancia = instancia => {
  delete instancia.prova.grupos
  delete instancia.prova.template
  delete instancia.prova.tipoEmbaralhamento
  delete instancia.prova.usuarioId
  delete instancia.prova.tagIds
}
