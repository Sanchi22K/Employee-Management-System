import React from 'react'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'

const EmplyeeDashboard = (props) => {
  return (

      <div className='p-10 bg-[#1C1C1C] h-screen'>
       
        <Header changeUser={props.changeUser} data = {props.data} />
        <TaskNumber data = {props.data}/>
        <Tasklist data = {props.data} />
      </div>

  )
}

export default EmplyeeDashboard
