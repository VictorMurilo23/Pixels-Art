// Pra selecionar a cor atual
const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', (e) => {
  if (e.target.className === 'color') {
    const colorSelected = document.querySelectorAll('.selected');
    colorSelected[0].className = 'color';
    e.target.className = 'color selected';
  }
});

// Pra pintar os pixels
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (e) => {
  // Eu consegui fazer essa função graças as dicas :D
  if (e.target.className === 'pixel') {
    const color = document.querySelector('.selected');
    const cssObj = window.getComputedStyle(color);
    e.target.style.backgroundColor = cssObj.getPropertyValue('background-color');
  }
});

// Botão limpar
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    const atual = pixel[index];
    atual.style.backgroundColor = 'white';
  }
});

function verificarNumero(value) {
  if (value < 5) {
    return 5;
  }
  if (value > 50) {
    return 50;
  }
  return value;
}

function apagaQuadroAnterior() {
  const board = document.querySelector('#pixel-board');
  const pixelBoardAtual = board.children;
  if (pixelBoardAtual.length > 0) {
    // vai apagar o board anterior
    for (let index2 = 0; pixelBoardAtual.length > 0; index2 += 1) {
      pixelBoardAtual[0].remove();
    }
  }
}

function criaQuadroNovo(tamanhoQuadro) {
  let linha = 1;
  for (let index = 0; index < tamanhoQuadro ** 2; index += 1) {
    if (linha <= tamanhoQuadro) {
      const div = document.createElement('div');
      div.className = 'pixel';
      pixelBoard.appendChild(div);
      linha += 1;
    } if (linha > tamanhoQuadro) {
      const br = document.createElement('br');
      pixelBoard.appendChild(br);
      linha = 1;
    }
  }
}

// Gerar um novo quadro de pixels
const button = document.querySelector('#generate-board');
button.addEventListener('click', () => {
  const valueInput = document.querySelector('#board-size').value;
  if (valueInput === '') {
    alert('Board inválido!');
  }
  const tamanhoQuadro = verificarNumero(valueInput);

  if (tamanhoQuadro >= 5 && tamanhoQuadro <= 50) {
    apagaQuadroAnterior();
    criaQuadroNovo(tamanhoQuadro);
  }
});

window.onload = () => {
  criaQuadroNovo(5);
  // Quando a página carregar, a cor selecionada será preto e outras cores serão geradas aleatoriamente.
  document.querySelector('#preto').className = 'color selected';
  document.querySelector('#cor2').style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.querySelector('#cor3').style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.querySelector('#cor4').style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};
