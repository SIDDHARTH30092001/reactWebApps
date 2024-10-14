import React from 'react'
import { useParams } from 'react-router-dom' //this will help to get userId from main.jsx

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-600 text-white text-center text-3xl p-4'>User: {userId}</div>
    // http://localhost:5173/user/sid or http://localhost:5173/user/4
  )
}

export default User