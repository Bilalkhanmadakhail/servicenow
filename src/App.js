import React, { useState } from 'react'

import './App.css';
import NavBAR from './mainpage/NavBAR';

import Last from './mainpage/Last'

import About from './pages/About'
import Main from './pages/Main'
import Home from './pages/HomePage'

import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom';
import Demo from './pages/Demo';





function App() {
  

  return (
    <div>
      <BrowserRouter>
        <div className='max-w-[1400px]   mx-auto'>

          <div  className='  mx-auto h-[1179px]' >


            <NavBAR  li1='Use cases' li2='About' li3='Book Demo' btn1='Log In' btn2='Get Started' />
            <Routes>
            <Route path='/' Component={Home} />
              <Route path='/main' Component={Main} />
              <Route path='/about' Component={About} />
              <Route path='/demo' Component={Demo} />
            </Routes>
            <Last/>
    
          </div>



        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;