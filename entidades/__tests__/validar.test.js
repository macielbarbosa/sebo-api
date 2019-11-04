import { validar } from 'entidades/validar'

import { contratoNull } from '../__func__/contratoNull'
import { contratoVazio } from '../__func__/contratoVazio'
// import { contratoSimplesDadosCertos } from '../__func__/contratoSimplesDadosCertos'
// import { contratoSimpleDadosErrados } from '../__func__/contratoSimpleDadosErrados'
// import { contratoSimplesSemNenhumDado } from '../__func__/contratoSimplesSemNenhumDado'
// import { contratoVariosCerto } from '../__func__/contratoVariosCerto'
// import { contratoVariosTresCamposErrados } from '../__func__/contratoVariosTresCamposErrados'
// import { contratoVariosUmCampoErrado } from '../__func__/contratoVariosUmCampoErrado'
// import { contratoVariosCamposErradosVariosErros } from '../__func__/contratoVariosCamposErradosVariosErros'

// import { validarContratoSimples } from '../__mocks__/validarContratoSimples'
// import { validarContratoVariosCampos } from '../__mocks__/validarContratoVariosCampos'

describe('Entidades validar', () => {
  test('Se receber um contrato null ou undentified, não valida com sucesso.', contratoNull(validar))
  test('Se receber um contrato vazio, valida com sucesso.', contratoVazio(validar))
  // describe('Recebendo um contrato com um campo.', () => {
  //   const validarContrato = validarContratoSimples(validar)
  //   test('Rebendo os dados certos', contratoSimplesDadosCertos(validarContrato))
  //   test(
  //     'Rebendo os dados errados',
  //     contratoSimpleDadosErrados(validarContrato)
  //   )
  //   test(
  //     'Sem receber nenhum dado',
  //     contratoSimplesSemNenhumDado(validarContrato)
  //   )
  // })
  // describe('Recebendo um contrato com vários campos.', () => {
  //   const validarContrato = validarContratoVariosCampos(validar)
  //   test('Rebendo os dados certos', contratoVariosCerto(validarContrato))
  //   test(
  //     'Rebendo um campo errado',
  //     contratoVariosUmCampoErrado(validarContrato)
  //   )
  //   test(
  //     'Rebendo vários campos errados',
  //     contratoVariosTresCamposErrados(validarContrato)
  //   )
  //   test(
  //     'Rebendo vários campos errados, e com multiplos erros em um campo',
  //     contratoVariosCamposErradosVariosErros(validarContrato)
  //   )
  // })
})
