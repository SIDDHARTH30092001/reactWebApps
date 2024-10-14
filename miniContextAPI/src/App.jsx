import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
    {/* <UserContext.Provider vsalue=...></UserContext.Provider> can do this as well but use case different*/}
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    {/* Login data set to Profile component */}
    </>
  )
}

export default App
