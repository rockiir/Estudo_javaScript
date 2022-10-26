/*console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')
*/

for (let i = 0 ; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par);
}

//tamanho do array e array com for
console.log('tamanho do array')
const frutas = ['maça', 'pera' , 'uva'];
console.log(frutas.length)

for (let o = 0; o < frutas.length; o++){
    console.log(`indice${o}`, frutas[o]);
}








