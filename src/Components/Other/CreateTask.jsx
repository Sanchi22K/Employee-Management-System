import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const[taskTitle, setTaskTitle] = useState('')
  const[taskDescription, setDescription] = useState('')
  const[taskDate, setTaskDate] = useState('')
  const[assignTo, setassignTo] = useState('')
  const[category, setCategory] = useState('')

  const[newtask, setNewTask] = useState({})


const submitHandler = (e)=>{
       e.preventDefault()
       const task = {
        taskDate,
        taskTitle,
        taskDescription,
        category,
        active:true,
        newTask:true,
        failed:false,
        completed:false
       }

       const data = [...userData]  

       data.forEach(function(elem){
        if(assignTo == elem.firstName){
             elem.tasks.push(task)
             elem.taskCounts.newTask += 1
elem.taskCounts.active += 1
        }
       });

       setUserData(data)
       localStorage.setItem('employees', JSON.stringify(data)) 

    setTaskDate('')
    setTaskTitle('')
    setCategory('')
    setassignTo('')
    setDescription('') 
}

  return (
    <div>
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) =>{
          submitHandler(e)
        }}
         className='flex w-full flex-wraps items-start justify-between'>
          <div className='w-1/2'>
            <h3 className='text-xl  mt-2 text-gray-300 mb-0.5'>Task Tiitle</h3>
            <input 
            value = {taskTitle}
            onChange={(e) =>{
              setTaskTitle(e.target.value)
            }}
            className='border-[1px]  w-full border-gray-400' type="text" placeholder='Make your UI design' />

            <div>
              <h3 className='text-xl  mt-2 text-gray-300 mb-0.5'>Date</h3>
              <input
               value = {taskDate}
            onChange={(e) =>{
              setTaskDate(e.target.value)
            }}
               className='border-[1px]  w-full border-gray-400' type="date" />

            </div>

            <div>
              <h3 className='text-xl  mt-2 mt-2 text-gray-300 mb-0.5'>Assign to</h3>
              <input 
               value = {assignTo}
            onChange={(e) =>{
              setassignTo(e.target.value)
            }}
              className='border-[1px]  w-full border-gray-400' type="text" placeholder='Employee Name' />
            </div>


            <div>
              <h3 className='text-xl  mt-2 mt-2 text-gray-300 mb-0.5'>Category</h3>
              <input 
               value = {category}
            onChange={(e) =>{
              setCategory(e.target.value)
            }}
              className='border-[1px]  w-full border-gray-400' type="text" placeholder='Design , Dev, etc' />
            </div>


          </div>


          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-xl  mt-2 font-semibold text-gray-300 mb-0.5'>Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e) =>{
              setDescription(e.target.value)
            }}
             className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
          <button className=' text-xl font-semibold bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default CreateTask
