'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    Number(form.numero.value) % 2 == 0 ? (response.innerHTML = 'Es par') : (response.innerHTML = 'es inpar');
});