'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');
let res = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i <= Number(form.numero_1.value); i++) {
        res = res + i;
    }

    response.innerHTML = res;
});