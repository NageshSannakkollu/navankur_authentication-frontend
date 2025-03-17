import axios from 'axios'
import React, { useState } from 'react'

const ResetEmailPage = () => {
    const [email,setEmail] = useState('')

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const submitEmailHandler = async(event) => {
        event.preventDefault()
        const userEmail = {email}
        const response = await axios.post("https://navankur-authentication-backend.onrender.com/api/reset",userEmail)
        console.log("Email Response",response)
    }

  return (
    <div className='login_main_container'>
     <form className='login_form_container' onSubmit={submitEmailHandler}>
        <h2 className='login_title'>Reset Form</h2>
        <p className='login_labels'>Email Address</p>
        <input type='email' placeholder='Enter your email' className='create_input_form' onChange={onChangeEmail} required/>
        <br/>
        <button type="submit" className='login_button'>Send</button>
    </form>
    </div>
  )
}

export default ResetEmailPage