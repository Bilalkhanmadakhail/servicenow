
import center from '../assets/center.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import React, { useState } from 'react'



function Student(props) {



    return (

        <div className='bg-[#F0E4CF]'>
                <div className='mt-28 flex justify-center items-center'>
                    <p className='xl:text-[72px] lg:text-[65px] md:text-[55px] font-extrabold xl:leading-[80px] lg:leading-[65px] md:leading-[40px] text-[#1A2147]' >{props.h1}</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-[76px] lg:text-[65px] md:text-[58px] font-normal leading-[80px]  text-[#387B5E]' >{props.h2}</p>
                </div>
                <div className='flex flex-col mt-[39px] justify-center items-center text-center'>
                    <p className='xl:text-[24px] lg:text-[22px] md:text-[20px] font-normal leading-[32px]  text-[#1A2147]' > {props.p1}</p><p className='xl:text-[24px] lg:text-[22px] md:text-[20px] font-normal leading-[32px]  text-[#1A2147]'>{props.p2}</p>
                </div>

                <div className='mt-[85px]'>
                    <div className='hidden xl:block'><img className='absolute w-[144px] h-[108px] left-[136px]  top-[520px]' src={left}/></div>
                    <div className='hidden xl:block'><img className='absolute w-[177px] h-[140px] left-[1037px]  top-[490px]' src={right}/></div>
                    <div className='flex items-center justify-center'>

                        <img className='xl:w-[820px] xl:h-[302px] md:w-[70%]' src={center}/>
                    </div>

                </div>
            
        </div>
            
    )
}
            
export default Student;