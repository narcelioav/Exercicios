const relogio = document.querySelector(".relogio");
let intervalo = null;

function aumentarContagem() {
    if (parseInt(relogio.innerHTML) === 5) {
        clearInterval(intervalo);
    } else {
        relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
    }
}

// todo: como fazer a contagem acontecer de 1 em 1 segundos?
intervalo = setInterval(aumentarContagem, 1000);
console.log(intervalo);

//aumentarContagem();
//aumentarContagem();
//aumentarContagem();