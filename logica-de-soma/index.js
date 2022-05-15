function soma(n1, n2){
    let iguais = n1 === n2;
    let soma = n1 + n2;
    let maior = soma > 10;
    let menor = soma < 20;
    if(iguais === true){
        console.log(`Os números ${n1} e ${n2} SÃO iguais. Sua soma é ${soma}, que é ${maior === true ? 'maior' : 'menor'} que 10 e ${menor === true ? 'menor' : 'maior'} que 20.`)
    } else {
        console.log(`Os números ${n1} e ${n2} NÃO são iguais. Sua soma é ${soma}, que é ${maior === true ? 'maior' : 'menor'} que 10 e ${menor === true ? 'menor' : 'maior'} que 20.`)
    }
};

soma()