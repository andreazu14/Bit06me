'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');
let res = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i <= Number(form.numero_1.value); i++) {
        i % 2 != 0 ? (res = res + i) : false;
    }

    response.innerHTML = res;
    res = 0;
});
