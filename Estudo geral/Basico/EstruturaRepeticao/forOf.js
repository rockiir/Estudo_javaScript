//For classico- geralmennte com interaveis ( array ou strings)
//For in- retorna indice ou chaves ( array,  strings ou obj)
//For for- retorna o valor em si ( array,  strings ou interaveis)


const nome =['Luiz otavio', 'joão henrique'];




/*
//----imprime cada letra do nome
for (let  i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for (let valor of nome) { //in = indice, of = valor
    console.log(valor);
}
*/


for (let i in nome) { //in = indice, of = valor
    console.log(nome[i]);
}


nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
