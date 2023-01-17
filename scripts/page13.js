'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (Number(form.numero.value) <= 0) {
        response.innerHTML = 'En serio wey? eso no es admitido';
    } else if (Number(form.numero.value) <= 1) {
        response.innerHTML = 'No es primo';
    } else if (Number(form.numero.value) == 2) {
        response.innerHTML = 'Si es primo';
    }
    for (let i = 2; i < Number(form.numero.value); i++) {
        if (!Number.isInteger(Number(form.numero.value) / i)) {
            i < Number(form.numero.value) ? (response.innerHTML = 'Si es primo') : false;
        } else {
            response.innerHTML = 'No es primo';
            break;
        }
    }
});