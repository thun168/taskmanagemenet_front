import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import AdduserBtn from '../components/AdduserBtn'
import AddEmployee from '../components/AddEmployee'
import AssignButton from '../components/AssignButton'
import { useStateProps } from '../context/StateContext'

const UserSection = () => {
    const { openAdd,isOpen } = useStateProps();
  return (
    <>
    <div className='flex justify-center pt-5'>
      <div className='flex justify-center absolute'>
      {isOpen && <AddEmployee/>}
      </div>
    </div>
    <div className='w-full h-auto rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='p-5'>
            <AssignButton setisAddStuff={openAdd} name={"Add Employee"}/>
        </div>
        <div>
            <h1 className='text-center font-semibold text-3xl pt-5 pr-3 pl-5 pb-3'>Employees</h1>
            <div className='px-9'>
                <div className='w-full flex justify-between'>
                    <button className='w-1/2 text-white font-bold bg-blue-900 py-2'>Manage Admin</button>
                    <button className='w-1/2 text-white font-bold bg-blue-900'>Manage User</button>
                </div>
            </div>
            <div className='px-5'>
                <UserTable/>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserSection