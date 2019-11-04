export class Validation {
  _key
  _sucesso = true
  _erros = {}

  get erros() {
    return this._erros
  }

  set erros(erros) {
    this._setFalha()
    this._erros = erros
  }

  get sucesso() {
    return this._sucesso
  }

  set key(dados) {
    this._key = dados
  }

  _setFalha() {
    this._sucesso = false
  }

  addErros(erros) {
    if (Array.isArray(erros)) erros.forEach(err => this.addErro(err))
    else this.addErro(erros)
  }

  addErro() {
    let key, erro
    if (arguments.length === 2) {
      key = arguments[0]
      erro = arguments[1]
    } else if (arguments.length === 1) {
      if (!this._key) throw new Error('Para usar addErro com um argumento, é necessário iniciá-lo com uma key.')
      key = this._key
      erro = arguments[0]
    } else {
      throw new Error('addErro deve receber um ou dois argumentos.')
    }
    this._setFalha()
    this._getCampoErros(key).push(erro)
  }

  _getCampoErros(key) {
    if (!Array.isArray(this.erros[key])) this.erros[key] = []
    return this.erros[key]
  }
}
