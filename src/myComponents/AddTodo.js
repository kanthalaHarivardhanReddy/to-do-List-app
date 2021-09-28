import React , {useState} from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
            alert('title or description can`t be blank ');
        else{
            props.addTodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a To-Do </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title:</label>
                    <input type="text" value={title} onChange={(e=>{settitle(e.target.value)})} className="form-control"/>
                    </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description:</label>
                    <input type="text" value={desc} onChange={(e=>{setdesc(e.target.value)})} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
        
    )
}
