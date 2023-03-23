
import React, { useState } from 'react'
import coma from '../assets/coma.png'
import union from '../assets/Union.png'



function Last(props) {



    return (
       <div className='mt-[294px] '>
        <div className='bg-[#F0E4CF] '>
        <div className='pt-[254px] bg-[#F0E4CF]'>

            <h1 className='text-[72px] leading-[80px] font-extrabold text-[#1A2147] text-center'>Get Started Today! </h1>

        </div>
        <div className=' bg-[#F0E4CF] pl-[150px] flex justify-between pr-[150px]'>
            <div className=' w-[40%]'>
                <p className='text-[24px] text-[#1A2147] mt-[57px] leading-[36px] text-center'>
                Businesses
                </p>

                <p className='text-[22px] text-[#1A2147] mt-[23px] leading-[32px] text-center'>
                It's time to end your contractor payment nightmares and save money by paying in crypto. 
                </p>
                <button className='px-6 py-4 flex justify-center mx-auto text-[16px] mt-[50px] leading-[24px] font-extrabold bg-[#4FAD84] rounded-lg text-white '>Pay with Crypto</button>
            </div>

            <div className=' w-[40%]'>
                <p className='text-[24px] text-[#1A2147] mt-[57px] leading-[36px] text-center'>
                Contractors
                </p>

                <p className='text-[22px] text-[#1A2147] mt-[23px] leading-[32px] text-center'>
                Keep more of your money in your pocket and get paid faster (even with global payments) when you get paid in crypto.
                </p>
          
                <button className='px-6 mx-auto flex py-4 text-[16px] mt-[50px] leading-[24px] font-extrabold bg-[#8F6FF6] rounded-lg text-white '>Get Paid in Crypto</button>
            </div>
        </div>
    
        <hr className='my-20 mx-[150px]'></hr>
       <div>
        <img className='flex mx-auto' src={coma}/>
        <div className='text-center text-[65px] mt-14 leading-[72px] text-[#4FAD84]'>
            <p>We didn't expect to use Archway </p><p>for all our contractors so quickly</p>
        </div>
        <p className='mt-[50px] text-[22px]
leading-[32px] text-[#1A2147] text-center'>Kirthy Iver</p>
<p className='mt-[15px] text-[22px]
leading-[32px] text-[#1A2147] text-center opacity-[0.7] pb-[144px]'>CEO Comico, Game Dev, Germany</p>
       </div>
       </div>

       <div className='flex justify-between pb-[62px]'>
        <div className='w-[20%]'>
            <ul className='text-[17px] pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
                <li  className='opacity-[0.7] pb-[18px]'>Product</li>
                <li  className='pb-[18px]'>For business</li>
                <li className='pb-[18px]' >For contractors</li>
                <li className='pb-[18px]' >For DAOs</li>
                <li  className='pb-[18px]'>About Us</li>
               

            </ul>
        </div >
        <div className='w-[30%]'>
            <ul className='text-[17px] pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
                <li  className='opacity-[0.7] pb-[18px]'>Social</li>
                <li  className='pb-[18px]'>Twitter</li>
                <li className='pb-[18px]' > LinkedIn</li>
                
               

            </ul>
        </div>
        <div className='w-[50%]'>
            <ul className='text-[17px] pl-[130px] mt-10 leading-[26px] text-[#1A2147]'>
           
               
                <li className='pb-[18px]' ><img src={union}/></li>
                <li  className='pb-[18px]'>Pay people in crypto while staying in fiat</li>
               

            </ul>
        </div>
       </div>
       <hr></hr>
       <div className='mx-[130px] flex justify-between mt-6 mb-4'>
        <p className='text-[13px] leading-[26px] opacity-[0.7] text-[#1A2147]'>
        2023, Archway
        </p>
        <p className='text-[13px] leading-[26px] opacity-[0.7] text-[#1A2147]'>
        Terms & Conditions, Privacy
        </p>
       </div>
      
       </div>
    )
}
            
export default Last;