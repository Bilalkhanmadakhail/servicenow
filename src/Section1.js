import React, { useState } from 'react'








function Section1(props) {


    return (
        <div className='mt-24 max-w-[2000px] mx-auto'>
            <div className='flex flex-col justify-center items-center text-center '>


                <h2 className='text-[36px] leading-[45px] font-poppins text-[
#22252B]'>{props.h2}</h2>
                <p className='text-[#754BC9] text-xl sm:text-4xl md:text-[40px] md:leading-[50px] xl:text-[48px] md:w-[60%] sm:w-[80%] mt-6 font-poppinsITB xl:leading-[60px]'>{props.p2}</p>
                <div className='lg:flex flex flex-col lg:flex-row px-5 sm:px-10 md:px-20 mb-24 w-[100%] items-stretch mt-12 font-poppinsr text-[14px] text-left  text-[#434956] sm:text-[16px] leading-[28px] font-'>
                    <div className='lg:w-[48%] w-[100%]'>
                        <p>{props.para1}</p></div>
                    <div className='lg:w-[50%] w-[100%] lg:ml-12 lg:-mt-1 xl:mt-0 mt-10'>
                        <p>{props.para2} </p>
                        <p className='mt-6'>{props.para3}</p>

                    </div>
                </div>

            </div>

        </div>

    );
}

export default Section1;