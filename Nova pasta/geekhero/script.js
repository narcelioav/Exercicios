const personagensCriados = [];

function criarPersonagem() {
  const nomeInput = document.querySelector(".codinome");
  const idSecretaInput = document.querySelector(".id-secreta");
  const poderInput = document.querySelector(".poder");
  const nacionalidadeInput = document.querySelector(".nacionalidade");

  /*const nome = nomeInput.value;
  const identidadeSecreta = idSecretaInput.value;
  const poder = poderInput.value;
  const nacionalidade = nacionalidadeInput.value;*/

  //const idadePersonagem = 66;
  const personagem = {
    nome: nomeInput.value,
    identidadeSecreta: idSecretaInput.value,
    poder: poderInput.value,
    nacionalidade: nacionalidadeInput.value,
    //idade: idadePersonagem
  }

  /*personagensCriados.push([nome, identidadeSecreta, poder, nacionalidade]);*/

  nomeInput.value = "null";

  personagensCriados.push(personagem);

  renderizarPersonagens();
}

function renderizarPersonagens() {
  const container = document.querySelector(".personagens-criados");
  container.innerHTML = "";

  for (let i = 0; i < personagensCriados.length; i++) {
    const personagem = personagensCriados[i];

    /* Nome: ${personagem[0]}<br>
        Identidade secreta: ${personagem[1]}<br>
        Poder: ${personagem[2]}<br>
        Nacionalidade: ${personagem[3]}<br><br>*/

    const li = `
      <li>
       
        Nome: ${personagem.nome}<br>
        Identidade secreta: ${personagem.identidadeSecreta}<br>
        Poder: ${personagem.poder}<br>
        Nacionalidade: ${personagem.nacionalidade}<br><br>
      </li>
    `;

    container.innerHTML += li;
  }
}
