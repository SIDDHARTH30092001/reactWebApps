
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth' //to get if login or not to useEffect
import './App.css'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components/index'
// import Outlet from "react-router-dom"
function App() {

  //console.log(process.env.REACT_APP_APPWRITE_URL); //this is for create react app for vite its VITE_
  //console.log(import.meta.env.VITE_APPWRITE_URL); //here we access like this

  //if login otherwise something else
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
    //either current user access or logout in state
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>
      setLoading(false)
    )
  }, [])
  
  

  return !loading?(  //conditional rendering 
<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full block'>
    <Header></Header>
    <main>
     {/* TODO : <Outlet/> */}
    </main>
    <Footer></Footer>
  </div>
</div>
     
  ):null
}

export default App
