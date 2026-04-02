import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/Localsstorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
      localStorage.setItem('loggedInUser', '')
      props.changeUser('')
  }

  return (
    <div className='text-white flex items-end justify-between'>
      <h1 className='text-2xl'>Hello <br/> <span className='text-3xl font-semibold '> username 👋 </span> </h1>
      <button onClick={logOutUser} className='bg-red-500 px-3 py-2 rounded-sms text-lg font-medium text-white'>Log Out</button>
    </div>
  )
}

export default Header
