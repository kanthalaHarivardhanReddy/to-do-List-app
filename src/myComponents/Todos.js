import React from 'react'

import {TodoItem} from "../myComponents/TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight:'70vh'
    };
    return (
        <div className='container my-3' style={myStyle}>
            <h3 className="text-center my-3">My Todo List</h3>
            {props.Todos.length===0? <h6 className="text-center my-2 ">No Todos to display</h6> :props.Todos.map((todo)=>{
               return( <TodoItem  key={todo.sno} Todo={todo} deleteFunc={props.ondelete}/> )
            })
            }

        </div>
    )
}
