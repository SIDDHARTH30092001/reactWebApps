import {useContext, createContext} from "react"

//all todo values for components can be take from here

export const TodoContext=createContext({
    //array
    todos:[
        //each todo will have id, todo, completed/checked or not - these are properties
        {
            id:1,
            todo:"Todo msg1",
            completed:false,
        }
    ],
    //these are functionalities but method not here, work will decide in App.jsx can do anywhere but we'll do in App.jsx, also contextApi is not for hugh projects instead we use redux
    addTodo:(todo)=>{}, //add todo
    updateTodo:(id,todo)=>{}, //update in basis of id and text to put
    deleteTodo:(id)=>{}, //delete
    toggleComplete:(id)=>{} //checked or not based on it update
})

//hook 
export const useTodo=()=>{
    return useContext(TodoContext) //use context always contains context
}


//create provider here so TodoContext.Provier no need to write there - wrap it in components so elemets can access this
export const TodoProvider=TodoContext.Provider

//we'll cr8 todos and itll be having unique ids