import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SIDDHARTH30092001')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data) //only this will not work due to render thats why we need state above
    //         setData(data)
    //     })
    // },[])

    const data= useLoaderData() //to get data from Loader Method - loader helps to get data even b4 useEffect as soon as i hover on GitHub Menu Link itself

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.following}
    <img className='text-center w-40' src={data.avatar_url} alt='gitImg'></img>
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response = await fetch('https://api.github.com/users/SIDDHARTH30092001')
    return response.json()
}