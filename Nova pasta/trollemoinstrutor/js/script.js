function inserirReceita() {
    const titulo = document.querySelector(".titulo-receita").value;
    const ingredientes = document.querySelector(".ingredientes-receita").value;
    const preparo = document.querySelector(".preparo-receita").value;

    const promessa = axios.post(
        "https://mock-api.driven.com.br/api/v2/tastecamp/receitas",
        {
            titulo: titulo,
            ingredientes: ingredientes,
            preparo: preparo
        }
    );

    promessa.then(receitaCadastradaComSucesso);
    //promessa.catch(deuErro);
    promessa.catch(erroAoCadastrarReceita);
}

/* function deuErro(erro) {
    let statusCode = erro.response.status;
    statusCode = parseInt(statusCode);

    const imagem = document.querySelector(".imagem-erro");
    if (statusCode === 409) {
        imagem.innerHTML = `
        <img src="./img/409.jpg" />`;
    } else if (statusCode === 422) {
        imagem.innerHTML = `
        <img src="./img/422.jpg" />`;
    } else if (statusCode === 404) {
        imagem.innerHTML = `
        <img src="./img/404.jpg" />`;
    }
}

function receitaCadastradaComSucesso() {
    alert("Receita cadastrada com sucesso!");
} */

function receitaCadastradaComSucesso(sucesso) {
    const div = document.querySelector(".imagem-erro");
    div.innerHTML = "";
}

function erroAoCadastrarReceita(erro) {
    const div = document.querySelector(".imagem-erro");
    div.innerHTML = `<img src="img/${erro.response.status}.jpg">`;
}

// onclick no botao
// catch()
// erro.response.status
// colocar imagem correspondente no imagem-erro (setAttribute)