//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const headerDiv = document.querySelector('.day-of-week');
const pomodoroButton = document.querySelector('.pomodoro-btn');
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
    saveLocalTodos(todoInput.value, today);
    //check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //move todo one day forward button
    const moveDayButton = document.createElement('button');
    moveDayButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
    moveDayButton.classList.add("move-day-btn");
    todoDiv.appendChild(moveDayButton);

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

    //move todo day forward
    if(item.classList[0] === 'move-day-btn'){
        const todo = item.parentElement;
        //console.log(todo.innerText);
        saveLocalTodos(todo.innerText, today+1);
        todo.classList.add("slide-right");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
}


function saveLocalTodos(todo, today){
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
        
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //move todo one day forward button
        const moveDayButton = document.createElement('button');
        moveDayButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
        moveDayButton.classList.add("move-day-btn");
        todoDiv.appendChild(moveDayButton);

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
            break;
        case 1:
            header.innerText = "Monday"
            break;
        case 2:
            header.innerText = "Tuesday"
            break;
        case 3:
            header.innerText = "Wednesday"
            break;
        case 4:
            header.innerText = "Thursday"
            break;
        case 5:
            header.innerText = "Friday"
            break;
        case 6:
            header.innerText = "Saturday"
            break;
    }
    if(headerDiv){
        headerDiv.appendChild(header);
    }
    return day;
}

//for pomodoro timer
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
startButton.addEventListener('click', countDown);
stopButton.addEventListener('click', stopCounting);

function stopCounting(){
    clearInterval(x);
}

function countDown(e){
    e.preventDefault();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let now = new Date().getTime();
    let target = new Date(now + 25*60000);


    x = setInterval(function() {
        //check to see if pomodoro is still up, otherwise we will constantly be running
        //this loop in the background
        if(!document.querySelector('.base-timer')){
            clearInterval(x);
        }
        let now = new Date().getTime();
        let distance = target - now;
        
        document.getElementById("minutes").innerText = Math.floor((distance % (hour))/ (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));

        if(distance < 0){
            clearInterval(x);
            var audio = new Audio('bell_sound.mp3');
            audio.play();
        }
    });
}
