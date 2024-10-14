import React, {useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import {login as authLogin} from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"


function Login() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState("")

    const login=async(data)=>{
        setError("")
        try{
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(authLogin)
                navigate("/")
            }
        }
        catch(error){
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'>

                </Logo>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>
            sign in to your account
        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Dont have account?
            <Link
            to="/signup"
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >Sign Up</Link>
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                 <Input label="Email: " placeholder="Enter your email" type="email" {...register("email",{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/^\W+([,-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)||"Email must be valid"
                    }
                 })}></Input>
                 {/* placeholder will go by ...props above */}
                  {/*async(data) will based on this register("email") part*/}

                  <Input label="Password: " type="password" placeholder="enter password"
                  {...register("password",{
                    required:true,
                  })}
                  ></Input>
                  <Button type="submit" className="w-full">Sign In</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login