
import React, { useState } from 'react'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import card from '../assets/card.svg'
import Image from '../assets/image.png'





function Section(props) {



    return (
        <div className='mt-[400px]'>
<div className='flex justify-between  mx-[130px]'>
    <div className='w-[46%] mt-20 bg-[#F9F7EC] h-[693px]'>
        <img className='mt-[111px] w-[157px] h-[67px] mx-auto' src={box1}/>
        <h1 className='mt-[93px] text-[#1A2147] font-extrabold text-center leading-[52px] text-4xl'>API for </h1><h1  className=' text-[#1A2147] font-extrabold text-center leading-[52px] text-4xl'>Marketplaces</h1>
        <p className='text-[22px] px-[113px] mt-8 leading-8 text-center'>Expand payment options to let people sell and buy cool things around the world</p>
        <button className='bg-[#CC9E6C] text-center mx-auto flex justify-center mt-16 bg-opacity-[0.1] rounded-lg px-9 py-[22px] text-[22px] leading-6 font-extrabold text-[#CC9E6C]'>Soon</button>

    </div>
    <div className='w-[46%] mt-20 bg-[#EDF7F3] h-[693px]'>
        <img className='mt-[96px] w-[95px] h-[96px] mx-auto' src={box2}/>
        <h1 className='mt-[93px] text-[#1A2147] font-extrabold text-center leading-[52px] text-4xl'>Solution for </h1><h1  className=' text-[#1A2147] font-extrabold text-center leading-[52px] text-4xl'>DAOs</h1>
        <p className='text-[22px] px-[113px] mt-8 leading-8 text-center'>If you want to pay your DAO contributors, token holders or other DAOs</p>
        <button className='bg-[#4FAD84] text-center mx-auto flex justify-center mt-16 rounded-lg px-9 py-[22px] text-[22px] leading-6 font-extrabold '>Learn more</button>

    </div>
</div>

<div className='mt-[90px] mx-32'>
    <div className='bg '>
<div className='flex justify-center' >
                <button className='py-2  mt-[70px] bg-[#FFFFFF] rounded-md text-[#1A2147] text-[14px] leading-6 flex items-center justify-center  text-center px-3'>For contractors</button>
            </div>
            <h1 className='text-[60px] mt-9 leading-[68px] font-extrabold text-center #1A2147'>Get Paid in Crypto</h1>
            <h2 className='text-2xl mt-10 text-[#1A2147] text-center'>Invoice Clients Anywhere in the World</h2>
            <p className='text-[22px] leading-8  mt-10  text-center px-[290px] text-[#1A2147]'>Get paid in crypto globally, directly to your wallet. Enjoy faster payments, low commissions and security with Archway.</p>
            <button className='bg-[#8F6FF6] mt-14 text-[22px] leading-6 font-extrabold text-white rounded-lg flex justify-center mx-auto px-9 py-6'>Get Paid in Crypto</button>
            <button className='border-[#8F6FF6] border-[1px] mt-5 text-[22px] leading-6 font-extrabold text-[#8F6FF6] rounded-lg flex justify-center mx-auto px-9 py-6'>Learn more</button>
            <p className='text-[32px] mt-[130px] leading-[42px] text-center font-extrabold text-[#1A2147]'>Track Your Clients, Invoices</p><p className='text-[32px] leading-[42px] text-center font-extrabold text-[#1A2147]'> & Crypto Payments Easily</p>
            <p className='text-center text-[22px] px-[285px] mt-[30px] leading-8 text-[#1A2147]'>We will provide you with a European bank account to which you will receive fiat. As soon as you get it, we will exchange it and send crypto directly to your wallet. Start earning crypto today!</p>
            
            <img className='absolute top-[4230px] xl:block lg:hidden left-[900px]' src={Image}/>
          
            <div className='mt-32 mx-10'>
                <img src={card}/>
            </div>

</div>
</div> 


 </div>
    )
}
            
export default Section;