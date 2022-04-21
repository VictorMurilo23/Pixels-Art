window.onload = function () { // Quando a página carregar, a cor selecionada será preto e outras cores serão geradas aleatoriamente.
    document.querySelector('#preto').className = 'color selected'
    document.querySelector('#cor2').style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
    document.querySelector('#cor3').style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
    document.querySelector('#cor4').style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')'
}

// Pra selecionar a cor atual
let colorPalette = document.querySelector('#color-palette')
colorPalette.addEventListener('click', function (event) {
    if(event.target.className == 'color') {
        let colorSelected = document.querySelectorAll('.selected')
        colorSelected[0].className = 'color'
        event.target.className = 'color selected'
    } else {
    }
})

// Pra pintar os pixels
let pixelBoard = document.querySelector('#pixel-board')
pixelBoard.addEventListener('click', function (event) { // Eu consegui fazer essa função graças as dicas :D
    if (event.target.className == 'pixel') {
        let color = document.querySelector('.selected')
        const cssObj = window.getComputedStyle(color)
        event.target.style.backgroundColor = cssObj.getPropertyValue("background-color");
    } else {
    }
})

// Botão limpar
let buttonClear = document.querySelector('#clear-board')
buttonClear.addEventListener('click', function () {
    let pixel = document.querySelectorAll('.pixel')
    for(let index = 0; index < pixel.length; index += 1) {
        let atual = pixel[index]
        atual.style.backgroundColor = 'white'
    }
})

// Gerar um novo quadro de pixels
let button = document.querySelector('#generate-board')
button.addEventListener('click', function () { 
    let tamanhoQuadro = document.querySelector('#board-size').value
    if (tamanhoQuadro === '') {
        alert('Board inválido!')
    }

    function verificarNumero() {
        if (tamanhoQuadro < 5) {
            tamanhoQuadro = 5
        } else if (tamanhoQuadro > 50) {
            tamanhoQuadro = 50
        }
    }
    verificarNumero()
    
    if (tamanhoQuadro >= 5 && tamanhoQuadro <= 50) {
        let pixelBoardAtual = document.querySelector('#pixel-board').children
        if (pixelBoardAtual.length > 0) { // vai apagar o board anterior
            for (let index2 = 0; pixelBoardAtual.length > 0; index2 += 1) {
                pixelBoardAtual[0].remove()
            } 
        }
        let pixelBoard = document.querySelector('#pixel-board')
        let linha = 1
        for(let index = 1;index < tamanhoQuadro ** 2; index += 1) {
            if (linha <= tamanhoQuadro) {
                let div = document.createElement('div')
                div.className = 'pixel'
                pixelBoard.appendChild(div)
                linha += 1
            } else if (linha > tamanhoQuadro) {
                let br = document.createElement('br')
                pixelBoard.appendChild(br)
                linha = 1
            }
            
        }
        let linha2 = 0
        for (let index = 1;index <= tamanhoQuadro;index += 1) {
            if (linha2 < tamanhoQuadro) {
                let div = document.createElement('div')
                div.className = 'pixel'
                pixelBoard.appendChild(div)
                linha2 += 1
                console.log(linha2)
            } else if (linha2 > tamanhoQuadro) {
                let br = document.createElement('br')
                pixelBoard.appendChild(br)
                linha2 = 0
            }
        }
    } else {
        alert('Insira um valor entre 5 e 50!')
    }

})