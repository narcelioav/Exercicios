const mensagens = [
  { from: "diego", to: "todos", texto: "e ae galera!" },
  { from: "ana", to: "diego", texto: "e ae professor!" },
  { from: "nathan", to: "diego", texto: "fala professor!" },
  { from: "gabriela", to: "todos", texto: "boa noite, pessoal!" },
  { from: "pedro", to: "todos", texto: "fala povo bonito!" },
  { from: "joão", to: "todos", texto: "opaa!" }
];

let mensagensSalvas = [];

// ---------- Altere o código somente daqui para baixo! ----------------- //

/* 
    Objetivos
    1 - Faça todas as mensagens do array 'mensagens' serem exibidas na tela. Para isso, 
        implemente a função mostrarTodasAsMensagens() usando a função 
        mostrarMensagemNaTela().

    2 - Faça com as mensagens possam ser filtradas de acordo com o nome do usuário 
        digitado no input. Para isso, apenas as mensagens enviadas ou recebidas pelo 
        usuário devem aparecer na tela. Implemente a função filtrarMensagens().

    3 - Faça com que as mensagens (somente o texto dela) exibidas na tela fiquem 
        guardadas em um array.Para isso, use a variável "mensagensSalvas" implemente 
        a função salvarMensagens() que já está associada ao botão.

    4 - [EXTRA] Obtenha as mensagens através de uma API. 
        https://6203c8d44d21c200170ba01d.mockapi.io/mensagens     
*/

function mostrarTodasAsMensagens() {
  // faz ae :)
}

function filtrarMensagens() {
  // faz ae :)
}

function salvarMensagens() {
  const lis = [...document.querySelectorAll("li")]; // pega as mensagens e converte em array
  // faz ae o resto :)

  console.log(mensagensSalvas);
}

// o parâmetro mensagem deve ser um objeto {}
function mostrarMensagemNaTela(mensagem) {
  const ul = document.querySelector("ul");
  ul.innerHTML += `
    <li><b>${mensagem.from}</b> para <b>${mensagem.to}</b>: ${mensagem.texto}</li>
  `;
}
