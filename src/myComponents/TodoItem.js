import React from 'react'

export const TodoItem = (props) => {
    
    return (
        <div className="todoCard" style={{margin:'1.6% 0 0 10%'}}>
            <h4>{props.Todo.title}</h4>
            <p>{props.Todo.desc}</p>
            <button className="btn-danger btn-sm text-light" onClick = {()=> props.deleteFunc(props.Todo)} >Delete</button>
        </div>
    )
}
