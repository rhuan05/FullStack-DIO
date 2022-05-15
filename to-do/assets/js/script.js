let adicionar = document.getElementById('adicionar');
let inputCheckbox;

adicionar.addEventListener('click', () => {
    let inputTarefa = document.getElementById('inputTarefa');
    if(inputTarefa.value.length === 0){
        alert('Preencha o campo em vazio para adicionar uma tarefa.')
    } else {
        let li = document.createElement('li');
        li.innerHTML = `<div class="blocoTarefaInput"><input type="checkbox"/><li>${inputTarefa.value}</li></div>`;
        document.getElementById('tarefas').appendChild(li);
        inputTarefa.value = '';
        inputTarefa.focus();
        inputCheckbox = document.querySelectorAll('input[type=checkbox]');
    }
    console.log(inputCheckbox);

    inputCheckbox.forEach(e => {
        e.addEventListener('click', (e) => {
            let inputCheck = e.target;
            let blocoTarefas = inputCheck.parentElement;

            if(inputCheck.checked === true){
                blocoTarefas.childNodes[1].style.textDecoration = 'line-through';
            } else {
                blocoTarefas.childNodes[1].style.textDecoration = 'none';
            }
        })
    })
});