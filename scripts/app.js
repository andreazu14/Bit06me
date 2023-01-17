'use strict';

let form = document.getElementById('form');
let response = document.getElementById('response');

const user = 'bit';
const pass = '2023';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.user.value === user && form.password.value === pass
        ? location.assign('./pages/main.html')
        : (response.innerHTML = 'Upss... Datos incorrectos');
});