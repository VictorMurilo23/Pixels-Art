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

let button = document.querySelector('#clear-board')
button.addEventListener('click', function () {
    let coiso = document.querySelectorAll('.pixel')
    for(let index = 0; index < coiso.length; index += 1) {
        let atual = coiso[index]
        atual.style.backgroundColor = 'white'
    }
})