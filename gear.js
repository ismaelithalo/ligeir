var centro = document.getElementById('core');
var texto = document.getElementById('fonte');
var freq

function trocaTexto () {
    if (texto.value != "")
        centro.innerText = texto.value;
}

function wpm (valor) {
    if (valor == 'x'){
        clearInterval(freq);
    }
    else
        freq = setInterval(function() {
            centro.style.display = (centro.style.display == 'none' ? 'block' : 'none');
        }, valor);
}