function mostrarHora(){
    let data =  new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
    function funcaDoInterval(){
        console.log(mostrarHora());

}

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('olá mundo')
}, 5000);
