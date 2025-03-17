import React, { useState } from 'react'
import { BiShow,BiHide } from "react-icons/bi";
import Cookies from "js-cookie"
import axios from "axios"


import "./index.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const LoginPage = () => {
    const [showHidePassword,setShowHidePassword] = useState(false)
    const [checkboxRemind,setCheckboxRemind] = useState(false)
    const [values,setValues] = useState({email:"",password:""})
    const showHidePasswordClass = showHidePassword ? <BiShow/> : <BiHide/>
    const clickOnShowPassword = () => {
        setShowHidePassword(!showHidePassword)
    }
    const passwordClass = showHidePassword ? "text":"password";

    const clickOnCheckbox = () => {
        setCheckboxRemind(!checkboxRemind)
    }
    // console.log("checkboxRemind:",checkboxRemind)
    const navigate = useNavigate()

    const loginHandler = async(event) => {
        event.preventDefault()
        const response = await axios.post("https://navankur-authentication-backend.onrender.com/api/login",values)
        Cookies.set("jwt_token",response.data.jwtToken)
        if(response.data.success){
            toast.success("Login Success!")
            navigate("/")

        }
        toast.error(response.data.message)
        
    }
  return (
    <div className='login_main_container'>
        <form className='login_form_container' onSubmit={loginHandler}>
            <div  className='check_box_remind_me'>
                <h4>Welcome back!</h4>
                <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1742114531/1f44b_color_tjgoch.png' alt='hello' className='hello_image'/>
            </div>
            <h1 className='login_title'>Login to your Account</h1>
            <p className='login_labels'>Email Address</p>
            <input type='email' placeholder='Enter your email' className='input_form' onChange={e => setValues({...values,email:e.target.value})} required/>
            <p className='login_labels'>Password</p>
            <div className='password_show_hide_container'>
                <input type= {`${passwordClass}`} placeholder='Enter password' className='password_input_form' onChange={e => setValues({...values,password:e.target.value})} required/>
                <p onClick={clickOnShowPassword}>{showHidePasswordClass}</p>
            </div>
            <div className='check_box_remind_forgot_password'>
            <div className='check_box_remind_me'>
                <input type='checkbox' className='checkbox' id="checkbox" onClick={clickOnCheckbox}/>
                <label htmlFor='checkbox'>Remind Me</label>
            </div>
            <Link to="/reset-email">
                <button type='button' className='forgot_password'>Forgot Password?</button>
            </Link>
            </div>
            <button type="submit" className='login_button'>Continue</button>
            <p className='dont_have_an_acc_title'>Don’t have an account?<Link to="/register"> <span className='signup_link'>Signup</span></Link></p>
        </form>
    </div>
  )
}

export default LoginPage