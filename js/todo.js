let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_Todos')) || []

function renderTodos() {
    listElement.innerHTML = ''
    todos.forEach(todo => {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        let excluirElement = document.createElement('a');
        let excluirText = document.createTextNode(' Excluir');
        let pos = todos.indexOf(todo);

        excluirElement.setAttribute('onclick', `deleteTodo( ${pos})`);
        excluirElement.setAttribute('href', '#')
        excluirElement.appendChild(excluirText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(excluirElement);
        listElement.appendChild(todoElement);
    });
}

function addTodo() {
    let todoText = inputElement.value;

    if (todoText != ''){
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    }
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_Todos',JSON.stringify(todos))
}

renderTodos();
buttonElement.onclick = addTodo;