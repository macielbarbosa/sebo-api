import { JSDOM } from 'jsdom'
import base64Image from 'base64-img'

import { imagem404 } from './imagem404'

export const imagensParaBase64 = html => {
  const { document } = new JSDOM(html).window
  const imagens = document.querySelectorAll('img')
  ;[...imagens].forEach(imagem => {
    const nomeImagem = imagem.src.split('download/')[1]
    try {
      imagem.src = base64Image.base64Sync('armazenamento/image/' + nomeImagem)
    } catch (error) {
      console.error('Imagem não encontrada na conversão para base64')
      imagem.src = imagem404
    }
  })
  return document.querySelector('body').innerHTML
}
