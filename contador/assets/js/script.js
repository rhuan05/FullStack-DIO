let currentNumber = document.getElementById('currentNumber');
let subtrair = document.getElementsByName('subtrair')[0];
let adicionar = document.getElementsByName('adicionar')[0];
let contador = 0;

subtrair.addEventListener('click', decrement);
adicionar.addEventListener('click', increment);

function decrement() {
    contador = contador - 1;
    currentNumber.innerHTML = contador;

    if(contador < 0){
        currentNumber.style.color = 'red';
    }
};

function increment() {
    if(contador >= -1){
        currentNumber.style.color = 'black';
    }

    if(contador === 10){
        alert('O máximo é 10!');
    } else {
        contador = contador + 1;
        currentNumber.innerHTML = contador;
    }
};