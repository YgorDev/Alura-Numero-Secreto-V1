alert('Bem Vindo ao Jogo Do Número Secreto V1.0');

let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativa = 1;

while(chute != numeroSecreto){
    chute = prompt (`Escolha um Número entre 1 e ${numeroMaximo}`);
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que (${chute})`);
        }else{
            alert(`O número secreto é maior que (${chute})`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

alert(`Parabens voce acertou o Numero secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}`);