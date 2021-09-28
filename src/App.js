import './App.css';
import Header from "./myComponents/Header";
import {About} from "./myComponents/About";
import {Todos} from "./myComponents/Todos";
import {AddTodo} from "./myComponents/AddTodo";
import {Footer} from "./myComponents/Footer";
import React , {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0)
      sno=1;
    else
      sno =(todos[(todos.length) - 1].sno) + 1;
    const myTodo={
        sno:sno,
        title:title,
        desc:desc 
    };
    setTodos([...todos,myTodo]);

  }
  var onDelete = (todo)=>{
    // let index=todos.indexOf(todo.sno);
    // todo.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo }
    ));  
  };
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));  
  }, [todos])

  return (
    <>
      <Router>
        <Header Title="TODO APP" />
        <Switch>
          <Route exact path="/" render= {()=>{
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos Todos={todos} ondelete={onDelete} />
            </>)
           }} > 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App;
