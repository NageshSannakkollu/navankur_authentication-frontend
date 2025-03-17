import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from 'axios'

import "./index.css"
const ResetPasswordPage = () => {
    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [showErrorMessage,setShowErrorMessage] = useState(false)

    const {id} = useParams()
    // console.log("Id:",id)
    const navigate = useNavigate()

    const resetPasswordHandler = async(event) =>{
        event.preventDefault()
        if(newPassword !== confirmPassword){
          setErrorMessage("Confirm password didn't match!!")
          setShowErrorMessage(true)
        }
        const newDetails = {newPassword,confirmPassword}
        console.log("newDetails:",newDetails,id)
        const response = await axios.post(`https://navankur-authentication-backend.onrender.com/api/reset-password/${id}`,newDetails)
        if(response.data.success){
          toast.success(response.data.message)
          navigate("/login")
        }
        else{
          toast.error(response.data.message)
        }

    }
    
    return (
    <div className='login_main_container'>
        <form className='login_form_container' onSubmit={resetPasswordHandler}>
        <h1 className='login_title'>Reset Password</h1>
            <h4>Enter new password</h4>
            <input type='text' name='newPassword' placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)} className='create_input_form'/>
            <h4>Confirm password</h4>
            <input type='password' name='confirmPassword' placeholder="Enter confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className='create_input_form'/>
            <br/>
            <button type="submit" className='login_button'>Submit</button>
            {showErrorMessage && <p className="show_error_msg">{errorMessage}*</p>}
        </form>
    </div>
  )
}

export default ResetPasswordPage