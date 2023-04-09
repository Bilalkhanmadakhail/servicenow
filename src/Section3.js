import React from "react";
import box1 from './assets/box (1).png'
import box2 from './assets/box (2).png'
import box3 from './assets/box (3).png'
import box4 from './assets/box (4).png'
import box5 from './assets/box (5).png'
import box6 from './assets/box (6).png'
import box7 from './assets/box (7).png'
import box8 from './assets/box (8).png'


function Section3(props){
    return(


        <div className="bg-[#F3F4F7] items-center flex flex-col justify-center text-center  pb-[192px] pt-24">
            <h4 className=" text-[#754BC9] text-[16px] font-poppins">
            {props.h4} 
            </h4>
            <p className="mt-3  text-[36px] leading-[45px]  text-[#22252B] font-poppins" > {props.p}</p>
            <div>

                <div className="mt-12  md:flex-row sm:flex sm:flex-col sm:justify-center sm:items-center   md:flex">
                    <div className="md:flex md:flex-row flex flex-row">
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box1}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p1}</p>
                    </div>
                    <div className="w-[144px] h-[144px] rounded-3xl ml-12 px-3 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box2}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p2}</p>
                    </div>
                    </div>
                    <div className="md:flex md:flex-row flex md:mt-0 mt-5 flex-row">
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 md:ml-12 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box3}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p3}</p>
                    </div>
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 ml-12 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box4}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p4}</p>
                    </div>
                    </div>
                    

                </div>
                <div className="mt-12 md:flex-row flex flex-col  md:flex">
                <div className="md:flex md:flex-row flex flex-row">
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box5}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p5}</p>
                    </div>
                    <div className="w-[144px] h-[144px] rounded-3xl ml-12 px-3 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box6}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p6}</p>
                    </div>
</div>


<div className="md:flex md:flex-row flex md:mt-0 mt-5 flex-row">
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 md:ml-12 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box7}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p7}</p>
                    </div>
                    <div className="w-[144px] h-[144px] rounded-3xl px-3 ml-12 bg-white flex flex-col items-center justify-center text-center shadow-3xl">
                        <img src={box8}/>
                        <p className=" text-[#22252B] text-[16px] mt-[18px] font-poppins">{props.p8}</p>
                    </div>
                    
</div>
                </div>
            </div>



        </div>
    )
}
export default Section3;