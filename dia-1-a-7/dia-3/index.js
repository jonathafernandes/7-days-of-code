const area = prompt('Olá, você deseja seguir para a área de Front-End ou Back-End? Digite o nome da área.');
let linguagem = "";
if (area === "Front-End") {
  linguagem = prompt('Ótimo! Você prefere aprender React ou aprender Vue?');
}

else if (area === "Back-End") {
  linguagem = prompt ('Ótimo! Você prefere aprender C# ou aprender Java?');
}

else {
  alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt('Ótimas escolhas! Você está decidido se empecializar em sua área ou pretende buscar ser um Desenvolvedor Fullstack? Responda 1 para PRIMEIRA OPÇÃO e 2 para SEGUNDA OPÇÃO.')

if (especialidadeOuFullstack == 1) {
  alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}

else if (especialidadeOuFullstack == 2) {
  alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}

else {
  alert('Você não inseriu um valor válido!')
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Ok' em caso positivo.");
while (msg === "Ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Ok' em caso positivo.");
}