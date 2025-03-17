import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='contact_us_container'>
        <h1>Page Not Found</h1>
        <Link to="/">
            <p>Home</p>
        </Link>
    </div>
  )
}

export default NotFoundPage