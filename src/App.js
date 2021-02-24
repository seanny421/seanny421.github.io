import React, { useEffect, useState } from "react";
import './App.css';
import Form from './components/Form';
import Menu from './components/Menu';
import TodoList from "./components/TodoList";

function App() {
  //state
  const [menu, setMenu] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [today, setToday] = useState("");
  const [day, setDay] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run on app start
  useEffect(function(){
    setToday(getToday);
    setDay(getToday);
    getLocalTodos();
    
  }, []);

  useEffect(function(){
    filterHandler();
    saveLocalTodos();
  }, [todos, day])

  function filterHandler(){
    switch(day){
      case 'Monday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Monday'))
        break;
      case 'Tuesday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Tuesday'))
        break;
      case 'Wednesday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Wednesday'))
        break;
      case 'Thursday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Thursday'))
        break;
      case 'Friday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Friday'))
        break;
      case 'Saturday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Saturday'))
        break;
      case 'Sunday':
        setFilteredTodos(todos.filter(todo=> todo.day === 'Sunday'))
        break;
      case 'Today':
        setFilteredTodos(todos.filter(todo=> todo.day === today))
        break;
      default:
        setFilteredTodos(todos.filter(todo=> todo.day === today));
        break;
    }
  };
  //save to local storage
  function saveLocalTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  //get todos from local storage
  function getLocalTodos(){
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  function getToday(){
    var d = new Date();
    var day = d.getDay();
    // switch(day){
    //   case 0:
    //       return "Sunday"
    //   case 1:
    //       return "Monday"
    //   case 2:
    //       return "Tuesday"
    //   case 3:
    //       return "Wednesday"
    //   case 4:
    //       return "Thursday"
    //   case 5:
    //       return "Friday"
    //   case 6:
    //       return "Saturday"
    // }

    return "Monday"
  }

  return (
    <div className="App">
      <Menu menu={menu} setMenu={setMenu}/>
      <header>
        <h1 className="day-of-the-week">{day}</h1>
      </header>
      <Form
      setTodos={setTodos}
      todos={todos}
      setInputText={setInputText}
      inputText={inputText}
      today={today}
      setDay={setDay}
      day={day}/>

      <TodoList todos={todos} setTodos={setTodos} today={today} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
