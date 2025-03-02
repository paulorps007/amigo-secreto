// O prcipal objetivo deste desafio é fortalecer as habilidades em lógica de programação.

listaAmigos = [] // Listo do nome de amigos que irão participar do amigo secreto.

// Funções:

function adicionarAmigo() { // Adicina o nome do amigo na lista, através do camppo adicionar.
    let nomeAmigo = document.querySelector('input');
    let valorAmigo = nomeAmigo.value.trim() 

    if (valorAmigo == '' || valorAmigo == ' ') { // verificarse a lista não está vazia.
        alert('Por favor, insira um nome válido')
        nomeAmigo.value = '';
        mensagemInicial() // 
    } else if (/\d/.test(valorAmigo)) { // Verifica se foi adicionado algum  nome na lista, caso não,emite um alerta.
        alert('Por favor, insira um nome válido(Números detectados)');
        nomeAmigo.value = ''
        mensagemInicial();
    } else {
        listaAmigos.push(valorAmigo); // Cria a lista visual.
        nomeAmigo.value = '';
        mostrarUL(); 
    }

}

function mostrarUL () { // Mostra o nome adicionado do amigo.
    let listaHTML = document.querySelector ('ul');
    const ultimoAmigo = listaAmigos[listaAmigos.length - 1];
    let li = document.createElement ('li');
    li.textContent = ultimoAmigo;
    listaHTML.appendChild (li);
}

function sortearAmigo () { // Faz o sorteio do amigo secreto.
    if (listaAmigos.length <= 1) {
        alert ('Número de Amigos Inválido, Insira 2 Ou Mais Nomes Para Continuar.');
    }
let amigoSorteado = listaAmigos [Math.floor (Math.random () * listaAmigos.length)];
console.log (amigoSorteado);
let parabensMensagem = document.querySelector ('ul');
let proximoJogoMensagem = document.querySelector ('h2');
parabensMensagem.textContent = ('Parabéns! O amigo secreto sorteado é: ' + amigoSorteado  +'' );
proximoJogoMensagem.textContent = ('Quer Realizar Outro Sorteio? Insira Os Nomes Novamente!');

}

+function resetarUl () { // Reset a lista após realizar o sorteio.
    let listaHTML = document.querySelector ('ul');
    listaHTML.innerHTML = '';
    listaAmigos = [];
}

function mensagemInicial () { // Mostra os endereços das mensagens. 
let mensagem = document.querySelector ('h1');
let mensagem2 = document.querySelector ('h2');
mensagem.textContent = 'Amigo Secreto';
mensagem2.textContent = 'Digite O Nome Dos Seus Amigos';
}