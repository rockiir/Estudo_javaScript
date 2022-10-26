const frutas = ['Pera', 'Uva', 'Maça'];
//lê indices ou chaves do obj
for (let indice in frutas) {
    console.log(indice);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave);

    //   console.log(pessoa['nome']);
}