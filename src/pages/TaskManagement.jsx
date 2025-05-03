import React from 'react'
import AssignButton from '../components/AssignButton'
import TestTable from '../components/TestTable'

const TaskManagement = () => {
  return (
    <div className='w-full h-auto rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='pt-5 pl-5'>
            <AssignButton/>
        </div>
        <div>
            <h1 className='text-center font-semibold text-3xl p-5'>Task Management</h1>
            <div className='px-5'>
                <TestTable/>
            </div>
        </div>
    </div>
  )
}

export default TaskManagement