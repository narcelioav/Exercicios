// prompt para entradas (3)
// jogar na tela as entradas


function adicionarTarefas() {
  const tarefas = [];
  const qtdTarefas = parseInt(prompt("quantas atvs você fará hoje?")); // 3

  let contagem = 0;
  while(contagem < qtdTarefas) {
    const tarefa = prompt(`Qual é a tarefa? ${contagem + 1}`);
    tarefas.push(tarefa);
    contagem = contagem + 1;
  }

  // outra forma de fazer a mesma coisa que o while
	for(let contador = 0; contador < qtdTarefas; contador = contador + 1) {
		const lista = document.querySelector('ul');
		lista.innerHTML += `<li>${tarefas[contador]}</li>`;
	}
}

adicionarTarefas();