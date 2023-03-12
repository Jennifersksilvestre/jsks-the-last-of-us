//passo 1 - dar um jeiro de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//passo 2 - dar um jeito de identificar o clique do usuario no botao

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {


        //passo 3 - desmarcar o botao marcado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botao clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5 - escoder a imgem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imgem de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
        
    })

})