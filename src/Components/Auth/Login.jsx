import React, { useActionState, useState } from 'react'

const Login = ({handleLogin}) => {
   

const[email, setEmail] = useState('')
const[password, setPassword] = useState('')


const submitHandler = (e) =>{
   e.preventDefault()
   handleLogin(email,password)
   setEmail("")
   setPassword("")
}

  return (
    <div className=' flex h-screen w-screen items-center bg-black justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e) =>{
                submitHandler(e)
                
            }}
            className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='text-white border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your email' />
                <input value={password}
                onChange={(e) =>{
                    setPassword(e.target.value)
                }}
                required type="password" className='text-white mt-3 border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full' placeholder='Enter your password' />
                <button className='mt-7 text-white border-2 outline-none border-none bg-emerald-600 py-3 px-5 text-xl rounded-full'>Login</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login
