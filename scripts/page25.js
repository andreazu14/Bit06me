'use-strict';

let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response-ul');
let res = [];

form.addEventListener('submit', (event) => {
    res = [];
    response.innerHTML = '';

    event.preventDefault();

    for (let i = Number(form.numero_1.value); i >= 0; i--) {
        res.push(i);
    }

    res.forEach((id) => {
        if (id > 0) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${id}`;
            response.appendChild(newItem);
        }
    });
});