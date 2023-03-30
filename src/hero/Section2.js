import React, { useState } from 'react'

import card2 from '../assets/card2.png'



function Section2(props) {



    return (
     <div>
<div className='bg-[#EBF3F5]    xl:ml-[100px] xl:mr-[0px]'>
       <div className=' xl:flex xl:justify-between  w-[100%] lg:flex lg:justify-between'>
        <div className='lg:w-[40%] xl:w-[50%]'> 
            <div className='' >
                <button className='py-2 tracking-wider mt-[70px] bg-[#FFFFFF] rounded-md text-[#1A2147] text-[14px] leading-6 text-center px-3'>{props.btn}</button>
            </div>
            <div className='mt-6'> 
                <p className='xl:text-[72px] sm:text-3xl md:text-[45px] lg:leading-[50px] tracking-[-0.04rem]  xl:leading-[80px] text-[#1A2147] font-extrabold'>{props.h1}</p>
            </div>
            <div className='tracking-[-0.04rem]'> 
                <p className='xl:text-[76px] tracking-[-0.04rem] sm:text-[24px] lg:text-[22px] leading-[80px] text-[#1A2147] '>{props.p1}</p><p className='xl:text-[76px] sm:text-[24px] lg:text-[22px] tracking-[-0.04rem] leading-[80px] text-[#1A2147] '>
{props.p2}</p>

<div className='mt-[30px] text-2xl text-[#1A2147] '>
<p >{props.p3}</p>
<p >{props.p4}</p>
</div>

            </div>
           
            <div className='mt-[60px] mb-[100px]'>
                <button className='px-9 py-[22px] sm:text-[22px]  text-[#FFFFFF] border-[1px] border-[#4FAD84] rounded-lg bg-[#1A2147] xl:text-[22px] lg:text-[20px] font-extrabold leading-6'>{props.btn2}</button>
            </div>
        </div>
        

<div className='w-[50%] mt-24'>
    <img className='h-[448px]' src={card2}/>
</div>
       </div>
       



             </div>
            
             </div>
             
    )
}
            
export default Section2;