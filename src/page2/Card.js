import React, { useState } from 'react'

import card2 from '../assets/card2.png'
import box7 from '../assets/b7.png'
import box8 from '../assets/b8.png'

import box9 from '../assets/b9.png'
import box10 from '../assets/b10.png'
import center from '../assets/center.png'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'




function Card(props) {



    return (
<div className='mt-20'>
             <div className=' text-[32px] lg:mx-12 mx-8 lg:flex justify-between leading-[42px] text-[#1A2147]  xl:mx-[100px] '>
                <div className='xl:w-[50%] font-poppins lg:w-[30%]'>

                <p>
                Save Money
                </p>
                </div>
                <div className='flex justify-between lg:mt-0 mt-6 xl:w-[40%] lg:w-[47%] w-[100%]'>
                    <button className='text-[20px] px-[20px] font-sarif py-[10px]  w-[45%] leading-[32px] text-[#4FAD84] lg:w-[195px] font-normal bg-[#EDF7F3] rounded-lg'>No monthly fees</button>
                    <button className='text-[20px] px-[20px] font-sarif py-[10px]  w-[45%]  leading-[32px] text-[#8265E0] lg:w-[255px] font-normal bg-[#F4F1FE] rounded-lg'>Low commission ~ 2%</button>
                </div>
            </div>
            <div className=' lg:flex flex   items-center justify-between  flex-col lg:flex-row lg:mx-[100px] mx-8'>
          <div className='mt-[91px] w-[100%]  lg:w-[22%]'>
            <img className='pl-[10px]' src={box7}/>
            <p className='  mt-12 text-[26px]  leading-[27px] font-poppins text-[#313336]'>Accounting
Friendly</p>
<p className='mt-4 text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>Pay invoices using EUR or GBP. <br></br>We deliver crypto to contractors.</p>
<p className=' text-[17px] font-gtPlanner mt-3 leading-[26px] text-[#596062]'>No crypto on accounting books</p>


          </div>
          <div className='mt-[60px] w-[100%]  lg:w-[22%]'>
            <img className='pl-[10px]' src={box8}/>
            <p className='  mt-12 text-[26px] leading-[32px] font-poppins text-[#313336]'>Regulatory Compliance</p>
<p className='mt-4 text-[17px] font-gtPlanner leading-[26px] text-[#596062]'>EU Licensed enjoy peace of mind</p>
<p className=' text-[17px] mt-3 font-gtPlanner leading-[26px] text-[#596062]'>Regulatory compliant</p>

          </div>
          <div className='mt-[50px] w-[100%]  lg:w-[22%]'>
            <img className='pl-[10px]' src={box9}/>
            <p className='  mt-12 text-[26px] leading-[32px] font-poppins text-[#313336]'>No <br></br> Restrictions</p>
<p className='mt-4 font-gtPlanner text-[17px] leading-[26px] text-[#596062]'>Send payments globally</p>


          </div>
          <div className='mt-[85px] w-[100%]  lg:w-[22%]'>
            <img className='pl-[10px]' src={box10}/>
            <p className='  mt-12  text-[26px] leading-[32px] font-poppins text-[#313336]'>Faster
Payments</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Less time to process invoices</p>
<p className='mt-4 text-[17px] leading-[26px] font-gtPlanner text-[#596062]'>Contractors receive their money faster</p>


          </div>
          </div>





          <div className='mt-[90px] xl:mx-[100px] sm:mx-8'>
    <div className='bg md:w-[100%] w-[80%] lg:bg-cover md:bg-cover bg-contain lg:mx-0 items-center flex flex-col justify-center mx-auto  md:h-auto h-auto'>

            <h1 className='lg:text-[60px] sm:text-4xl pt-[200px] leading-[68px] font-poppins text-center #1A2147'>How it works</h1>
            
            <p className='lg:text-[22px] font-gtPlanner sm:text-[18px] leading-8  xl:mt-10 md:mt-5  text-center lg:px-[325px] sm:px-10  text-[#1A2147]'>Archway Finance lets you pay your contractors with crypto using EUR or GBP while keeping crypto off your books. Businesses pay in fiat, contractors get paid in crypto. </p>
            <button className='bg-[#1A2147] sm:mt-7 xl:mt-14 sm:text-[18px] lg:text-[22px] leading-6 font-poppins text-white rounded-lg flex justify-center mx-auto px-9 sm:py-4 lg:py-6'>Create account</button>
            <div className='mt-36 mx-auto flex'> 
                <img className='w-[70%] mx-auto' src={center}/>
            </div>
            <div className='lg:mt-32 md:mt-24 mt-16 lg:px-[200px] text-[#1A2147] px-8 justify-between flex'>
                <div className='w-[28%]'>
                    <img src={one}/>
                    <p className=' mb-[120px] mt-6 font-gtPlanner text-[17px] leading-[26px] text-[#1A2147] '>
                    Contractor creates an invoice and sends it to the business
                    </p>
                </div>

                <div className='w-[28%]'>
                    <img src={two}/>
                    <p className=' mb-[120px] mt-6 font-gtPlanner text-[17px] leading-[26px] text-[#1A2147] '>
                    Business transfers EUR/GBP to Archway banking accounts
                    </p>
                </div>
                <div className='w-[28%]'>
                    <img src={three}/>
                    <p className=' mb-[120px] md:pb-0 font-gtPlanner pb-6 mt-6 text-[17px] leading-[26px] text-[#1A2147] '>
                    Archway accepts fiat payment, exchanges it for crypto and sends it out to the contractor 
                    </p>
                </div>


            </div>
          
          
           
          
           

</div>
</div> 
             </div>
           
             
    )
}
            
export default Card;