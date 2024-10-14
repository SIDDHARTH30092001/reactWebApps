import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './compnents/TodoForm'
import TodoItem from './compnents/TodoItem'

function App() {
  //array todo having multiple values
  const [todos, setTodos] = useState([]) //by default empty array

  const addTodo=(todo)=>{
    //setTodos(todo) //if we do this then itll delete all and create fresh todo 
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]) //we do destructure of array and append todo which we need to write
 //...todo and ...prev is object spreading
 
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))//map for looping so well get object and id under it
  //prev gives previous state of array and we've ask question if arrays id matching with id we're doing   
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id)) 
    //filter allows this way - the onces not matching keep allow, the one will match will not come/allow/return
  }

  const toggleComplete=(id)=>{  //take all values from todo by ...prevTodo then take completed from it if true then false vice-versa
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo)) //true - :false - keep todos as it is
  }

  //now local storage functionality
  //local storage stores in browser in string format which need to convert in json to fetch
  //when you'll refresh,open site again we want previously stored values to be fetch. get and setItem
  //in react localstorage directly fetch and not on server side rendering only browser
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos")) 
    if(todos && todos.length>0){ //json can be array too
      setTodos(todos)
    }
  },[]) //if we add dependecy array can cause issue since above useEffect will process , hence we cr8 below useEffect again

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{addTodo, updateTodo, todos, toggleComplete, deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* {todos.map((todo)=>{if we use curly breace like this in front of => we need to use return keyword so we use () which is for auto return})}  */}
                        {todos.map((todo)=>(
                          //use keys for check unique div or not for todos, performance degrade, give warning still work but keys so even 2 same todos can work but identify as different
                          <div key={todo.id}
                          className='w-full'>
                          <TodoItem todo={todo}></TodoItem>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
