import React, { useState } from 'react'

import card4 from '../assets/card4.png'



function Section4(props) {



    return (
     <div>
<div className='lg:mx-12 mx-8   xl:pl-[50px] '>
       <div className=' lg:flex lg:justify-between lg:flex-row   w-[100%] flex flex-col'>
        <div className='lg:w-[50%] w-[100%] xl:w-[45%]'> 
            <div className='' >
                <button className='py-2 tracking-wider font-gtPlanner mt-[70px] bg-[#FFFFFF] rounded-md text-[#1A2147] text-[14px] leading-6 text-center px-3'>{props.btn}</button>
            </div>
            <div className='mt-6'> 
                <p className='xl:text-[65px] sm:text-[60px]  sm:leading-[50px] tracking-[-0.04rem]  xl:leading-[70px] text-[#1A2147] font-poppins'>{props.h1}</p>
                <p className='xl:text-[65px] sm:text-[60px]  sm:leading-[50px] tracking-[-0.04rem]  xl:leading-[70px] text-[#1A2147] font-poppins'>{props.h2}</p>
            </div>
            <div className='lg:flex-col lg:flex font-sarif  sm:mt-5 lg:mt-0 flex-row flex tracking-[-0.04rem]'> 
                <p className='xl:text-[76px] mt-6 tracking-[-0.04rem] sm:text-5xl md:leading-[60px]   md:text-[55px] leading-[80px] text-[#8265E0] '>{props.p1}</p>


            </div>
           
<div className='mt-[30px] lg:flex-col lg:flex  font-gtPlanner flex-row flex text-2xl text-[#1A2147] '>
<p >{props.p3}</p>
<p className='sm:pl-2 lg:pl-0'>{props.p4}</p>
</div>
            <div className='mt-[60px] mb-[100px]'>
                <button className='px-9 py-[22px] sm:text-[22px]  text-[#FFFFFF] border-[1px] border-[#8265E0] rounded-lg bg-[#8265E0] xl:text-[22px] lg:text-[20px] font-poppins leading-6'>{props.btn2}</button>
            </div>
        </div>
        

<div className='lg:w-[50%] w-[100%] flex lg:pb-0 sm:pb-10 justify-center lg:mx-0 mx-auto mt-6 lg:mt-24'>
    <img className='lg:h-[448px] h-auto lg:w-auto w-[60%]' src={card4}/>
</div>
       </div>
       



             </div>
            
             </div>
             
    )
}
            
export default Section4;