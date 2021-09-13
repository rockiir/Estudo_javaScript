//Vamos criar variaveis usando let, const e var, atribuir valores, identificar comportamentos e saídas quando tentarmos recuperar.

//A palavra “var” garante a variável dentro do escopo onde ela foi declarada, ou seja, pode ser acessada de qualquer ponto dentro do código
function hello() {
var world = 'Hello world';
console.log('olá mundo significa ' + world);
}

//Um variável declarada com let leva em conta, não a função onde foi criada, mas sim o bloco de código de sua origem. Isso significa que se a declararmos dentro de um if(), switch() ou for(), ela será “enxergada” apenas dentro desta parte do código, dentro deste escopo específico.
function returnNome() {

    let nome = 'Aline';

    if (nome === 'Aline') {

        let nome = 'joana';

        console.log('Dentro do if: ' + nome);

    }

    console.log('Fora do if: ' + nome);

}

// declarar uma variável como const não significa necessariamente que seu valor não pode ser mudado. Significa que não podemos sobrescrever o seu identificador

const IP = '127.0.0.1';

console.log(IP);


