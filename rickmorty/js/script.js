/*function buscarDados() {
  // complete a função
  const promise = axios.get("https://rickandmortyapi.com/api/character/118");
  promise.then(mostrarRespostaDoServidor);
}

function mostrarRespostaDoServidor(resposta) {
  const personagem = resposta.data;
  renderizarPersonagem(personagem);
  //console.log(resposta);
}

function renderizarPersonagem(personagem) {
  var elementoImagem = document.querySelector(".imagem-do-personagem");
  var elementoNome = document.querySelector(".nome");
  var elementoEspecie = document.querySelector(".especie");

  // completar modificando os elementos
  elementoImagem.setAttribute("src", personagem.image);
  elementoNome.innerHTML = personagem.name;
  elementoEspecie.innerHTML = personagem.species;
}*/

function buscarDados() {
  // complete a função
  const promise = axios.get("https://rickandmortyapi.com/api/character/118");
  promise.then(renderizarPersonagem);
}

function renderizarPersonagem(personagem) {
  var elementoImagem = document.querySelector(".imagem-do-personagem");
  var elementoNome = document.querySelector(".nome");
  var elementoEspecie = document.querySelector(".especie");

  // completar modificando os elementos
  elementoImagem.src = personagem.data.image;
  elementoNome.innerHTML = personagem.data.name;
  elementoEspecie.innerHTML = personagem.data.species;
}