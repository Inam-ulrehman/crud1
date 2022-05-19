import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Dashboard, Error, Landing, Register } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
