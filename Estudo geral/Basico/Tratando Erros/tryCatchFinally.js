

/*
try {
    //É executado quando não há erros
} catch (e) {
    //É executado quando há erros

} finally {

    //é sempre executado

}
*/


function retornaHora(data) {
    if(data && !(data instanceof Date)) {
throw new TypeError('Esperando instância de Date')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
}
try {
    
    const data = new Date('01-01-1970 12:00:00');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {

} finally {
    console.log('Bom dia');
}



