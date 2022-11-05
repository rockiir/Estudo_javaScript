//Palavra especial arguments sustenta todos os argumentos enviados
function funcao(a, b , c) {
let total = 0;
for (let argumento of arguments) {
    total += argumento;

}
console.log(total, a, b, c);
}


funcao( 1, 12, 3);

