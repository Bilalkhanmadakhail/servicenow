import React from "react";
import check from './assets/check.png'
import prof from './assets/prof.png'

function Section2(props) {


    return (

        <div className=" lg:flex lg:flex-row flex flex-col w-[100%]">
            <div className="xl:pl-20 md:pl-20  pl-5 sm:pl-10 xl:pr-[100px] lg:px-10 mx-auto w-[100%] lg:w-[50%] bg-[#754BC9]">
                <ul className="sm:text-[20px] text-[16px] leading-[25px] pt-[8px] font-poppinsr text-white">
                    <li className="text-[16px] mt-[78px] font-poppins text-white">{props.li1}</li>
                    <li className="mt-[30px] flex">
                        <img className="w-8 h-8" src={check} />
                        <p className="pl-3 pt-1">{props.li2}</p>
                    </li>
                    <li className="mt-[30px] flex">
                        <img className="w-8 h-8" src={check} />
                        <p className="pl-3 pt-1">{props.li3}</p>
                    </li>
                    <li className="mt-[30px] flex">
                        <img className="w-8 h-8" src={check} />
                        <p className="pl-3 pt-1">{props.li4}</p>
                    </li>
                    <li className="mt-[30px] pb-16 flex">
                        <img className="w-8 h-8" src={check} />
                        <p className="pl-3 pt-1">{props.li5}</p>
                    </li>

                </ul>

            </div>
            <div className="xl:pl-20 md:pl-20 sm:pl-10 pl-5 lg:pl-10 w-[100%] pb-16 lg:w-[50%] bg-[#E1E4EA]">
                <div>
                    <img className=" w-[30px] h-[27px] mt-[76px]" src={prof} />
                    <h3 className=" sm:text-[36px] text-2xl font-poppins mt-7 leading-[45px] text-[#434956]">{props.h3}</h3>
                    <p className=" text-[16px] font-poppinsr mt-[18px] leading-[28px] text-[#434956]">
                        {props.p}
                    </p>
                </div>
            </div>
        </div>
    )


}
export default Section2;