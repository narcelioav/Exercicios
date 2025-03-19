/*const tarefas = [
  "Adicione uma tarefa no botão acima ☝️",
  "Passe o mouse na tarefa para ver o botão excluir 🗑️",
  "Clique na tarefa para marca-la como feita ✔️",
];

const prazos = [
  "hoje", 
  "amanhã", 
  "depois de amanhã"
];*/

const tarefas = [
  ["Adicione uma tarefa no botão acima ☝️", "hoje"],
  ["Passe o mouse na tarefa para ver o botão excluir 🗑️", "amanhã"],
  ["Clique na tarefa para marca-la como feita ✔️", "depois de amanhã"]
];

let tarefasPendentes = 3;

function carregaTarefasPadrao() {
  const ul = document.querySelector("ul");
  for (let i = 0; i < tarefas.length; i++) { // i = i + 1
    const tarefa = tarefas[i];
    ul.innerHTML = ul.innerHTML + `
    <li>
      <div class="btn-delete">
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <span onclick="finalizarTarefa(this)">${tarefas[0]} (${tarefa[1]})</span>
    </li>
    `;
  }
}

function finalizarTarefa(tarefaSpan) {
  const liTarefa = tarefaSpan.parentNode;
  if (liTarefa.classList.contains("finalizada")) {
    tarefasPendentes++; //tarefasPendentes = tarefasPendentes + 1;
    liTarefa.classList.remove("finalizada");
  } else {
    tarefasPendentes--; //tarefasPendentes = tarefasPendentes - 1;
    liTarefa.classList.add("finalizada");
  }

  atualizarContadorDeTarefasPendentes();
}

function finalizarTodasAsTarefas() {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    tarefa.classList.add("finalizada");
  }

  tarefasPendentes = 0;
  atualizarContadorDeTarefasPendentes();
}

function atualizarContadorDeTarefasPendentes() {
  const contador = document.querySelector(".header span");
  contador.innerHTML = `(${tarefasPendentes})`;
}

function adicionarTarefa() {
  const input = document.querySelector(".title input");
  //console.log(input.value);
  const infos = input.value.split(","); // pega o valor inserido no input

  //console.log(infos);

  //const tarefa = input.value; // tarefa e prazo

  const tarefa = infos[0]; // tarefa e prazo
  const prazo = infos[1];

  const ul = document.querySelector("ul");
  ul.innerHTML += `
    <li>
      <div class="btn-delete">
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <span onclick="finalizarTarefa(this)">${tarefa} (${prazo})</span>
    </li>
    `;

  input.value = "";
  tarefasPendentes++;
  atualizarContadorDeTarefasPendentes();
}

/* inicialização */

carregaTarefasPadrao();
atualizarContadorDeTarefasPendentes();