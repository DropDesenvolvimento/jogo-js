alert('Boas-Vindas ao jogo do Número Secreto. ');
let numeroMaximo = 5000;
console.log('Mensagem de boas vindas!')
let numeroSecreto = parseInt(Math.random()* numeroMaximo +1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// se o numero for igual ao chute 
//while = Enquanto
while(chute != numeroSecreto) {
    chute = prompt(`Tente advinhar o número secreto de 1 a ${numeroMaximo} . `);
    //se o chute for igual n.s.
    if(chute == numeroSecreto) {
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`Chute mais baixo que ${chute}`);
        }
        if(chute < numeroSecreto){
            alert(`chute mais alto que  ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce advinhou o Número Secreto:  ${numeroSecreto} com ${tentativas} ${palavraTentativa} . `)