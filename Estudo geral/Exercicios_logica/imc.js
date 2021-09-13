//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

var imc, altura=1.80, peso=70;

imc = peso / (altura * altura);

if (imc < 16.9) {
    return 'Muito abaixo do peso'
}
else if (imc > 17 & imc < 18.4){
    return 'Abaixo do peso'
}

else if (imc > 18.5 & imc < 24.9) {
    return 'Peso normal	'
}
else if (imc > 25 & imc < 29.9) {
    return 'Acima do peso'
}
else if (imc > 30) {
    return 'Obesidade '
}

console.log (imc)