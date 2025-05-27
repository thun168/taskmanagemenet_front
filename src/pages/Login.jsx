import React, { useEffect, useState } from 'react'
import LoginPic from "../assets/login.jpg";
import NUM from "../assets/NUM.png"
import { useNavigate } from 'react-router-dom';
import ParticlesComponent from '../components/Particle';
import "../components/particle.css";

const Login = ({onLogin}) => {

    const [formData,setFormData] = useState({
        name:"",
        password:""
    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if(formData.name == "Dara" & formData.password == "123"){
            const isAuthenticated = true; 
            if (isAuthenticated) {
              onLogin(); 
              navigate("/dashboard");
            }
        } else {
            console.log("Error");
        }
      };

  return (
    <div className=''>
        <ParticlesComponent id="particles"/>
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-[900px] z-10 h-[500px] bg-white pl-[30px] rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex' >
                <div className='w-[400px] h-[450px] bg-white m-auto rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                    <div className='mt-[40px]'>
                        <div className='flex justify-center'>
                        <img src={NUM} className='w-[50px] h-[50px]'/>
                        </div>
                        <h1 className='text-center font-bold text-[20px] mb-2'>Task Management System</h1>
                        <h1 className='text-center font-semibold text-xl text-blue-500'>Login</h1>
                    </div>
                    <form className='flex justify-center' onSubmit={handleLogin}>
                        <div className='flex justify-center flex-col'>
                            <div className='flex flex-col'>
                                <label>username</label>
                                <input type='text' name='name' value={formData.name} onChange={handleInputChange}
                                className='w-[300px] h-[50px] p-2 rounded-[5px] border-3 border-blue-500' placeholder='Enter your username'/>
                                <label className='mt-5'>password</label>
                                <input type='text' name='password' value={formData.password} onChange={handleInputChange}
                                className='w-[300px] h-[50px] p-2 rounded-[5px] border-3 border-blue-500' placeholder='Enter your password'/>
                            </div>
                            <button className='max-w-[300px] h-[50px] cursor-pointer bg-blue-500 rounded-[5px] mt-10 hover:bg-blue-300 transition-all duration-300'>
                                <span className='font-bold text-white'>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='ml-[30px]'>
                    <img src={LoginPic} className='w-[500px] h-[500px] rounded-2xl'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login