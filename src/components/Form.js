import React from "react";
var uniqid = require("uniqid");

function Form( {setInputText, inputText, setTodos, todos, today, setDay, day}){
    function inputTextHandler(e){
        setInputText(e.target.value);
    };
    //function executes once submit button is pressed
    //adds todo to state
    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, id: uniqid('todo-id-'), completed: false, day: day},
        ]);
        setInputText('');
    }

    function daySwitchHandler(e){
        setDay(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={daySwitchHandler} name="todos" className="filter-todo">
                    <option value={today}>Today</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            </div>
        </form>

    );
};

export default Form; 