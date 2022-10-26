const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    console.log('Pulei o 2')
    if (numero === 2) {
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrei o 7 , saindo....')
        break;
    }
}