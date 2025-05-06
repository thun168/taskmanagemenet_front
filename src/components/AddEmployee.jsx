import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { useStateProps } from '../context/StateContext';

const AddEmployee = () => {
  const [show, setShow] = useState(false);
  const {isCloseAdd} = useStateProps();
  const [employeeData, setEmployeeData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({...prev,[name]: value}));
  };

  const clearInput = () => {
    setEmployeeData({
    fullname: '',
    username: '',
    email: '',
    password: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employeeData);
    clearInput();
  };

  return (
    <div className={`transition-all duration-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} flex justify-center items-center fixed inset-0 bg-black/30 backdrop-blur-sm`}>
      <div className='w-[700px] h-auto bg-white z-50 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
        <div className='p-[10px]'>
        <div>
          <h1 className='text-center font-bold text-xl text-blue-600'>Add Employee</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex gap-10 justify-center pt-5'>
              <div className='flex flex-col'>
                <label className='pb-2 font-semibold'>Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  value={employeeData.fullname}
                  onChange={handleChange}
                  className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2'
                  placeholder='Enter your fullname' required
                />
              </div>
              <div className='flex flex-col'>
                <label className='pb-2 font-semibold'>Username</label>
                <input
                  type="text"
                  name="username"
                  value={employeeData.username}
                  onChange={handleChange}
                  className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2'
                  placeholder='Enter your username' required
                />
              </div>
            </div>
            <div className='flex gap-10 justify-center pt-3'>
              <div className='flex flex-col'>
                <label className='pb-2 font-semibold'>Email</label>
                <input
                  type="email"
                  name="email"
                  value={employeeData.email}
                  onChange={handleChange}
                  className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2'
                  placeholder='Enter your Email'required
                />
              </div>
              <div className='flex flex-col'>
                <label className='pb-2 font-semibold'>Password</label>
                <input
                  type="password"
                  name="password"
                  value={employeeData.password}
                  onChange={handleChange}
                  className='w-[250px] h-[40px] border-2 border-gray-300 rounded-[5px] p-2'
                  placeholder='Enter your password' required
                />
              </div>
            </div>
            <div className='flex justify-center py-5 gap-4'>
            <button onClick={isCloseAdd} className={`w-[120px] ml-2 cursor-pointer h-[40px] bg-red-500 rounded-[7px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-blue-900 transition-all duration-100`}>
              <span className='font-bold text-white'>Cancel</span>
            </button>
              <Button name={"Save"} color={"bg-blue-500"} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
