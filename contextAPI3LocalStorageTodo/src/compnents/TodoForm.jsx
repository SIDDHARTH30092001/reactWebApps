import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()
    
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        //no need to pass this - id:Date.now() also todo:todo can be just todo since same:same
        addTodo({todo,completed:false}) //we're passing object {}and not todo directly since we've spreaded in App.jsx 
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //this is called as wiring input with state
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

