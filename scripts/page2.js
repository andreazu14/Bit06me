'use-strict';
let form = document.getElementById('form');
let title = document.getElementById('title');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    Number(form.edad.value) >= 18
        ? (title.innerHTML = 'Si eres mayor de edad')
        : (title.innerHTML = 'No eres mayor de edad');
});