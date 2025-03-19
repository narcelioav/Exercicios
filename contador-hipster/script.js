let contador = 0;
let idInterval;
function contar() {
    contador = prompt("Digite quantos segundos");
    idInterval = setInterval(decrementaContador, 1000);
}

function decrementaContador() {
    contador--;
    document.querySelector(".contador").innerHTML = contador;
    if (contador === 0) {
        clearInterval(idInterval);
        alert("Hora da janta!");
    }

}