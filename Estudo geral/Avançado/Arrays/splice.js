//                0       1          2          3         4
const nomes = [ 'maria', 'joão', 'eduardo', 'gabriel', 'julia'];

nomes.splice(0,0, 'luiz', 'ootavio');
const removidos = nomes.splice(-1 , 1);

console.log(nomes, removidos);