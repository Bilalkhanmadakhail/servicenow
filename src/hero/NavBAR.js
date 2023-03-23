
import logo from '../assets/logo.png'
import dropDown from '../assets/dropdown.png'
import React, { useState } from 'react'



function NavBar(props) {
  

  
    return (

    <div className=''>
       <div className='flex justify-between font-face-GT lg:px-10 md:px-5  xl:pl-10 xl:pr-16'>
        <div className='pt-6  '>
            <img className='xl:w-48 xl:h-12 lg:w-40 lg:h-10 md:w-32 md:h-9' src={logo}/>
        </div>
        <div>
            <ul className='flex pt-9 font-[400] md:text-[16px] font-face-GT leading-5 lg:text-[18px] xl:text-[20px] font'>
                <li className='flex xl:pl-11 lg:pl-10 md:pl-8' > <p>{props.li1}</p> <img className='w-[10px] h-[6px] ml-[11px] my-[10px]' src={dropDown}/> </li>
                <li className='xl:pl-11 lg:pl-10 md:pl-8'> <p>{props.li2}</p></li>
                <li className='xl:pl-11 lg:pl-10 md:pl-8'> <p>{props.li3}</p> </li>
            </ul>
        </div>
        <div className='font-extrabold md:text-[14px] xl:text-[16px] pt-6 leading-6'>
            <button className='text-[#8265E0] rounded-lg xl:w-[96px] md:w-[80px] md:h-10 xl:h-12 border-[1px] border-[#8265E0]' >{props.btn1}</button>
            <button className='ml-3 only: text-[#FFFFFF] bg-[#8265E0]  md:h-10 xl:h-12 md:w-[130px] xl:w-[142px] rounded-lg'>{props.btn2}</button>
        </div>
       </div>
    </div>

    )
}

export default NavBar;