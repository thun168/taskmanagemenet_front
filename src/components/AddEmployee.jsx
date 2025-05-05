import React, { useEffect, useState } from 'react'
import Button from './Button'

const AddEmployee = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`transition-all duration-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex justify-center items-center`}>
      <div className='w-[700px] h-auto bg-white z-50 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='p-[50px]'>
          <h1 className='text-center font-bold text-xl text-blue-600'>Add Employee</h1>
          <form>
            <div className='flex gap-10 justify-center pt-5'>
              <div className='flex flex-col'>
                <label htmlFor='task_title' className='pb-2 font-semibold'>Fullname</label>
                <input type="text" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2'placeholder='Enter your fullname' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='task_desc' className='pb-2 font-semibold'>Username</label>
                <input type="text" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2' placeholder='Enter your username' />
              </div>
            </div>
            <div className='flex gap-10 justify-center pt-3'>
              <div className='flex flex-col'>
                <label htmlFor='start_date' className='pb-2 font-semibold'>Email</label>
                <input type="email" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2' placeholder='Enter your Email'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='end_date' className='pb-2 font-semibold'>Password</label>
                <input type="text" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2' placeholder='Enter your password' />
              </div>
            </div>
            <div className='flex justify-center pt-10'>
              <Button name={"Cancel"} color={"bg-red-500"} />
              <Button name={"Save"} color={"bg-blue-500"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee;
