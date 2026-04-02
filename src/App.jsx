import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmplyeeDashboard from './Components/Dashboard/EmplyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './Utils/Localsstorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

const[user, setUser] = useState(null)
const[loggedInUserData, setloggedInUserData] = useState(null)
const [userData, setuserData] = useContext(AuthContext)

useEffect(()=>{
   const loggedInUser = localStorage.getItem('loggedInUser')
    
   if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role )
      setloggedInUserData(userData.data)
    }  
  
  
}, []) 



const handleLogin = (email, password) =>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    
  }else if(userData){
    const employee = userData.find((e) =>email == e.email && password == e.password)
    if(employee){
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
    }
    
  }
  else{
    alert("Invalid Credentials")
  }
}





// useEffect(() =>{
//     setLocalStorage()
// },)

  return (
    
    <div>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user=='employee'? <EmplyeeDashboard changeUser={setUser} data={loggedInUserData}/> : null ) }
    {/* <EmplyeeDashboard /> */}
    {/* <AdminDashboard /> */}

    </div>
   
  )
}

export default App
