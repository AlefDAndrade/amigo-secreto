let participantes = document.getElementById('lista-amigos');
let listaNomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (listaNomes.includes(nome)){
       return alert('Esse nome já está no sorteio. Em caso de nomes iguais, coloque o sobrenome');
    }
    if (nome.trim() == "") {
        return alert('nome invalido');
    }
    listaNomes.push(nome)
    participantes.textContent = listaNomes;
    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    // sortear os participantes
    document.getElementById('lista-sorteio').innerHTML = '';
    if (listaNomes.length < 3) {
        return alert('É nescessario um numero par de participantes');
    } else {
        let resultado = document.getElementById('lista-sorteio');
        let listaSorteados = [];
        for (var i = 0; i < listaNomes.length; i++) {
            let idS = Math.floor(Math.random() * listaNomes.length);
            if (i != listaNomes.length - 1) {
                while (listaSorteados.includes(listaNomes[idS]) || listaNomes[i] == listaNomes[idS]) {
                    idS = Math.floor(Math.random() * listaNomes.length);
                    }
                resultado.innerHTML += `<p>${listaNomes[i]} --> ${listaNomes[idS]}</p>`;
                listaSorteados.push(listaNomes[idS]);
            } else {
                    while (listaSorteados.includes(listaNomes[idS])) {
                        idS = Math.floor(Math.random() * listaNomes.length);
                        }
                    if (listaNomes[i] == listaNomes[idS]) {
                    resultado.innerHTML += `<p>${listaNomes[i]} --> ${listaNomes[idS]}</p>`;
                    listaSorteados.push(listaNomes[idS]);
                    alert('Sorteios com numeros impares as vezes podem dar errado. POR FAVOR, FAÇA O SORTEIO NOAVAMENTE');
                } else {
                    resultado.innerHTML += `<p>${listaNomes[i]} --> ${listaNomes[idS]}</p>`;
                    listaSorteados.push(listaNomes[idS]);
                }
            }
        }
    }
}

function reiniciar()  {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    listaNomes = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    listaSorteados = [];
}


