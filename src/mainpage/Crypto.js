
import React, { useState } from 'react'

import box1 from '../assets/b1.png'
import box2 from '../assets/b2.png'
import box3 from '../assets/b3.png'
import box4 from '../assets/b4.png'
import box5 from '../assets/b5.png'
import box6 from '../assets/b6.png'




function Crypto(props) {



    return (
        <div className='mt-[120px]'>
            <div className=' text-[32px] font-poppins leading-[42px] text-[#1A2147] font-extrabold xl:mx-[130px] sm:mx-16'>
                <p>
                Why Pay in Crypto?
                </p>
            </div>
            <div className=' md:flex flex flex-col md:flex-row xl:pl-[130px] sm:px-16  xl:pr-[250px] md:justify-between'>
          <div className='mt-[91px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box1}/>
            <p className=' font-poppins mt-12 text-[22px] leading-[32px] font-extrabold text-[#313336]'>No monthly fees</p>
<p className='mt-4 font-gtPlanner text-[17px] leading-[26px] text-[#596062]'>Businesses save money with payments, while contractors keep more of their hard earned money in their pocket.</p>


          </div>
          <div className='mt-[80px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box2}/>
            <p className='  mt-12 text-[22px] font-poppins leading-[32px] font-extrabold text-[#313336]'>Easy setup</p>
<p className='mt-4 text-[17px] font-gtPlanner  leading-[26px] text-[#596062]'>So easy to use even grandma could do it! Full onboarding support available for both businesses and contractors.</p>


          </div>
          <div className='mt-[85px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box3}/>
            <p className='  mt-12 text-[22px] leading-[32px] font-poppins text-[#313336]'>Fiat payments for businesses</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner  text-[#596062]'>Enjoy the comfort of paying crypto without having it on your books. Fiat Payments available  in: EUR/USD/GBP</p>


          </div>
          </div>
          <div className='mt-[70px] sm:mx-16  flex xl:mx-[130px]'>
            <button className='px-6 py-4 text-[16px] leading-[24px] font-poppins bg-[#4FAD84] rounded-lg text-white '>Pay with crypto</button>
            <button className='px-6 py-4 text-[16px]   leading-[24px] border-[#4FAD84] font-poppins text-[#4FAD84] rounded-lg border-[1px] ml-[10px] '>Learn more</button>
          </div>


          <div className=' text-[32px] mt-[120px] leading-[42px] text-[#1A2147] font-poppins sm:mx-16 xl:mx-[130px]'>
                <p>
                Why Get Paid in Crypto?
                </p>
            </div>
            <div className=' md:flex md:flex-row flex flex-col xl:pl-[130px] sm:px-16 xl:pr-[250px] md:justify-between'>
          <div className='mt-[80px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box4}/>
            <p className='  mt-12 text-[22px] leading-[32px] font-poppins text-[#313336]'>Global Clients</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Don't miss out on opportunities because of your country or bank situation anymore. Invoice any client, anytime, anywhere in the world.</p>


          </div>
          <div className='mt-[100px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box5}/>
            <p className='  mt-12 text-[22px] leading-[32px] font-poppins text-[#313336]'>Direct to your wallet</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>We are a non-custodial solution. You retain full ownership and control over your money at all times. Crypto is sent to your cold wallet or the hot wallet of your choice.</p>


          </div>
          <div className='mt-[95px] w-[100%]  md:w-[28%]'>
            <img className='pl-[10px]' src={box6}/>
            <p className='  mt-12 text-[22px] leading-[32px] font-poppins text-[#313336]'>Fiat payments for businesses</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Enjoy the comfort of paying crypto without having it on your books. Fiat Payments available  in: EUR/USD/GBP</p>


          </div>
          </div>
          <div className='mt-[70px]  flex sm:mx-16 xl:mx-[130px]'>
            <button className='px-6 py-4 text-[16px] font-poppins leading-[24px] font-extrabold bg-[#8F6FF6] rounded-lg text-white '>Pay with crypto</button>
            <button className='px-6 py-4 text-[16px] font-poppins leading-[24px] border-[#8F6FF6] font-extrabold text-[#8F6FF6] rounded-lg border-[1px] ml-[10px] '>Learn more</button>
          </div>
 </div>
    )
}
            
export default Crypto;