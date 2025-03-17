import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import RegisterPage from './component/RegisterPage'
import ResetEmailPage from './component/ResetEmailPage'
import ResetPasswordPage from './component/ResetPasswordPage'
import ContactUsPage from './component/ContactUsPage'
import NotFoundPage from './component/NotFoundPage'

const App = () => (
  <BrowserRouter>
   <ToastContainer position='top-center' autoClose={500} hideProgressBar={true} transition={Slide}/>
    <Routes>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/reset-email" element={<ResetEmailPage/>}/>
      <Route exact path="/reset-password/:id" element={<ResetPasswordPage/>}/>
      <Route exact path='/contact-us' element={<ContactUsPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </BrowserRouter>
)
export default App