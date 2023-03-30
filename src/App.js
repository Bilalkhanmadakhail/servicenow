import React, { useState } from 'react'

import './App.css';
import NavBAR from './hero/NavBAR';
import Navbar from './hero/Navbar2';
import Student from './hero/Student'
import User from './hero/User'
import Section from './section/Section'
import Crypto from './section/Crypto'
import Last from './section/Last'
import Section2 from './hero/Section2'
import Section3 from './hero/section3'
import Card from './hero/Card';
import Card2 from './hero/Card2';






function App() {


  return (
    <div>
    <div className='max-w-[1400px]   mx-auto'>
      
    <div className='bg-[#F0E4CF]  mx-auto h-[1179px]' >
         

      <NavBAR li1='Use cases' li2='About' li3='Book Demo' btn1='Log In' btn2='Get Started'/>
      <Student h1='Pay people in crypto' h2='while staying in fiat' p1='No crypto on accounting books for businesses.' p2='Contractors paid globally, hassle-free.'/>
     

    </div>
    <User busines='FOR BUSINESSES' crypto='Pay in Crypto, Stay in Fiat' p3='Contractors paid globally' p4='without any crypto on your books' btn3='Pay with crypto' btn4='Learn more'/>
    <Section/>
    <Crypto/>
    <Last/>
    </div>
    <div className='page2' >
    <div className='bg-[#EBF3F5]'>
    <Navbar li1='Use cases' li2='About' li3='Book Demo' btn1='Log In' btn2='Get Started'/>
    <Section2 btn='For Businesses' p3='Pay in crypto, stay in fiat.'
p4='No crypto on your books.' btn2='Create account' p1='paying overseas ' p2='contractors' h1='Save money'/>
    </div>
    <Card/>
    <Last/>
    </div>
    <div className='page3'>
      <div className='bg-[#FAF8F2]'>
      <Navbar li1='Use cases' li2='About' li3='Book Demo' btn1='Log In' btn2='Get Started'/>
      <Section3 btn='For DAO' p3='Receive fiat then send payments in crypto without having crypto on your books' h1='Turn fiat' h2=' into crypto'
 btn2='Create account' p1='with your DAO' p2='' />
      </div>
      <Card2/>
      <Last/>
      
    </div>
    </div>


  );
}

export default App;