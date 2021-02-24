import React from "react";
import Todo from "./Todo";

function TodoList( {todos, setTodos, today, filteredTodos}){
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* map every item - todo - in array todos to the <Todo> component */}
                {filteredTodos.map((todo) => (
                    <Todo
                    key={todo.id}
                    todoText={todo.text}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    today={today}/>

                ))}
            </ul>
        </div>
        
    );
};


export default TodoList;