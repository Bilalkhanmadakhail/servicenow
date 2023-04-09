import React, { useState } from 'react'
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3'
import Section4 from './Section4';
import './App.css';
// import NavBAR from './mainpage/NavBAR';

// import Last from './mainpage/Last'

// import About from './pages/About'
// import Main from './pages/Main'
// import Home from './pages/HomePage'

// import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom';
// import Demo from './pages/Demo';





function App() {
  

  return (
    <div>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}

      <Section h1="Become a part of the growth revolution" p1='A workplace of innovative thinkers who share a passion for unlocking the secrets of business growth. We want to unlock the true you.' btn1='Apply Now'/>
      <Section1 h2='Our Mission' p2='“To revolutionize business and economic growth and broadcast it to the world.”' para1='We strive to be much more than just a software, technology, or data company. Yes - each of those are incredibly powerful tools for changing the lives of our local-service small business customers and partners, but they alone aren’t enough to truly innovate on a centuries old industry. To revolutionize on how we help businesses grow and scale, we have to do much more than simply provide technology and know-how. We have to enable our customers with anything and everything they may need to take their businesses to the next level, whether it be technology-based or otherwise.  ' para2='From community building, to industry panels, to global events, we take offline learning and bring them online.' para3='Above all, we are committed to putting business growth above all else and are honored to support the hardworking business owners and partners who are driving our economy forward.'/>
      <Section2 li1='Traits of A players' li2='You have an unmatched work ethic.' li3='You have an outstanding approach to creative problem solving.' li4='You’re an exceptional team player.' li5='You have a burning desire to help change the world.' h3='Who should work at Growthware?' p='Be yourself, be an individual, be the best version of yourself. Growthware is a team sport, but great ideas and true innovation can come from anywhere and anyone. No matter your background or role, unlock your mind - our customers are counting on you.'/>
      <Section3 p='Working with us ' h4='Perks' p1='16” Macbook Pro' p2='Remote HQ' p3='Health Insurance' p4='401k Match ' p5='Classpass Membership' p6='Flexible PTO' p7='Growthware swag' p8='Stock Options'/>
      <Section4 slect1='Department' slect2='Position' h1='Full Stack Software Engineer' span1='Engineering' span2='Principal L6' span3='Remote' p1='Responsible for designing, developing, and deploying software applications across the full stack of web technologies...' p='Learn More' h2='Product Marketing Manager' span4='Marketing' span5='Marketing Manager' span6='Dallas, TX' p2='Responsible for developing marketing plans and strategies for specific products or product lines, including conducting...'/>
    </div>

  );
}

export default App;