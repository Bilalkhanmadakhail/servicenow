
import React, { useState } from 'react'
import coma from '../assets/coma.png'
import union from '../assets/Union.png'
import blue1 from '../assets/blue1.png'
import blue2 from '../assets/blue2.png'



function Last(props) {



    return (
        <div className='relative '>
            <div className='absolute bg-[#1A2147]  lg:-top-36 -top-56 rounded-3xl md:w-[90%] xl:w-[80%] sm:mx-[60px]  xl:mx-[130px] lg:flex lg:flex-row flex flex-col'>
                <div className='flex w-[100%] lg:w-[80%]'>
                    <div className='ml-14'><img className='xl:w-20 md:w-20 md:h-14 lg:h-8 mt-10' src={blue1}/></div>
                    <div className='mt-10 ml-14 mr-20'>
                        <p className='text-[22px] leading-[32px] font-poppins text-white'>
                        World Class Security
                        </p>
                        <p className='text-[17px] font-gtPlanner leading-[28px] mt-6 mb-24 text-white'>
                        Experience Matters. We have been building crypto-related projects since 2014 with the highest standards.
                        </p>
                    </div>
                </div>
                <div className='flex w-[100%] lg"w-[50%]'>
                    <div className='ml-14'><img className='xl:w-20 lg:w-20 md:w-20 md:h-14 lg:h-8 mt-10'  src={blue2}/></div>
                    <div className='mt-10 ml-14 mr-20'>
                        <p className='text-[22px] leading-[32px] font-poppins text-white'>
                        World Class Support
                        </p>
                        <p className='text-[17px] font-gtPlanner leading-[28px] mt-6  text-white'>
                        Our experts are here to take you by the hand and answer any questions or concerns from the very beginning.
                        </p>
                        <p className='text-[17px] underline font-gtPlanner leading-[28px] mt-2 mb-24 text-[#4FAD84]'>Book a call</p>
                    </div>
                </div>


            </div>
       <div className='mt-[294px] '>

        <div className='bg-[#F0E4CF] '>
        <div className='pt-[254px]  bg-[#F0E4CF]'>

            <h1 className='lg:text-[72px] md:text-[60px]  sm:text-4xl lg:mt-0 md:mt-28 sm:mt-36 leading-[80px] font-poppins text-[#1A2147] text-center'>Get Started Today! </h1>

        </div>
        <div className=' bg-[#F0E4CF] lg:pl-[150px] sm:px-16 md:flex md:flex-row flex flex-col lg:flex lg:justify-between lg:pr-[150px]'>
            <div className=' lg:w-[40%] sm:w-[100%]'>
                <p className='text-[24px] text-[#1A2147] font-sarif mt-[57px] leading-[36px] text-center'>
                Businesses
                </p>

                <p className='text-[22px] text-[#1A2147] font-gtPlanner mt-[23px] leading-[32px] text-center'>
                It's time to end your contractor payment nightmares and save money by paying in crypto. 
                </p>
                <button className='px-6 py-4 flex justify-center mx-auto text-[16px] mt-[50px] leading-[24px] font-poppins bg-[#4FAD84] rounded-lg text-white '>Pay with Crypto</button>
            </div>

            <div className='lg:w-[40%] sm:w-[100%]'>
                <p className='text-[24px] text-[#1A2147] font-sarif mt-[57px] leading-[36px] text-center'>
                Contractors
                </p>

                <p className='text-[22px] text-[#1A2147] font-gtPlanner mt-[23px] leading-[32px] text-center'>
                Keep more of your money in your pocket and get paid faster (even with global payments) when you get paid in crypto.
                </p>
          
                <button className='px-6 mx-auto flex py-4 text-[16px] mt-[50px] leading-[24px] font-poppins bg-[#8F6FF6] rounded-lg text-white '>Get Paid in Crypto</button>
            </div>
        </div>
    
        <hr className='my-20 mx-[150px]'></hr>
       <div>
        <img className='flex xl:w-[145px] lg:w-[100px] sm:w-[80px] lg:mt-0 sm:-mt-20 mx-auto' src={coma}/>
        <div className='text-center font-sarif sm:text-2xl md:text-4xl xl:text-[65px] mt-14 leading-[72px] text-[#4FAD84]'>
            <p>We didn't expect to use Archway </p><p className='lg:mt-10 mt-5' >for all our contractors so quickly</p>
        </div>
        <p className='mt-[50px] text-[22px]
leading-[32px] text-[#1A2147] font-gtPlanner text-center'>Kirthy Iver</p>
<p className='mt-[15px] text-[22px]
leading-[32px] text-[#1A2147] font-gtPlanner text-center opacity-[0.7] pb-[144px]'>CEO Comico, Game Dev, Germany</p>
       </div>
       </div>

       <div className='flex justify-between font-gtPlanner pb-[62px]'>
        <div className='lg:w-[25%] w-[40%]'>
            <ul className='text-[17px] sm:px-16 lg:pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
                <li  className='opacity-[0.7] pb-[18px]'>Product</li>
                <li  className='pb-[18px]'>For business</li>
                <li className='pb-[18px]' >For contractors</li>
                <li className='pb-[18px]' >For DAOs</li>
                <li  className='pb-[18px]'>About Us</li>
               

            </ul>
        </div >
        <div className='w-[30%] lg:block hidden'>
            <ul className='text-[17px]  lg:pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
                <li  className='opacity-[0.7] pb-[18px]'>Social</li>
                <li  className='pb-[18px]'>Twitter</li>
                <li className='pb-[18px]' > LinkedIn</li>
                
               

            </ul>
        </div>
        <div className='w-[50%]'>
            <ul className='text-[17px] pr-16 lg:pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
           
               
                <li className='pb-[18px]' ><img src={union}/></li>
                <li  className='pb-[18px]'>Pay people in crypto while staying in fiat</li>
               

            </ul>
        </div>
       </div>
       <hr></hr>
       <div className='mx-[130px] flex justify-between mt-6 mb-4'>
        <p className='text-[13px] leading-[26px] opacity-[0.7] text-[#1A2147]'>
        2023, Archway
        </p>
        <p className='text-[13px] leading-[26px] opacity-[0.7] text-[#1A2147]'>
        Terms & Conditions, Privacy
        </p>
       </div>
      
       </div>
       </div>
    )
}
            
export default Last;