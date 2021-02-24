import React, { useState } from "react";

function Todo({todos, setTodos, todoText, todo, today}){
    const [isDeleted, setIsDeleted] = useState(false);

    function deleteHandler(e){
        setIsDeleted(true);
        //use setTimeout so use can see the animation when fall class is added 
        setTimeout(() => {setTodos(todos.filter(element => element.id !== todo.id));}, 500);
    };
    
    function completedHandler(){
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return(
        <div className={`todo ${isDeleted ? "fall": ""} ${todo.completed ? "completed": ""}`}>
            <li className={`todo-item`}>{todoText}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};


export default Todo;