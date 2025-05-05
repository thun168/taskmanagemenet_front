import React, { useEffect, useState } from 'react'
import Button from './Button'

const AddEmpolyee = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`transition-all duration-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex justify-center items-center`}>
      <div className='w-[800px] h-[500px] bg-white z-50 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='p-[50px]'>
          <h1 className='text-center font-bold text-xl text-blue-600'>Assign Task for Employee</h1>
          <form>
            <div className='flex gap-10 justify-center pt-5'>
              <div className='flex flex-col'>
                <label htmlFor='task_title' className='pb-2'>Task Title</label>
                <input type="text" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-xs p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='task_desc' className='pb-2'>Task Description</label>
                <textarea className='w-[250px] h-[80px] border-2 border-gray-300 p-2' />
              </div>
            </div>
            <div className='flex gap-10 justify-center pt-3'>
              <div className='flex flex-col'>
                <label htmlFor='start_date' className='pb-2'>Start Date</label>
                <input type="date" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-xs p-2' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='end_date' className='pb-2'>End Date</label>
                <input type="date" className='w-[250px] h-[40px] border-2 border-gray-300 rounded-xs p-2' />
              </div>
            </div>
            <div className='flex gap-10 justify-center pt-3'>
              <div className='flex flex-col'>
                <label htmlFor='employee' className='pb-2'>Select Employee</label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-[250px] px-4 py-2 border rounded-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required>
                  <option>Select an Employee</option>
                  <option>Lim Vithyea</option>
                  <option>Doem Samaun</option>
                  <option>Thoun Sithun</option>
                </select>
              </div>
              <div className='flex flex-col w-[250px] h-[40px]'></div>
            </div>
            <div className='flex justify-end pt-10'>
              <Button name={"Cancel"} color={"bg-red-500"} />
              <Button name={"Save"} color={"bg-blue-500"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmpolyee
