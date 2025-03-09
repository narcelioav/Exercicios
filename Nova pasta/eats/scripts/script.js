let prato = null;
let pratoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;

let contadorProdutos = 0;

function selecionarPrato(div, descricao, preco) {
    /*
    // desmarcar produto selecionado
    const pratoSelecionado = document.querySelector(".prato .selecionado");

    // null - Desmarcar
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }
*/
    // Abstrair
    desmarcarProduto('prato');

    // Marca
    div.classList.add("selecionado");
    //alert(descricao);
    //alert(preco);
    //envia para fora da função
    prato = descricao;
    pratoPreco = preco;
    contadorProdutos++;

    liberarFechamento();
}

function selecionarBebida(div, descricao, preco) {
    /*
    const bebidaSelecionada = document.querySelector(".bebida .selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    */
    // Abstrair
    desmarcarProduto('bebida');

    div.classList.add("selecionado");
    bebida = descricao;
    bebidaPreco = preco;
    contadorProdutos++;

    liberarFechamento();
}

function selecionarSobremesa(div, descricao, preco) {
    /*
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }
    */
    // Abstrair
    desmarcarProduto('sobremesa');

    div.classList.add("selecionado");
    sobremesa = descricao;
    sobremesaPreco = preco;
    contadorProdutos++;

    liberarFechamento();
}

function liberarFechamento() {
    const botao = document.querySelector("footer button");
    if (contadorProdutos === 3) {
        botao.disabled = false;
        botao.innerHTML = "Fechar pedido";
        botao.classList.add("liberado");
    } else {
        botao.disabled = true;
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido.";
        botao.classList.remove("liberado");
    }
}

function desmarcarProduto(produto) {
    const produtoSelecionado = document.querySelector(`.${produto} .selecionado`);
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
        contadorProdutos--;
    }
}

function fecharPedido() {
    //alert("fechaei o pedido, so alegria!");
    const linkDaMensagem = montaMensagemWhatsApp();
    window.open(linkDaMensagem, '_blank').focus();
}


function revisarPedido() {
    document.querySelector(".confirmacao").classList.remove("escondido");

    document.querySelector(".pratoEscolhido").innerHTML = prato;
    document.querySelector(".pratoEscolhidoPreco").innerHTML = `R$ ${pratoPreco.toFixed(2)}`;
    document.querySelector(".bebidaEscolhida").innerHTML = bebida;
    document.querySelector(".bebidaEscolhidaPreco").innerHTML = `R$ ${bebidaPreco.toFixed(2)}`;
    document.querySelector(".sobremesaEscolhida").innerHTML = sobremesa;
    document.querySelector(".sobremesaEscolhidaPreco").innerHTML = `R$ ${sobremesaPreco.toFixed(2)}`

    document.querySelector(".totalPreco").innerHTML = `R$ ${(pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2)}`
}

function fecharPedido() {
    window.open(montaMensagemWhatsApp(), '_blank').focus();
}

function refazerPedido() {
    document.querySelector(".confirmacao").classList.add("escondido");
}


function montaMensagemWhatsApp() {
    const numero = "5585999941985";
    const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);
    let mensagem = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${prato}\n
        - Bebida: ${bebida}\n
        - Sobremesa: ${sobremesa}\n
        Total: R$ ${total}
    `;

    mensagem = encodeURIComponent(mensagem);
    return `https://wa.me/${numero}?text=${mensagem}`;
}
