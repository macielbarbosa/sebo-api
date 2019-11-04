import app from 'server/server'
import { getTurmasRecentes } from '../turma/getTurmasRecentes'

jest.mock('server/server', () => ({
  models: {
    Turma: {
      find: jest.fn().mockReturnValue([
        {
          id: '12ee798b-895c-4338-bfa2-e759c08b65a4',
          usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
          isDeleted: false,
          nome: 'Disciplina de Docencia',
          ano: 2019,
          periodo: 2,
          numero: '1A',
          alunos: [
            {
              nome: 'João',
              matricula: 2019120430,
              email: 'joao@ufrn.br',
              id: 'de6576ce-1018-4014-8b85-652830b8f635',
            },
            {
              nome: 'Maria',
              matricula: 2019430121,
              email: 'maria@ufrn.br',
              id: '0d6a864e-8af0-4b4c-997c-533c6889c331',
            },
          ],
          metadados: {
            professor: 'Docente',
          },
          dataCadastro: '2019-07-24T15:51:48.237Z',
          dataUltimaAlteracao: '2019-07-24T15:51:48.237Z',
        },
        {
          id: '08dafc0c-2ebf-4ee7-9dd2-c5f1a1e14f26',
          usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
          isDeleted: false,
          nome: 'Matemática básica',
          ano: 2019,
          periodo: 2,
          numero: '1D',
          alunos: [
            {
              nome: 'Carlos',
              matricula: 2005007,
              email: 'carlos@ufrn.br',
              id: '850b6dda-67f0-46fd-9e75-34b634994cce',
            },
            {
              nome: 'Felipe',
              matricula: 2005006,
              email: 'felipe@ufrn.br',
              id: 'a9cca3fb-4af3-44fe-9aa4-da73e59bfcfe',
            },
            {
              nome: 'Gabriela',
              matricula: 2005005,
              email: 'gabriela@ufrn.br',
              id: 'bfce996c-ca32-4582-9506-0ebfadf92742',
            },
            {
              nome: 'Sara',
              matricula: 2005001,
              email: 'sara@ufrn.br',
              id: '9152ad23-11ba-4740-970e-34707dd047f9',
            },
          ],
          metadados: {
            professor: 'Docente',
          },
          dataCadastro: '2019-08-13T20:17:39.420Z',
          dataUltimaAlteracao: '2019-08-13T20:17:39.420Z',
        },
        {
          id: '445435dc-12ac-441e-a2cc-7eec56a970ba',
          usuarioId: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
          isDeleted: false,
          nome: 'Língua Portuguesa',
          ano: 2019,
          periodo: 2,
          numero: '1C',
          alunos: [
            {
              nome: 'Prometeu',
              matricula: 200001,
              email: 'prometeu@ufrn.br',
              id: '644b7fe1-d8fe-4b34-bdc4-5b69fc0d4c23',
            },
            {
              nome: 'Morpheus',
              matricula: 200002,
              email: 'morpheus@ufrn.br',
              id: '644b7fe1-d8fe-4b34-bdc4-5b69fc0d4c23',
            },
          ],
          metadados: {
            professor: 'Docente',
          },
          dataCadastro: '2019-08-21T18:12:36.249Z',
          dataUltimaAlteracao: '2019-08-21T18:12:36.249Z',
        },
      ]),
    },
  },
}))

describe('Busca de participantes por turma', () => {
  test('Busca as turmas recentes do usuário Docente', () => {
    const id = 'dccc93c2-41db-4aa8-a415-f4712e9fce10'
    const filter = ''
    const cb = jest.fn()

    getTurmasRecentes(id, filter, cb)

    expect(app.models.Turma.find).toHaveBeenCalledTimes(1)
    expect(app.models.Turma.find.mock.calls[0][1]).toEqual(expect.any(Function))
  })
})
