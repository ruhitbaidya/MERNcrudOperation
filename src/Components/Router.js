import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/Register'
import SingalPageShow from './pages/SingalPageShow'
import Error from './pages/Error'
import Navbar from "./pages/navbar"
import Update from "./pages/UpdateF"
const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view" element={<SingalPageShow />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view/update" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPage
