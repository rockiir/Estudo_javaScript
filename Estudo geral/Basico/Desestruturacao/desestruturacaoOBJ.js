const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Pessoa',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }

};

//atribuição via desestruturação
const {nome = 'não existe', sobrenome, idade, endereco:{rua, numero}, endereco} = pessoa;//'não existe' é um valor padrão
console.log(nome, sobrenome, idade); 
console.log(rua,numero, endereco);

