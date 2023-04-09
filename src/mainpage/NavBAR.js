
import logo from '../assets/logo.png'
import dropDown from '../assets/dropdown.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function NavBAR(props) {
   
    const location = useLocation();
   
  
    const [navBg, setNavBg] = React.useState("#F0E4CF");
    React.useEffect(() => {
        if (window.location.pathname === "/demo") {
          setNavBg("#F4F1FE");
        } 
        else if (window.location.pathname === "/main") {
            setNavBg("#EBF3F5");
          }
          else if
         (window.location.pathname === "/about") {
            setNavBg("#FAF8F2");
          }
        else {
          setNavBg('#F0E4CF')
        }
      }, [location]);
  
  
  
  
  

  
    return (
     

    <div style={{ backgroundColor: navBg }} className=' '>
         <div className='flex justify-between font-face-GT lg:px-10 sm:px-5  xl:pl-10 xl:pr-16'>
        <div className='pt-6  '>
           <Link to={'/'}><img className='xl:w-48 xl:h-12 lg:w-40 lg:h-10 sm:w-32 sm:h-9' src={logo}/></Link> 
        </div>
        <div>
            <ul className='md:flex gtPlanner  pt-9 font-gtPlanner hidden font-[400] sm:text-[16px] font-face-GT leading-5 lg:text-[18px] xl:text-[20px] font'>
                <li className='flex xl:pl-11 lg:pl-10 sm:pl-8' ><Link to={'/main'}> <p>{props.li1}</p> </Link><img className='w-[10px] h-[6px] ml-[11px] my-[10px]' src={dropDown}/> </li>
                <li className='xl:pl-11 lg:pl-10 sm:pl-8'> <Link to={'/about'}><p>{props.li2}</p></Link></li>
                <li className='xl:pl-11 lg:pl-10 sm:pl-8'> <Link to={'/demo'}><p>{props.li3}</p> </Link> </li>
            </ul>
        </div>
        <div className='font-extrabold sm:text-[14px] xl:text-[16px] pt-6 leading-6'>
            <button className='text-[#8265E0] font-poppins rounded-lg xl:w-[96px] sm:w-[80px] sm:h-10 xl:h-12 border-[1px] border-[#8265E0]' >{props.btn1}</button>
            <button className='ml-3 only: font-poppins text-[#FFFFFF] bg-[#8265E0]  sm:h-10 xl:h-12 sm:w-[130px] xl:w-[142px] rounded-lg'>{props.btn2}</button>
        </div>
       </div>
    </div>
   
    )
}

export default NavBAR;