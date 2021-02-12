//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const headerDiv = document.querySelector('.day-of-week');
let today;

//event listeners
//on startup
document.addEventListener('DOMContentLoaded', () => {
    today = getToday();
    getTodos();
});
//document.addEventListener('DOMContentLoaded', getTodos, getToday);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    //check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function saveLocalTodos(todo){
    //check  -- do i already have things in there?
    let todos;
    if(localStorage.getItem(today) === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem(today));
    }
    todos.push(todo);
    localStorage.setItem(today, JSON.stringify(todos));

}

function getTodos(){
    let todos;
    if(localStorage.getItem(today)=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem(today));
    }
    todos.forEach(function(todo){
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        //create li
        console.log(todo);
        
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        deleteButton.classList.add("trash-btn");
        todoDiv.appendChild(deleteButton);

        //append to list
        todoList.appendChild(todoDiv);
        
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem(today)=== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem(today));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem(today, JSON.stringify(todos));
}

function getToday(){
    var d = new Date();
    var day = d.getDay();
    let header = document.createElement('h1');

    switch(day){
        case 0:
            header.innerText = "Sunday"
        case 1:
            header.innerText = "Monday"
        case 2:
            header.innerText = "Tuesday"
        case 3:
            header.innerText = "Wednesday"
        case 4:
            header.innerText = "Thursday"
        case 5:
            header.innerText = "Friday"
        case 6:
            header.innerText = "Saturday"
    }
    headerDiv.appendChild(header);
    return day;
}