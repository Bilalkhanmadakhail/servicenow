import React, { useState } from 'react'

import card2 from '../assets/card2.png'
import box7 from '../assets/b7.png'
import box8 from '../assets/b8.png'

import box9 from '../assets/b9.png'
import box11 from '../assets/box11.png'
import center from '../assets/center.png'
import bgimg from '../assets/bgimg.png'





function Card2(props) {



    return (
<div className='mt-20'>
             <div className='lg:mx-12 mx-8 flex flex-col justify-center text-center  text-[#1A2147]  xl:mx-[0px] '>
                <div className=' leading-[42px] font-poppins text-[32px] w-[100%]'>

                <p>
                Benefits
                </p>
                </div>
                <div className='flex justify-center text-2xl lg:mt-0 mt-6 w-[100%]'>
                 <p className='w-[60%] font-gtPlanner mt-10'>
                 Want to turn investor fiat or other funds into crypto to pay your DAO contributors, token holders or other DAOs like you but can’t because of regulation or legal restrictions?
                 </p>
                </div>
            </div>
            <div className=' lg:flex flex   items-center justify-between lg:w-[60%]  flex-col lg:flex-row sm:mx-8 text-center lg:mx-[100px] xl:ml-[250px] xl:mr-[250px]'>
      
          <div className='mt-[80px] w-[100%]   lg:w-[25%]'>
            <img className='pl-[10px] mx-auto' src={box11}/>
            <p className='  mt-16 text-[26px] leading-[32px] font-poppins text-[#313336]'>Crypto
Without Hassle</p>
<p className='mt-4 text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>No crypto on accounting </p>
<p className=' text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>books</p>

          </div>
          <div className='mt-[50px] w-[100%]  lg:w-[25%]'>
            <img className='pl-[10px] mx-auto' src={box7}/>
            <p className='  mt-12 text-[26px] leading-[32px] font-poppins text-[#313336]'>Accounting
Friendly</p>
            <p className='mt-4 text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>For your investors</p>

          </div>
          <div className='mt-[40px] w-[100%]  lg:w-[25%]'>
            <img className='pl-[10px] mx-auto' src={box9}/>
            <p className='  mt-12 text-[26px] leading-[32px] font-poppins text-[#313336]'>No
Restrictions</p>
<p className='mt-4 text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>Skip the regulatory headaches</p>



          </div>
          </div>





          <div className='mt-[90px] xl:mx-[100px] sm:mx-8'>
    <div className='bgbrown md:w-[100%] w-[80%] lg:bg-contain md:bg-cover bg-contain lg:mx-0 items-center flex flex-col justify-center mx-auto  md:h-2000px h-auto'>

            <h1 className='lg:text-[60px] font-poppins sm:text-4xl pt-32 lg:pt-[200px] leading-[68px] font-extrabold text-center #1A2147'>How it works</h1>
            
            <p className='lg:text-[22px] sm:text-[18px] leading-8 font-gtPlanner xl:mt-10 md:mt-5  text-center lg:px-[325px] sm:px-28 text-[#1A2147]'>With Archway Finance you can stay aligned to the principles of your DAO. Receive EUR/GBP fiat funds and turn them into crypto for all your payment needs without any crypto on your books!</p>
              
            <p className='lg:text-[22px] sm:text-[18px] leading-8 font-gtPlanner xl:block hidden  xl:mt-10 md:mt-5  text-center lg:px-[325px] sm:px-28 text-[#1A2147]'>Skip the regulatory nightmare and trust our secure, EU compliant platform to turn fiat into crypto for all your global payment needs.</p>
            
            <button className='bg-[#1A2147] sm:mt-7 xl:mt-14 sm:text-[18px] lg:text-[22px] leading-6 font-poppins text-white rounded-lg flex justify-center mx-auto px-9 sm:py-4 lg:py-6'>Create account</button>
            <div className='lg:mt-20 mt-12 sm:hidden md:block mx-auto flex'> 
            <img className='w-[70%] mx-auto' src={bgimg}/>
            </div>
            <div className='xl:my-16 pb-32 mt-12 mx-auto flex'> 
                <img className='w-[70%] mx-auto' src={center}/>
            </div>
           
          
          
           
          
           

</div>
</div> 
             </div>
           
             
    )
}
            
export default Card2;