'use-strict';
let form = document.getElementById('form');
let title = document.getElementById('title');
let response = document.getElementById('response-ul');
let array = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (let i = 0; i < Number(form.numero.value); i++) {
        i % 2 == 0 ? array.push(i) : false;
    }

    array.forEach((id) => {
        if (id > 0) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `${id}`;
            response.appendChild(newItem);
        }
    });
});
