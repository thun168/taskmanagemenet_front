import React from 'react'

const AssignButton = () => {
  return (
    <>
    <button className=' w-[200px] cursor-pointer h-[50px] bg-blue-500 rounded-[7px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-blue-900 transition-all duration-100'>
        <span className='font-bold text-white'>Assign Task</span>
    </button>
    </>
  )
}

export default AssignButton