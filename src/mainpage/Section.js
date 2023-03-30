
import React, { useState } from 'react'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import card from '../assets/card.svg'
import Image from '../assets/image.png'





function Section(props) {



    return (
        <div className='xl:mt-[400px] lg:mt-[300px] sm:mt-[630px] md:mt-[900px]'>
<div className='lg:flex lg:flex-row sm:flex  sm:flex-col  lg:justify-between sm:mx-[60px] xl:mx-[130px]'>
    <div className='xl:w-[46%] lg:w-[48%] sm:w-[100%] lg:mt-20 sm:mt-5 bg-[#F9F7EC]  lg:h-[693px]'>
        <img className='lg:mt-[111px]  sm:mt-[80px] w-[157px] h-[67px] mx-auto' src={box1}/>
        <h1 className='xl:mt-[93px] font-poppins sm:mt-10 md:mt-[60px] text-[#1A2147] font-extrabold text-center leading-[52px] xl:text-4xl sm:text-3xl'>API for </h1><h1  className=' text-[#1A2147] font-extrabold font-poppins text-center leading-[52px] xl:text-4xl sm:text-3xl'>Marketplaces</h1>
        <p className='text-[22px] text-[#1A2147] font-gtPlanner xl:px-[113px] lg:px-[50px] sm:px-[113px] mt-8 leading-8 text-center'>Expand payment options to let people sell and buy cool things around the world</p>
        <button className='bg-[#CC9E6C] text-center font-poppins mx-auto flex justify-center mt-16 bg-opacity-[0.1] rounded-lg px-9 py-[22px] text-[22px] sm:mb-10 lg:mb-0 leading-6 font-extrabold text-[#CC9E6C]'>Soon</button>

    </div>
    <div className='xl:w-[46%] lg:w-[48%] sm:w-[100%] lg:mt-20 sm:mt-5 bg-[#EDF7F3] lg:h-[693px]'>
        <img className='lg:mt-[96px] sm:mt-[80px]  w-[95px] h-[96px] mx-auto' src={box2}/>
        <h1 className='xl:mt-[93px] sm:mt-10 font-poppins md:mt-[50px] text-[#1A2147] font-extrabold text-center leading-[52px] xl:text-4xl sm:text-3xl'>Solution for </h1><h1  className=' text-[#1A2147] font-extrabold text-center leading-[52px] xl:text-4xl font-poppins sm:text-3xl'>DAOs</h1>
        <p className='text-[22px] text-[#1A2147] xl:px-[113px] lg:px-[50px] font-gtPlanner sm:px-[113px] mt-8 leading-8 text-center'>If you want to pay your DAO contributors, token holders or other DAOs</p>
        <button className='bg-[#4FAD84] font-poppins text-center mx-auto flex justify-center mt-16 rounded-lg px-9 py-[22px] text-[22px] leading-6 sm:mb-10 lg:mb-0 font-extrabold '>Learn more</button>

    </div>
</div>

<div className='mt-[90px] xl:mx-32 sm:mx-16'>
    <div className='bg w-[100%] lg:bg-cover bg-cover lg:h-auto h-auto'>
<div className='flex justify-center' >
                <button className='py-2  mt-[70px] font-gtPlanner bg-[#FFFFFF] rounded-md text-[#1A2147] text-[14px] leading-6 flex items-center justify-center  text-center px-3'>For contractors</button>
            </div>
            <h1 className='lg:text-[60px] sm:text-4xl text-[#1A2147] font-poppins mt-9 leading-[68px] font-extrabold text-center #1A2147'>Get Paid in Crypto</h1>
            <h2 className='lg:text-2xl font-sarif sm:text-xl mt-10 text-[#1A2147] text-center'>Invoice Clients Anywhere in the World</h2>
            <p className='lg:text-[22px] sm:text-[18px] leading-8  font-gtPlanner xl:mt-10 md:mt-5  text-center lg:px-[290px] sm:px-10  text-[#1A2147]'>Get paid in crypto globally, directly to your wallet. Enjoy faster payments, low commissions and security with Archway.</p>
            <button className='bg-[#8F6FF6] sm:mt-7 font-poppins xl:mt-14 sm:text-[18px] lg:text-[22px] leading-6 font-extrabold text-white rounded-lg flex justify-center mx-auto px-9 sm:py-4 lg:py-6'>Get Paid in Crypto</button>
            <button className='border-[#8F6FF6] font-poppins border-[1px] mt-5 sm:text-[18px] lg:text-[22px]leading-6 font-extrabold text-[#8F6FF6] rounded-lg flex justify-center mx-auto px-9 sm:py-4 lg:py-6'>Learn more</button>
            <p className='lg:text-[32px] sm:text-2xl md:mt-[20px] xl:mt-[130px] leading-[42px] text-center font-extrabold font-poppins text-[#1A2147]'>Track Your Clients, Invoices</p><p className='lg:text-[32px] md:text-2xl leading-[42px] text-center font-extrabold font-poppins text-[#1A2147]'> & Crypto Payments Easily</p>
            <p className='text-center sm:text-[18px] font-gtPlanner md:pb-0 sm:pb-10 lg:text-[22px] sm:px-10 lg:px-[285px] xl:mt-[30px] sm:mt-6 leading-8 text-[#1A2147]'>We will provide you with a European bank account to which you will receive fiat. As soon as you get it, we will exchange it and send crypto directly to your wallet. Start earning crypto today!</p>
            
            <img className='absolute top-[4200px] 3xl:hidden xl:block hidden left-[860px]' src={Image}/>
          
            <div className='xl:mt-32 sm:mt-5 lg:mt-10 mx-10'>
                <img className='sm:hidden md:block'  src={card}/>
            </div>

</div>
</div> 


 </div>
    )
}
            
export default Section;