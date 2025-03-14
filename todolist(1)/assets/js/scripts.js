let tarefasPendentes = 3;
const tarefas = [
  "Adicione uma tarefa no botão acima ☝️",
  "Passe o mouse na tarefa para ver o botão excluir 🗑️",
  "Clique na tarefa para marca-la como feita ✔️",
  "Mais uma tarefinha maneira :)",
  "Ainda mais uma!"
];

function carregaTarefasPadrao() {
  const ul = document.querySelector("ul");
  for(let i = 0; i < tarefas.length; i++) { // i = i + 1
    ul.innerHTML = ul.innerHTML + `
    <li>
      <div class="btn-delete">
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <span onclick="finalizarTarefa(this)">${tarefas[i]}</span>
    </li>
    `
  }
}

function finalizarTarefa(tarefaSpan) {
  const liTarefa = tarefaSpan.parentNode;
  if(liTarefa.classList.contains("finalizada")) {
    tarefasPendentes++; //tarefasPendentes = tarefasPendentes + 1;
    liTarefa.classList.remove("finalizada");
  } else {
    tarefasPendentes--; //tarefasPendentes = tarefasPendentes - 1;
    liTarefa.classList.add("finalizada");
  }
  
  atualizarContadorDeTarefasPendentes();
}

function finalizarTodasAsTarefas(){
  const tarefas = document.querySelectorAll("li");
  for(let i = 0; i < tarefas.length; i++) {
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


carregaTarefasPadrao();