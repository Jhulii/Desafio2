const inputTarea = document.querySelector('#form-input-tarea');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');
const list = document.querySelector('#list');
const btnCheck = document.querySelector('#btnCheck');
const btnDelete = document.querySelector('#btnDelete');

let tareas = [];

const renderTareas = () => {
    list.innerHTML = '';
tareas.forEach(tarea => {
    const listItem = document.createElement('li');
    listItem.classList.add('prueba');
    listItem.id = tarea.id;
    listItem.innerHTML = `
    <button class="boton-chequear" id="btnCheck">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#7bc1a6}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </button>
        <textarea class="input-tarea" id="test1">${tarea.nota}</textarea>

    <button class="boton-eliminar" id="btnDelete"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
    </button>
    `;
    list.append(listItem);
});
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const tareasCopy = tareas;
    const sortedTareasCopy = tareasCopy.sort((a,b) => b.id - a.id);

    const newTarea = {
        nota: inputTarea.value,
        id: tareasCopy.length ? sortedTareasCopy[0].id + 1 : 0,
    }

    tareas.unshift(newTarea);
    localStorage.setItem('contacts', JSON.stringify(tareas));
    renderTareas();
        inputTarea.value = '';
});

list.addEventListener('click', e => {
    const btnCheck = e.target.closest('#btnCheck');
    const deleteBtn = e.target.closest('#btnDelete');

if (deleteBtn) {
    const contactToDelete = deleteBtn.parentElement;
    const id = Number(contactToDelete.id);
    tareas = tareas.filter(tarea => tarea.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderTareas();
}

if (btnCheck) {
    checkear_tarea()
}

});

(() => {
const contactsStorage = localStorage.getItem('contacts') || [];
contacts = JSON.parse(contactsStorage);
renderTareas();
})();


function checkear_tarea() {
    var element = document.getElementById("test1");
    element.classList.add("tachar");
 }