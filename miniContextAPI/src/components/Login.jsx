import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {

    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')


    const {setUser}=useContext(UserContext) //getting from UserContextProvider. setUser has value while giving right context which is UserContext

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

    //now will get data from user instead of setUser which is setting the data

  return (
    <>
        <h2>Login</h2>
        <input type='text' 
        value={username} //this will connect value to above state
        onChange={(e)=>setUsername(e.target.value)}//if state value change then itll setUsername 
        placeholder='username'></input>
        {""}
        <input type='text'
         value={password} 
         onChange={(e)=>setPassword(e.target.value)}
          placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login

//we sent data from this to Profile