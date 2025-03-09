const tarefasAFazer = [
  "Estudar",
  "Assistir Friends recitando as falas junto",
  "Ver vídeos de gatinhos até dormir",
];

const tarefasFeitas = [
  "Surtar pela primeira vez hoje",
  "Surtar pela segunda vez hoje",
  "Posição Fetal Nº 4",
  "Fazer carinho no Toninho",
];

function imprimirListaAFazer() {
  // busque o elemento da lista de tarefas a fazer
  let afazer = document.querySelector(".lista-a-fazer");
  // itere pela lista utilizando o for
  afazer.innerHTML = "";
  for (let i = 0; i < tarefasAFazer.length; i++) {
    // e adicione cada tarefa do array lista
    afazer.innerHTML += `<li>${tarefasAFazer[i]}</li>`;
    // com um novo <li>
  }
}

function imprimirListaFeito() {
  // busque o elemento da lista de tarefas feitas
  let feito = document.querySelector(".lista-feito");
  // itere pela lista utilizando o for
  feito.innerHTML = "";
  for (let i = 0; i < tarefasFeitas.length; i++) {
    // e adicione cada tarefa do array lista
    feito.innerHTML += `<li>${tarefasFeitas[i]}</li>`;
    // com um novo <li>
  }
}

imprimirListaAFazer();
imprimirListaFeito();
