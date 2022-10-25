const numeros = [1000, 2000, 3000, 4000, 5000 , 6000, 7000, 8000, 9000];
const [um, ,três, , cinco, ...outros] =numeros;
console.log(um, três, cinco, outros)
const numeros2 = [
    [0000, 1000, 2000],//indice 0 sub 0  1 2
    [3000, 4000, 5000],//indice 1 sub 0  1 2
    [6000, 7000, 8000],//indice 2 sub 0  1 2
];
console.log(numeros2[1][2]);



