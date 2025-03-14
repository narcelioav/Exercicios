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

function preencher(item, array) {
  let inner = "";
  for (let i = 0; i < array.length; i++) {
    inner = inner + `<li>${array[i]}</li>`;
  }
  item.innerHTML = inner;
}

function imprimirListaAFazer() {
  // busque o elemento da lista de tarefas a fazer
  // itere pela lista utilizando o for
  // e adicione cada tarefa do array lista
  const afazer = document.querySelector(".lista-a-fazer");
  preencher(afazer, tarefasAFazer);
  // com um novo <li>

}

function imprimirListaFeito() {
  // busque o elemento da lista de tarefas feitas
  // itere pela lista utilizando o for
  // e adicione cada tarefa do array lista
  let feito = document.querySelector(".lista-feito");
  preencher(feito, tarefasFeitas);
  // com um novo <li>

}

imprimirListaAFazer();
imprimirListaFeito();
