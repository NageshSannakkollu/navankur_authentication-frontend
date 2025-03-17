import React from 'react'

import "./index.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='nav_main_container'>   
        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1742107003/navankurlogo_te3fvv.svg' alt='logo' className='logo_img'/>
        <ul className='nav_links_list'>
            <li>
                <Link to="/contact-us">
                    <button type='button' className='contact_us_btn'>ContactUs</button>
                </Link>
            </li>
            <li>
                <Link to="/login">
                    <button type='button' className='login_btn'>Login</button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header