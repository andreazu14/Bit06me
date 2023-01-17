'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    switch (form.operacion.value) {
        case 'suma':
            response.innerHTML = `${Number(form.numero_1.value) + Number(form.numero_2.value)}`;
            break;

        case 'resta':
            response.innerHTML = `${Number(form.numero_1.value) - Number(form.numero_2.value)}`;
            break;

        case 'multiplicacion':
            response.innerHTML = `${Number(form.numero_1.value) * Number(form.numero_2.value)}`;
            break;

        case 'division':
            response.innerHTML = `${Number(form.numero_1.value) / Number(form.numero_2.value)}`;
            break;
    }
});