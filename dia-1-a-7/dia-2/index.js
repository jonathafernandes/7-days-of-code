const nome = prompt('Qual seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');


const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);

const adicional = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para SIM e 2 para NÃO.`);

if (adicional == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso.');
}

if (adicional == 2) {
alert ('Ah que pena... Já tentou aprender outras linguagens?');
}
