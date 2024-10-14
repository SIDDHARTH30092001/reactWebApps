import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,
    authentication=true,

}) {

    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{


        //ez one below logic
        // if(authStatus===true){
        //     navigate("/")
        // }
        // else if(authStatus===false){
        //     navigate("/login")
        // }


        
        //let authValue=authStatus===true?true:false



        //(by default sent)true && (not authenticated)false!==true which is true so login
        if(authentication && authStatus !==authentication){
            navigate("/login")

            //!true (false) && true !== true (false) since true is equal to true
        }else if(!authentication && authStatus !==authentication){
            navigate("/")

setLoader(false)        }
    },[authStatus, navigate, authentication])

  return loader?<h1>loading...</h1> : <>{children}</>
}

//container to protect