const questoes = []

const questao1 = {
  id: 'a919e574-3e15-40cf-bad2-501ec6d4de96',
  enunciado: `<p> O salário de um funcionário público é de 1.800 reais. O funcionário gasta 1/4 do
    salário com alimentação e 2/4 com outras despesas. Do que resta, usa 2/3 para o
    lazer. A quantidade de dinheiro do salário destinado ao lazer é</p>`,
  dificuldade: 2,
  tipo: 'multiplaEscolha',
  multiplaEscolha: {
    respostaCerta: 'a',
    alternativas: [
      {
        texto: '<p>150 reais</p>',
        letra: 'a',
      },
      {
        texto: '<p>450 reais</p>',
        letra: 'b',
      },
      {
        texto: '<p>600 reais</p>',
        letra: 'c',
      },
      {
        texto: '<p>300 reais</p>',
        letra: 'd',
      },
    ],
  },
}
questoes.push(questao1)

const questao2 = {
  id: '60b6dbeb-987d-49ae-b9d5-7e32537e9eb3',
  enunciado: `<p> Em relação aos componentes básicos de um computador, é correto afirmar:</p>`,
  dificuldade: 2,
  tipo: 'multiplaEscolha',
  multiplaEscolha: {
    respostaCerta: 'a',
    alternativas: [
      {
        texto:
          '<p> O disco rígido e o disquete fazem parte da memória principal. </p>',
        letra: 'a',
      },
      {
        texto:
          '<p> A memória RAM e a memória ROM são tipos de memória secundária.</p>',
        letra: 'b',
      },
      {
        texto: `<p> A memória RAM é volátil, isto é, as informações gravadas se perdem quando o
        computador é desligado</p>`,
        letra: 'c',
      },
      {
        texto: `<p>A memória cache é um tipo especial de memória ROM. </p>`,
        letra: 'd',
      },
    ],
  },
}
questoes.push(questao2)

const questao3 = {
  id: '7d401b6d-72d6-43c0-a9ee-0dd9fbcdf0ae',
  enunciado: `<p>Em relação aos elementos básicos de um sistema de computação, é correto afirmar:</p>`,
  dificuldade: 2,
  tipo: 'multiplaEscolha',
  multiplaEscolha: {
    respostaCerta: 'a',
    alternativas: [
      {
        texto: `<p> O Sistema Operacional gerencia os recursos computacionais, tornando possível a
        comunicação do software com o hardware. </p>`,
        letra: 'a',
      },
      {
        texto: `<p> O Mouse, o teclado e a impressora são periféricos de entrada. </p>`,
        letra: 'b',
      },
      {
        texto: `<p> O número de bits de um byte, depende do modelo e das características do
        processador utilizado, podendo ter 16, 32 ou mais bits. </p>`,
        letra: 'c',
      },
      {
        texto: `<p>Os aplicativos, como MS Word e MS Excel fazem parte do Sistema Operacional
        MS Windows.  </p>`,
        letra: 'd',
      },
    ],
  },
}
questoes.push(questao3)

const questao4 = {
  id: '78b04e88-81f9-4a1e-a193-a54dae91e47a',
  enunciado: `<p>No sistema operacional MS Windows, o espaço utilizado para armazenar informações
  recortadas ou copiadas é chamado de: </p>`,
  dificuldade: 2,
  tipo: 'multiplaEscolha',
  multiplaEscolha: {
    respostaCerta: 'a',
    alternativas: [
      {
        texto: `<p> O Sistema Operacional gerencia os recursos computacionais </p>`,
        letra: 'a',
      },
      {
        texto: `<p> Área de armazenamento </p>`,
        letra: 'b',
      },
      {
        texto: `<p> Área de transferência </p>`,
        letra: 'c',
      },
      {
        texto: `<p>Área de cópia </p>`,
        letra: 'd',
      },
    ],
  },
}
questoes.push(questao4)

export default questoes
