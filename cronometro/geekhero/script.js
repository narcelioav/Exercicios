const personagensCriados = [];

function criarPersonagem() {
    const nomeInput = document.querySelector(".codenome");
    const idSecretaInput = document.querySelector(".id-secreta");
    const poderInput = document.querySelector(".poder");
    const nacionalidadeInput = document.querySelector(".nacionalidade");

    const nome = nomeInput.Value;
    const identidadeSecreta = idSecretaInput.value;
    const poder = poderInput.value;
    const nacionalidade = nacionalidadeInput.value;

    personagensCriados.push([nome, identidadeSecreta, poder, nacionalidade]);

    renderizarPersonagens();
}

function renderizarPersonagens() {
    const container = document.querySelector(".personagens-criados");
    container.innerHTML = "";

    for (let i = 0; i < personagensCriados.length; i++) {
        const personagem = personagensCriados[i];
        
        const li = `<li>
        Nome: ${personagem[0]}<br>
        Identidade secreta: ${personagem[1]}<br>
        Poder: ${personagem[2]}<br>
        Nacionalidade: ${personagem[3]}<br>
        </li>`;

        container.innerHTML += li;
    }
}