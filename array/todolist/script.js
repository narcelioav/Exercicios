// prompt para entradas (3)
// jogar na tela as entradas

/*
//span.finalizada - class filha
function finalizarTarefa(elemento) {
  elemento.classList.add("finalizada");
}*/

//li.finalizada - aplicando na class pai
/*function finalizarTarefa(tarefaSpan) {
  const liTarefa = tarefaSpan.parentNode; 
  // esta acesando o elemento pai.
  liTarefa.classList.toggle("finalizada");
}*/

//Aplicando o contador

const tarefas = [
  "Adicione uma tarefa no botão acima ☝️",
  "Passe o mouse na tarefa para ver o botão excluir 🗑️",
  "Clique na tarefa para marca-la como feita ✔️",
  "Mais uma tarefinha maneira :)",
  "Ainda mais uma!"
];

let tarefasPendentes = tarefas.length;

function carregarTarefasPadrao() {
  const ul = document.querySelector("ul");
  for (let i = 0; i < tarefas.length; i++) {
    ul.innerHTML += `<li>
        <div class="btn-delete">
          <ion-icon name="trash-outline"></ion-icon>
        </div>
        <span onclick="finalizarTarefa(this)">${tarefas[i]}</span>
      </li>`;
  }
}

function atualizarContadorDeTarefasPendentes() {
  // atualizar a tela com o numero atual de tarefas
  const contador = document.querySelector(".header h1 span");
  contador.innerHTML = `(${tarefasPendentes})`;
}

function finalizarTarefa(tarefaSpan) {
  const liTarefa = tarefaSpan.parentNode; // esta acesando o elemento pai.
  // se a terefa foi finalizada 
  if (liTarefa.classList.contains("finalizada")) {
    //aumento 1 no contador.
    tarefasPendentes++;
    liTarefa.classList.remove("finalizada");
  } else {
    //tiro 1 no contador.
    tarefasPendentes--;
    liTarefa.classList.add("finalizada");
  }
  // atualizar a tela com o numero atual de tarefas
  /*
  const contador = document.querySelector(".header h1 span");
  contador.innerHTML = `(${tarefasPendentes})`;
  */
  atualizarContadorDeTarefasPendentes();
}


//aumento 1 no contador.
function finalizarTodasAsTarefas() {
  const tarefas = document.querySelectorAll("li");
  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    tarefa.classList.toggle("finalizada");

    if (tarefa.classList.contains("finalizada")) {
      tarefasPendentes = 0;
    } else {
      tarefasPendentes = tarefas.length;

    }
  }

  // atualizar a tela com o numero atual de tarefas
  /* Abstrair
  const contador = document.querySelector(".header h1 span");
  contador.innerHTML = `(${tarefasPendentes})`;
  */
  atualizarContadorDeTarefasPendentes();
}

carregarTarefasPadrao();
atualizarContadorDeTarefasPendentes();