import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements, Link, NavLink, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout></Layout>,
//     children:[
//       {path:"",
//         element:<Home></Home>
//       },
//       {
//         path:"About",
//         element:<About></About>
//       },
//       {
//         path:"Contact",
//         element:<Contact></Contact>
//       },
//     ]
//   }
// ])

//alter way

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout></Layout>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}>
      {/* <Route path="sid" element={<Sid></Sid>}> </Route> //can add nesting also add "about/" in above */}
      </Route>
      <Route path="Contact" element={<Contact></Contact>}></Route>
      <Route path='User/:userId' element={<User></User>}></Route> 
      {/* id will fetch its user*/}
      {/* <Route loader={()=>fetch()...} path='github' element={<Github></Github>}></Route>  */}
      <Route loader={githubInfoLoader} path='github' element={<Github></Github>}></Route> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </StrictMode>,
)
