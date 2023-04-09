import React from "react";
import dropdown from './assets/dropdown.png'
import search from './assets/search.png'
import arrow from './assets/arrow.png'
function Section4(props){

    return(
<div className="max-w-[2000px] pb-[96px] mx-auto">
    <div className="mt-12 sm:flex sm:flex-row px-5 flex  flex-col md:px-20 sm:px-10 lg:px-40 mb-6  ">
        <div className="lg:w-[240px] sm:w-[150px] sm:mt-0 mt-2 flex justify-between rounded-[6px] border-[#D4D5D9] text-[16px] font-poppinsr text-[#434956]   border-[1px]  h-full py-2 px-4">{props.slect1} <img className="lg:ml-24 sm:mx-3   w-3 h-[6px] mt-2" src={dropdown}/></div>
        <div className="lg:w-[240px] sm:w-[150px ] justify-between flex sm:ml-6 sm:mt-0 mt-2 rounded-[6px] border-[#D4D5D9] text-[16px] font-poppinsr text-[#434956]   border-[1px]  h-full py-2 px-4">{props.slect2} <img className="lg:ml-24 sm:mx-3 w-3 h-[6px] mt-2" src={dropdown}/></div>
        <div className="xl:ml-52 md:ml-12   rounded-full   flex  sm:mt-0 mt-2 border-[#D4D5D9] text-[16px] font-poppinsr text-[#434956]   border-[1px]  h-full py-2 px-4">
        <img className="w-[18px] h-[18px] mt-1" src={search}/>
        <input type="text " placeholder="Search" className="placeholder:font-poppinsr lg:w-[200px] md:w-[100px] ml-4 "/>
       


        </div>
        
    </div>
    <hr className="lg:ml-[160px] lg:mr-[180px]   hidden lg:block"></hr>
    <div className="mt-12 md:mx-20 mx-5 sm:mx-10 lg:mx-40 border-l-8 border-[#754BC9]">
        <div className="px-6">
        <h1 className="text-2xl text-[#22252B] font-poppins">{props.h1}</h1>
        <span className="text-[16px] pr-3 font-poppinsr">{props.span1}</span>
        <span className="text-[16px] border-x-[1px] border-[#D4D5D9] px-3 font-poppinsr">{props.span2}</span>
        <span className="text-[16px] pl-3 font-poppinsr">{props.span3}</span>
        <p className="text-[16px] mt-3 font-poppinsr">{props.p1}</p>
        <p className="text-[16px] flex mt-3 font-poppins text-[#754BC9]">{props.p} <span><img className="ml-5 mt-2" src={arrow}/></span></p>
        </div>
    </div>
    <div className="mt-12 lg:mx-40 md:mx-20 mx-5 sm:mx-10 border-l-8 border-[#754BC9]">
        <div className="px-6">
        <h1 className="text-2xl text-[#22252B] font-poppins">{props.h2}</h1>
        <span className="text-[16px] pr-3 font-poppinsr">{props.span4}</span>
        <span className="text-[16px] border-x-[1px] border-[#D4D5D9] px-3 font-poppinsr">{props.span5}</span>
        <span className="text-[16px] pl-3 font-poppinsr">{props.span6}</span>
        <p className="text-[16px] mt-3 font-poppinsr">{props.p2}</p>
        <p className="text-[16px] flex mt-3 font-poppins text-[#754BC9]">{props.p} <span><img className="ml-5 mt-2" src={arrow}/></span></p>
        </div>
    </div>
    
</div>
    )
}
export default Section4;