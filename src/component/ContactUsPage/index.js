import React from 'react'

import "./index.css"
import { Link } from 'react-router-dom'
const ContactUsPage = () => {
  return (
    <div className='contact_us_container'>
        <h1>Contact Us Page</h1>
        <Link to="/">
            <p>Home</p>
        </Link>
    </div>
  )
}

export default ContactUsPage