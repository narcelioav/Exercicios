function ligar() {
  let lampada = document.querySelector(".lampada");

  lampada.classList.add("acesa");
}

function desligar() {
  let lampada = document.querySelector(".lampada");

  lampada.classList.remove("acesa");
}

function ligaDesliga() {
  let lampada = document.querySelector(".lampada");

  lampada.classList.toggle("acesa");
}
