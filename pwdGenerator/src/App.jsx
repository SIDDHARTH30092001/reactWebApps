import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber,setIsNumber]=useState(true)
  const [isChar,setIsChar]=useState(true)
  const [password,setPassword]=useState("") //generate password

  //ref hook
  const passwordRef = useRef(null)
  
  const passwordGenerator=useCallback(()=>{ //useCallBack for memoization and optimization
    let pwd=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNumber) str+= "0123456789"
    if(isChar) str+="[]{}()!@#$%^&*~`"

    for(let i =0; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pwd+=str.charAt(char)
    }

    setPassword(pwd)

  } , [length,isNumber,isChar,setPassword]) //dependencies

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])


  //passwordGenerator(); //this will not work even after removing useCallBack and array below and using normal method bcoz react handles
//so we'll use useEffect

useEffect(()=>{
passwordGenerator()
},[length,isNumber,isChar,passwordGenerator]) //dependencies
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
   <h1 className="text-white text-center py-3">Password Generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">
   <input 
   type="text"
   value={password}
   className="outline-none w-full py-1 px-3"
  placeholder="Password"
  readOnly
  ref={passwordRef}
   ></input>
   <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
   onClick={copyPasswordToClipboard}
   >copy</button>
   </div>
   <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input 
      type="range"
      min={8}
      max={50}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>{
        setLength(e.target.value)
      }}

      ></input>
      <label htmlFor="numberInput">Length:{length}</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={isNumber}
      id="numberInput"
      onChange={()=>{
        setIsNumber((prev)=>!prev);
      }}
      ></input>
       <label>Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={isChar}
      id="characterInput"
      onChange={()=>{
        setIsChar((prev)=>!prev); //true then false, vice-versa
      }}
      ></input>
       <label htmlFor="characterInput">Special Characters</label>
    </div>
   </div>
   </div>
    </>
  )
}

export default App
