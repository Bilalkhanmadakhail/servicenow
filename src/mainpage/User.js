
import React, { useState } from 'react'
import card from '../assets/cardd.svg'
import bg from '../assets/bg (1).png'




function User(props) {



    return (
        <div >
<div className='bg-[#EBF3F5] border-2 absolute top-[955px] sm:mx-10  3xl:ml-20 lg:mx-16 xl:ml-[130px]  xl:mr-[130px]   border-[#FFFFFF] rounded-3xl'>
       <div className=' xl:flex xl:justify-start  w-[100%] lg:flex lg:justify-between'>
        <div className='xl:ml-20 lg:ml-10 sm:ml-16 lg:w-[40%] xl:w-[50%]'> 
            <div className='' >
                <button className='py-2 mt-[70px] font-gtPlanner bg-[#FFFFFF] rounded-md text-[#1A2147] text-[14px] leading-6 text-center px-3'>{props.busines}</button>
            </div>
            <div className='mt-10'> 
                <p className='xl:text-[60px] sm:text-3xl font-poppins md:text-[45px] lg:leading-[50px]  xl:leading-[68px] text-[#1A2147] font-extrabold'>{props.crypto}</p>
            </div>
            <div className='mt-10 '> 
                <p className='xl:text-[24px] sm:text-[24px] lg:text-[22px] leading-[36px] text-[#1A2147] '>{props.p3}</p><p className='xl:text-[24px] sm:text-[24px] lg:text-[22px] leading-[36px] text-[#1A2147]  '>
{props.p4}</p>
            </div>
            <div className='mt-[50px]'>
                <button className='px-9 py-[22px] font-poppins bg-[#4FAD84] rounded-lg text-[#FFFFFF] xl:text-[22px] sm:text-[22px]  lg:text-[20px] font-extrabold leading-6'>{props.btn3}</button>
            </div>
            <div className='mt-[20px]'>
                <button className='px-9 py-[22px] font-poppins sm:text-[22px]  text-[#4FAD84] border-[1px] border-[#4FAD84] rounded-lg bg-[#FFFFFF] xl:text-[22px] lg:text-[20px] font-extrabold leading-6'>{props.btn4}</button>
            </div>
        </div>
        <div  className=' lg:w-[50%] sm:w-[80%] sm:mx-auto mt-[70px]'>
            <img className='lg:w-[419px] lg:h-[387px]  sm:w-[100%] ' src={card}/>
        </div>

       </div>
        <div className='flex mx-auto justify-center'>
            <img className='xl:w-[940px] sm:w-[80%]' src={bg}/>
        </div>
        <div className='text-center justify-center mt-[60px] mb-[83px]'>
            <p className='xl:text-[32px] sm:text-[26px] leading-10 font-medium text-[#1A2147]'>
            Archway allows overseas contractors to issue </p><p className='xl:text-[32px] sm:text-[26px] leading-10 font-medium text-[#1A2147]'>invoices with EU bank details
            </p>
        </div>





             </div>
<div>
    <div className='h-[693px]'>
        <img className='mt-[111px]'/>
        <h1 className='mt-[93px] text-[#1A2147] text-center font-poppins leading-[52px] text-4xl'>API for Marketplaces</h1>

    </div>
</div>
             </div>
    )
}
            
export default User;