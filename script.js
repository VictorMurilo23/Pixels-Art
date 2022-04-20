window.onload = function () {
    document.querySelector('#preto').className = 'color selected'
}

let colorPalette = document.querySelector('#color-palette')
colorPalette.addEventListener('click', function (event) {
    if(event.target.className == 'color') {
        let colorSelected = document.querySelectorAll('.selected')
        colorSelected[0].className = 'color'
        event.target.className = 'color selected'
    } else {
    }
})

let pixelBoard = document.querySelector('#pixel-board')
pixelBoard.addEventListener('click', function (event) { // Eu consegui fazer essa função graças as dicas :D
    if (event.target.className == 'pixel') {
        let color = document.querySelector('.selected')
        const cssObj = window.getComputedStyle(color)
        event.target.style.backgroundColor = cssObj.getPropertyValue("background-color");
    } else {
    }
})

let buttonClear = document.querySelector('#clear-board')
buttonClear.addEventListener('click', function () {
    let pixel = document.querySelectorAll('.pixel')
    for(let index = 0; index < pixel.length; index += 1) {
        let atual = pixel[index]
        atual.style.backgroundColor = 'white'
    }
})

// wdah9oawhduawgdoiywagdywayfdouywafduy
let button = document.querySelector('#generate-board')
button.addEventListener('click', function () { 
    let coiso2 = document.querySelector('#board-size').value
    if (coiso2 === '') {
        alert('Board inválido!')
    } else if (coiso2 >= 5 && coiso2 <= 50) {
        let pixelBoardAtual = document.querySelector('#pixel-board').children
        if (pixelBoardAtual.length > 0) {
            for (let index2 = 0; pixelBoardAtual.length > 0; index2 += 1) {
                pixelBoardAtual[0].remove()
            } 
        }
        let pixelBoard = document.querySelector('#pixel-board')
        let linha = 1
        for(let index = 1;index < coiso2 ** 2; index += 1) {
            if (linha <= coiso2) {
                let div = document.createElement('div')
                div.className = 'pixel'
                pixelBoard.appendChild(div)
                linha += 1
            } else if (linha > coiso2) {
                let br = document.createElement('br')
                pixelBoard.appendChild(br)
                linha = 1
            }
            
        }
        let linha2 = 0
        for (let index = 1;index <= coiso2;index += 1) {
            if (linha2 < coiso2) {
                let div = document.createElement('div')
                div.className = 'pixel'
                pixelBoard.appendChild(div)
                linha2 += 1
                console.log(linha2)
            } else if (linha2 > coiso2) {
                let br = document.createElement('br')
                pixelBoard.appendChild(br)
                linha2 = 0
            }
        }
    } else {
        alert('Insira um valor entre 5 e 50!')
    }

})