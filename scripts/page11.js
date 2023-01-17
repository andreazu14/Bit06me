'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (Number(form.numero.value) === 0) {
        response.innerHTML = 'Es cero';
    } else if (Number(form.numero.value) > 0) {
        response.innerHTML = 'Es positivo';
    } else if (Number(form.numero.value) < 0) {
        response.innerHTML = 'Es negativo';
    }
});
