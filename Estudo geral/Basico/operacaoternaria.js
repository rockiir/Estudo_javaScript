// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';


//ambas as linhas tem a mesma função
if (pontuacaoUSuario >= 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario normal')
}

//operacao Ternaria
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
