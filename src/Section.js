import React, { useState } from 'react'
import btnimage from './assets/btnimage.png'
import section from './assets/section.svg'







function Section(props) {
  

  return (
    <div className=' bg-[#AFCACF]   '>
    <div className='bg-[#AFCACF] max-w-[2000px]    mx-auto     '>
        <div className='w-[100%] px-5 sm:px-10 md:px-20 pt-[124px] lg:flex-row lg:justify-between flex flex-col lg:flex '>
            <div className='lg:w-[50%] w-[100%]'>
                <h1 className=' text-[#22252B] sm:text-5xl text-2xl md:text-[55px]  md:leading-[60px] xl:text-[64px] xl:leading-[80px]
                 font-poppins'>{props.h1}</h1>
                 <p className='text-[#754BC9] text-lg sm:text-[24px] leading-[40px] lg:text-[22px] lg:leading-[35px] xl:text-[24px] pt-6 xl:leading-[40px]
                 font-poppinsIT'>
                 {props.p1}
                 </p>
                 <button className='mt-12 mb-28 rounded-full text-white bg-[#22252B] flex px-6 py-[18px] '>{props.btn1} <img className='w-[20px] h-[20px] ml-2' src={btnimage}/></button>

            </div>
            <div className='xl:w-[50%] lg:w-[55%] sm:mt-0 -mt-20 mx-auto'>
                <img className=' h-[475px] w-[672px]' src={section}/>
            </div>
        </div>
    
    </div>
    </div>
  );
}

export default Section;