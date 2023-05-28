import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './Error';
import Home from './home';
import Navbar from './navbar';
import Register from './Register';
import SingalPageShow from './SingalPageShow';
import UpdateF from './UpdateF';
const Index = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path='/' element={<Home />}></Route>
            <Route  path='/register' element={<Register />}></Route>
            <Route  path='/update' element={<UpdateF />}></Route>
            <Route  path='/view' element={<SingalPageShow />}></Route>
            <Route  path='/update' element={<UpdateF />}></Route>
            <Route  path='view/update' element={<UpdateF />}></Route>
            <Route  path='*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index;
