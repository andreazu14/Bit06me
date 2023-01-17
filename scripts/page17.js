'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    response.innerHTML = `${Number(form.numero_1.value) / Number(form.numero_2.value)}`;
});