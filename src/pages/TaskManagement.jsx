import React, { useState } from 'react'
import TestTable from '../components/TestTable'
import AssignTask from '../components/AssignTask';
import AssignButton from '../components/AssignButton';

const TaskManagement = () => {
  const [isAssignTask, setisAssignTask] = useState(false);
  return (
    <>
    <div className='flex justify-center'>
      <div className='flex justify-center absolute'>
      {isAssignTask && <AssignTask/>}
      </div>
    </div>
    <div className='w-full h-auto rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='pt-5 pl-5'>
          <AssignButton setisAddStuff={setisAssignTask} name={"Assign task"}/>
        {/* <button onClick={handleClick} className=' w-[200px] cursor-pointer h-[50px] bg-blue-500 rounded-[7px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-blue-900 transition-all duration-100'>
          <span className='font-bold text-white'>Assign Task</span>
        </button>    */}
        </div>
        <div>
            <h1 className='text-center font-semibold text-3xl p-5'>Task Management System</h1>
            <div className='px-5'>
                <TestTable/>
            </div>
        </div>
    </div>
    </>
  )
}

export default TaskManagement