import React from 'react'
import {Logo,Container,LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' // there's another called as useNavigation both for forcefull redirect

function Header() {
    const authStatus=useSelector((state)=>state.auth.status)

    const navItems=[
        {
            name:'Home',
            slug:'/', //url
            active:true
        },
        {
            name:'Login',
            slug:'/login', 
            active:!authStatus
        },
        {
            name:'Signup',
            slug:'/signup', 
            active:!authStatus
        },
        {
            name:'All Posts',
            slug:'/all-posts', 
            active:authStatus
        },
    ]
    const navigate=useNavigate()
  return (
    <Header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4 '>
                    <Link to='/'>
                        <Logo width='70px'></Logo>
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                {navItems.map((item)=>
                item.active?Container(
                    <li key={item.name}>
                    <button onClick={()=>navigate(item.slug)} 
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'>
                    {item.name}
                    </button>
                    </li> //key where html element is repeating
                ):null
                )}
                {/* if authStatus true then next will show (....)*/}
                {authStatus && (
                    <li>
                        <LogoutBtn></LogoutBtn>
                    </li>
                )}  
                </ul>
            </nav>
        </Container>
    </Header>
  )
}

export default Header