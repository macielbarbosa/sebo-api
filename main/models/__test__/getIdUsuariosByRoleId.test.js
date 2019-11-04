import { getIdUsariosByRoleId } from 'main/models/usuario/getIdUsariosByRoleId'

jest.mock('server/server', () => ({
  models: {
    Role: {
      findOne: jest.fn().mockReturnValue({ id: 1 }),
    },
    RoleMapping: {
      find: jest.fn().mockReturnValue([{ principalId: 2 }, { principalId: 3 }]),
    },
  },
}))

test('chama o método count e retorna um número', async () => {
  expect(await getIdUsariosByRoleId(10000)).toEqual([2, 3])
})
