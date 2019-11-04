import {
  _countInstancias,
  _countProvasParaFazer,
  _countProvasJaRespondidas,
  _countInstanciasComVistaHabilitada,
  _getUltimas10InstanciasConcluidas,
  getEstatisticasInstanciaByIdDiscente,
} from 'main/models/usuario/estatisticasProvasDiscente'

import { enumStatusInstanciamento } from 'entidades/instanciamento'

import { models } from 'server/server'

jest.mock('server/server', () => ({
  models: {
    Instanciamento: {
      count: jest.fn().mockReturnValue(2),
      find: jest.fn().mockReturnValue({ prova: '' }),
    },
  },
}))

describe('Estatisticas para discentes', () => {
  test('chama o método count e retorna um número', async () => {
    expect(await _countInstancias({})).toEqual(2)
  })

  test('conta as provas já respondidas', async () => {
    const candidatoId = 1

    const filtro = {
      status: enumStatusInstanciamento.concluida,
      isDeleted: false,
      candidatoId,
    }

    const spy = jest.spyOn(models.Instanciamento, 'count')

    const result = await _countProvasJaRespondidas(candidatoId)

    expect(result).toEqual(2)
    expect(spy).toHaveBeenCalledWith(filtro)
  })

  test('conta as provas para fazer', async () => {
    const mockedDate = new Date(2017, 11, 10)
    const originalDate = Date

    global.Date = jest.fn(() => mockedDate)
    global.Date.setDate = originalDate.setDate

    const candidatoId = 1

    const filtro = {
      or: [{ status: enumStatusInstanciamento.naoIniciada }, { status: enumStatusInstanciamento.emExecucao }],
      'virtual.dataTerminoProva': { gte: new Date().toISOString() },
      isDeleted: false,
      candidatoId,
    }

    const spy = jest.spyOn(models.Instanciamento, 'count')

    const result = await _countProvasParaFazer(candidatoId)

    expect(result).toEqual(2)
    expect(spy).toHaveBeenCalledWith(filtro)
  })

  test('chama o instanciamento com o filtro de prova habilitada', async () => {
    const candidatoId = 1

    const filtro = {
      'prova.vistaProvaHabilitada': true,
      isDeleted: false,
      candidatoId,
    }

    const spy = jest.spyOn(models.Instanciamento, 'count')

    const result = await _countInstanciasComVistaHabilitada(candidatoId)

    expect(result).toEqual(2)
    expect(spy).toHaveBeenCalledWith(filtro)
  })

  test('chama o instanciamento com o filtro das 10 últimas instancias concluidas', async () => {
    const candidatoId = 1

    const filtro = {
      where: { and: [{ status: enumStatusInstanciamento.concluida }, { notasPublicadas: true }, { candidatoId }] },
      fields: { id: true, dataUltimaAlteracao: true, status: true, prova: true },
      order: 'dataUltimaAlteracao DESC',
      limit: 10,
    }

    const spy = jest.spyOn(models.Instanciamento, 'find')

    const result = await _getUltimas10InstanciasConcluidas(candidatoId)

    expect(result).toEqual({ prova: '' })
    expect(spy).toHaveBeenCalledWith(filtro)
  })

  test('busca { provasParaFazer, provasJaRespondidas, provasComVistaHabilitada, ultimas10Provas } ', async () => {
    const candidatoId = 1

    const result = await getEstatisticasInstanciaByIdDiscente(candidatoId)

    expect(result).toEqual({
      provasParaFazer: 2,
      provasJaRespondidas: 2,
      provasComVistaHabilitada: 2,
      ultimas10Provas: { prova: '' },
    })
  })
})
