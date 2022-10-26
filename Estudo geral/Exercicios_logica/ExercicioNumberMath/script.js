const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

texto.innerHTML ='';
numeroTitulo.innerHTML +=  numero;
texto.innerHTML += `<p>seu numero mais 2 = ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p> é NaN  ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredonda para cima${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredonda para baixo${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais${numero.toFixed([2])}</p>`;




