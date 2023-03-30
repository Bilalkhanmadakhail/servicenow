
import logo from '../assets/logo.png'
import dropDown from '../assets/dropdown.png'
import React, { useState } from 'react'



function Navbar(props) {
  

  
    return (

    <div className=' '>
       <div className='flex justify-between font-face-GT sm:px-8 lg:px-12 xl:px-[100px]'>
        <div className='pt-6  '>
            <img className='xl:w-48 xl:h-12 lg:w-40 lg:h-10 sm:w-32 sm:h-9' src={logo}/>
        </div>
        <div>
            <ul className='md:flex pt-9 font-GT hidden font-[400] sm:text-[16px] font-face-GT leading-5 lg:text-[18px] xl:text-[20px] font'>
                <li className='flex xl:pl-11 lg:pl-10 sm:pl-8' > <p>{props.li1}</p> <img className='w-[10px] h-[6px] ml-[11px] my-[10px]' src={dropDown}/> </li>
                <li className='xl:pl-11 lg:pl-10 sm:pl-8'> <p>{props.li2}</p></li>
                <li className='xl:pl-11 lg:pl-10 sm:pl-8'> <p>{props.li3}</p> </li>
            </ul>
        </div>
        <div className='font-extrabold sm:text-[14px] xl:text-[16px] pt-6 leading-6'>
            <button className='text-[#1A2147] rounded-lg xl:w-[96px] sm:w-[80px] sm:h-10 xl:h-12 border-[1px] border-[#8265E0]' >{props.btn1}</button>
            <button className='ml-3 only: text-[#FFFFFF] bg-[#1A2147]  sm:h-10 xl:h-12 sm:w-[130px] xl:w-[142px] rounded-lg'>{props.btn2}</button>
        </div>
       </div>
    </div>

    )
}

export default Navbar;