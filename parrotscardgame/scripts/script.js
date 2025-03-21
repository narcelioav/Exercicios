// Variavel de controle
const minimoCartas = 4;
const maximoCartas = 18;

const backFace = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot", "christmasparrot", "mustacheparrot", "partyparrot"];

let baralho = [];
let primeiraCarta = null;
let segundaCarta = null;
let qtdJogadas = 0;
let tempoDecorrido = 0;
let intervalo = null;

let podeClicar = true; // Variável de controle para evitar cliques extras

/**      Area de funções                */

function isQtdCartasValida() {
    // par
    const isPar = (qtdCartas % 2 === 0);

    // entre (incluido) 4 e 14
    const isNumeroValido = qtdCartas >= minimoCartas && qtdCartas <= maximoCartas;

    return isPar && isNumeroValido; // Não
}

/*function adicionarCartas() {
    for (let i = 0; i < isQtdCartasValida(); i++) {
        const carta = document.querySelector(".container");
        carta.innerHTML += `
          <div class="card" onclick="virarCarta(this)">
                <div class="front-face face">
                    <img class="card-image-front" src="gifs/front.png" alt="Parrot card front">
                </div>
                <div class="back-face face">
                    <img class="card-image-back" src="${backFace[i]}" alt="Parrot card back">
                </div>
            </div>
        `;
    }
}

adicionarCartas();*/

//organizar as cartas em ordem aleatoria
function criarBaralhoCartasAleatorias() {
    for (let i = 0; i < qtdCartas / 2; i++) {
        const carta = criarCartas(i);
        baralho.push(carta);
        baralho.push(carta);
    }

    baralho.sort(comparador);
}

function comparador() {
    return Math.random() - 0.5;
}

function criarCartas(indiceCarta) {
    const papagaio = backFace[indiceCarta];
    return `
        <div class="card" onclick="virarCarta(this)">
            <div class="front-face face">
                <img class="card-image-front" src="gifs/front.png" alt="Parrot card front">
            </div>
            <div class="back-face face">
                <img class="card-image-back" src="gifs/${papagaio}.gif" alt="Parrot card back">
            </div>
        </div>
    `;
}

/*function isCartaValida(div){
    return !div.classList.contains("virada") || !div.classList.contains("finalizada");
}*/

function virarCarta(elemento) {
    //if (podeClicar === true || elemento.classList.contains("virada") === true) { 
    if (podeClicar === true && elemento.classList.contains("virada") === false) { // Bloqueia cliques extras
        //const card = document.querySelector(".card");
        elemento.classList.add("virada"); // Alterna a classe que faz a rotação
        if (primeiraCarta === null) {
            primeiraCarta = elemento;
        } else {
            segundaCarta = elemento;
            podeClicar = false; // Bloqueia cliques adicionais até a comparação terminar
            // verificar se são iguais
            qtdJogadas += 1;
            validarIgualdadeDasCartas();
        }
    }

}

function validarIgualdadeDasCartas() {
    if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
        primeiraCarta.classList.add("finalizada");
        segundaCarta.classList.add("finalizada");
        resetarCartas();
        setTimeout(verificarFimDeJogo, 500);
    } else {
        setTimeout(desvirarCartas, 1000);
    }
}

function desvirarCartas() {
    primeiraCarta.classList.remove("virada");
    segundaCarta.classList.remove("virada");
    resetarCartas();
}

function resetarCartas() {
    primeiraCarta = null;
    segundaCarta = null;
    podeClicar = true; // Libera os cliques novamente
}

function verificarFimDeJogo() {
    const cartasFinalizadas = document.querySelectorAll(".finalizada");
    if (cartasFinalizadas.length === qtdCartas) {
        clearInterval
        alert(`ganhou! você é fera! ganhou em ${qtdJogadas} jogadas, e em ${tempoDecorrido} segundos.`);

        recomecarJogo();
    }
}

function recomecarJogo() {
    const resposta = prompt("Reiniciar o jogo? s ou n");
    if (resposta === "s") {
        window.location.reload();
    }
}

function renderizarCartasNaTela() {
    const container = document.querySelector(".container");
    //para cada carta do baralho, seja inserida na tela
    for (let i = 0; i < baralho.length; i++) {
        const carta = baralho[i];
        container.innerHTML = container.innerHTML + carta;
    }
}

function cronometrar() {
    tempoDecorrido += 1;
    document.querySelector(".tempo").innerHTML = tempoDecorrido;
}

/********     Inicio do jogo            */

/*const qtdCartas = prompt("Quantas cartas você quer jogar, entre 4 a 14?") * 1;*/

let qtdCartas = parseInt(prompt(`Quantas cartas você quer jogar? entre ${minimoCartas} e ${maximoCartas}`));

/*while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
    qtdCartas = parseInt(prompt("É necessario escolher um numero par entre 4 e 14"));
}*/

while (isQtdCartasValida() === false) {
    qtdCartas = parseInt(prompt(`É necessario escolher um numero par entre ${minimoCartas} e ${maximoCartas}`));
}

/**    executando as funções      */

intervalo = setInterval(cronometrar, 1000);
criarBaralhoCartasAleatorias();
renderizarCartasNaTela();