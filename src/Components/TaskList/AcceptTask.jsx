import React from 'react'

const AcceptTask = ({data}) => {
  return (
    
        <div className='h-full flex-shrink-0  w-[300px] bg-red-400 rounded-xl'>

                <div className='flex p-5 justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='m-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm m-5'> {data.taskDescription} </p>
            
                <div className='flex justify-between m-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Completed</button>
                 <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
            </div>
            </div>
        
   
  )
}

export default AcceptTask
