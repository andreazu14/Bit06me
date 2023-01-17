'use strict';
let form = document.getElementById('form');
let title = document.getElementById('title');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    title.innerHTML = `¡¡Hola ${form.name.value}!!`;
});
