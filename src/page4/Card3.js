import React, { useState } from 'react'

import card2 from '../assets/card2.png'
import box1 from '../assets/b5.png'
import box2 from '../assets/b1.png'

import box3 from '../assets/b4.png'
import box4 from '../assets/b6.png'
import center from '../assets/center.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'




function Card3(props) {



    return (
<div className='mt-20'>
            
<div className='lg:mx-12 mx-8 flex flex-col justify-center text-center  text-[#1A2147]  xl:mx-[0px] '>
                <div className=' leading-[42px] font-poppins text-[32px] w-[100%]'>

                <p>
                Benefits
                </p>
                </div>
                <div className='flex justify-center text-2xl font-gtPlanner lg:mt-0 mt-6 w-[100%]'>
                 <p className='w-[50%] mt-10'>
                 With Archway you can accept global payments without restrictions, get paid faster, and pay less in commissions
                 </p>
                </div>
</div>

          
      
          
            <div className=' lg:flex flex   items-center justify-between  flex-col lg:flex-row lg:mx-[60px] mx-8'>
          <div className='mt-[70px] w-[100%]  lg:w-[19%]'>
            <img className='pl-[10px]' src={box1}/>
            <p className='  mt-8 text-[26px]  leading-[27px] font-poppins text-[#313336]'>Faster payments</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>With crypto payments, your money gets in your hands faster. Within 24 hours of your employer sending payment to Archway, we exchange it and send crypto to your wallet.</p>



          </div>
          <div className='mt-[20px] w-[100%]  lg:w-[19%]'>
            <img className='pl-[10px]' src={box2}/>
            <p className='  mt-8 text-[26px] leading-[32px] font-poppins text-[#313336]'>No monthly fees</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Businesses save money with payments, while contractors keep more of their hard-earned money in their pockets.</p>


          </div>
          <div className='mt-[20px] w-[100%]  lg:w-[19%]'>
            <img className='pl-[10px]' src={box3}/>
            <p className='  mt-8 text-[26px] leading-[32px] font-poppins text-[#313336]'>Get paid globally</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Don't miss out on opportunities because of your country or bank situation anymore. Invoice any client, anytime, anywhere in the world.</p>


          </div>
          <div className='mt-[85px] w-[100%]  lg:w-[19%]'>
            <img className='pl-[10px]' src={box4}/>
            <p className='  mt-12 text-[26px] leading-[32px] font-poppins text-[#313336]'>Direct to your wallet</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>We are a non-custodial solution. You retain full ownership and control over your money at all times. Crypto is sent to your cold wallet or the hot wallet of your choice.</p>



          </div>
          </div>





          <div className='mt-[90px] xl:mx-[100px] sm:mx-8'>
    <div className='bg md:w-[100%] w-[80%] lg:bg-cover md:bg-cover bg-contain lg:mx-0 items-center flex flex-col justify-center mx-auto  md:h-auto h-auto'>

            <h1 className='lg:text-[60px] sm:text-4xl pt-[200px] leading-[68px] font-poppins text-center #1A2147'>How it works</h1>
            
            <p className='lg:text-[22px] font-gtPlanner sm:text-[18px] leading-8  xl:mt-10 md:mt-5  text-center lg:px-[300px] sm:px-10  text-[#1A2147]'>We provide you with a EUR/GBP bank account, your employer sends the payment, then we quickly exchange the money and send the crypto to your wallet. </p>
<p className='lg:text-[22px] mt-4 sm:text-[18px] font-gtPlanner leading-8  xl:mt-10 md:mt-5  text-center lg:px-[280px] sm:px-10  text-[#1A2147]'>
Stop paying high fees on platforms like Upwork, Paypal and Western Union. Keep more of your money by getting paid in crypto with Archway today!</p>
            <button className='bg-[#8F6FF6] sm:mt-7 xl:mt-14 sm:text-[18px] lg:text-[22px] leading-6 font-poppins text-white rounded-lg flex justify-center mx-auto px-9 sm:py-4 lg:py-6'>Create account</button>
            <div className='mt-36 mx-auto flex'> 
                <img className='w-[70%] mx-auto' src={center}/>
            </div>
            <div className='lg:mt-32 md:mt-24 mt-16 lg:px-[200px] font-gtPlanner px-8 justify-between flex'>
                <div className='w-[28%]'>
                    <img src={one}/>
                    <p className=' mb-[120px] mt-6 text-[17px] font-gtPlanner leading-[26px] text-[#1A2147] '>
                    Contractor creates an invoice and sends it to the business
                    </p>
                </div>

                <div className='w-[28%]'>
                    <img src={two}/>
                    <p className=' mb-[120px] mt-6 text-[17px] leading-[26px] text-[#1A2147] '>
                    Business transfers EUR/GBP to Archway banking accounts
                    </p>
                </div>
                <div className='w-[28%]'>
                    <img src={three}/>
                    <p className=' mb-[120px] md:pb-0 pb-6 mt-6 text-[17px] leading-[26px] text-[#1A2147] '>
                    Archway accepts fiat payment, exchanges it for crypto and sends it out to the contractor 
                    </p>
                </div>


            </div>
          
          
           
          
           

</div>
</div> 
             </div>
           
           
    )
}
            
export default Card3;