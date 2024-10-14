import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode]=useState("light")
  //functionalities
  const lightTheme=()=>{
    setThemeMode("light")
  }
const darkTheme=()=>{
  setThemeMode("dark")
  }

  // actual theme change, useEffect so itll load b4
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode) 
  }, [themeMode])
  

  return (
    //wrapping by ThemeProvider so anything can be access by inside components
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme button */}
                        <ThemeBtn></ThemeBtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card></Card>
                    </div>
                </div>
            </div>
</ThemeProvider> 
  )
}

export default App

// add functionality to tailwind