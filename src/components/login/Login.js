import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate();
    const loginInfo = {
        email:'bheem@gmail.com',
        password:'12345'
    }

    const[email, setEmail] = useState('');
    const[emailError, setEmailerror] = useState('');
    const[password, setPassword] = useState('');
    const[passwordError, setPassworderror] = useState('');
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setEmailerror('');
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
        setPassworderror('');
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (loginInfo.email !== email){
            setEmailerror('Please check your email');
        } else if(loginInfo.password !== password){
            setPassworderror('Please check your password');
        }else{
            navigate("/home")
        }
        
    }

  return (
    <div className='login-page'>
        <div className='banner-section'>
            <img src="/loginImage.webp" className='banner-image' alt="banner" />
            <div className='banner-text-container login-section'>
                <p className='banner-text'>Always the ride you want</p>
                <p className='banner-text-1'>Login to continue your ride...</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            placeholder="Enter email" 
                            className='banner-inputfield'
                            onChange={handleEmail}
                        />
                        <p className='email-error'>{emailError}</p>
                        
                    </div>
                    <div>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            placeholder="Enter password"
                            className='banner-inputfield' 
                            onChange={handlePassword}
                        />
                        <p className='email-error'>{passwordError}</p>
                    </div>
                    <div className='d-flex login-center'>
                        <button className='button button-schedule login-button'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
