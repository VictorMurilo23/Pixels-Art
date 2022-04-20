window.onload = function () {
    document.querySelector('#preto').className = 'color selected'
}

let coiso = document.querySelector('#color-palette')
coiso.addEventListener('click', function (event) {
    if(event.target.className == 'color') {
        let coiso2 = document.querySelectorAll('.selected')
        coiso2[0].className = 'color'
        event.target.className = 'color selected'
    } else {
    }
})