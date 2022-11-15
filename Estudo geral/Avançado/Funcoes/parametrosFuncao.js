//Palavra especial arguments sustenta todos os argumentos enviados
function funcao(a, b , c) {
let total = 0;
for (let argumento of arguments) {
    total += argumento;

}
console.log(total, a, b, c);
}


funcao( 1, 2, 3, 4, 5, 6);

//-------------

function conta(operador, acumulador, ...numeros){
for ( let numero of numeros ) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
}
console.log(acumulador);

}
conta('-',1, 2, 3, 4, 5, 6);