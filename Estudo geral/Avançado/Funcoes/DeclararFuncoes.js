// Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('oi');
}


//First-Class Objects (objetos de primeira classe)


const souUmDado = function () {
    console.log('Sou um dado')
}


souUmDado();


function executaFuncao(funcao){
    funcao();
}

//Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}


setInterval(function(){

}, 1000);