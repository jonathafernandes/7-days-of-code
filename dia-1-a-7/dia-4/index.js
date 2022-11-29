const numeroAdivinhacao = 7;
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar qual número estou pensando. Digite um número 0 e 10.");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}