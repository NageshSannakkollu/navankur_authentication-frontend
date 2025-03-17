import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios"


import "./index.css"
const RegisterPage = () => {
    const [values,setValues] = useState({username:"",email:"",password:"",mobile:9087654321})


    const navigate = useNavigate()

    const registerHandler = async(event) => {
        event.preventDefault()
        const response = await axios.post("http://localhost:3026/api/register",values)
        if(response.data.success){
            toast.success(response.data.message)
            navigate("/login")

        }else{
             toast.error(response.data.message)
        }
    }
  return (
    <div className='login_main_container'>
        <form className='login_form_container' onSubmit={registerHandler}>
            <h1 className='login_title'>Create Account</h1>
            <p className='login_labels'>User Name</p>
            <input type='text' placeholder='Enter username' className='create_input_form' onChange={e => setValues({...values,username:e.target.value})} required/>
            <p className='login_labels'>Email Address</p>
            <input type='email' placeholder='Enter your email' className='create_input_form' onChange={e => setValues({...values,email:e.target.value})} required/>
            <p className='login_labels'>Password</p>
            <input type= 'password' placeholder='Enter password' className='create_input_form' onChange={e => setValues({...values,password:e.target.value})} required/>
            <p className='login_labels'>Mobile</p>
            <input type='number' placeholder='Enter contact number' className='create_input_form' onChange={e => setValues({...values,mobile:e.target.value})}/>
            <br/>
            <button type="submit" className='login_button'>SignUp</button>
            <p className='dont_have_an_acc_title'>Already Registered?<Link to="/login"> <span className='signup_link'>SignIn</span></Link></p>
        </form>
    </div>
  )
}

export default RegisterPage