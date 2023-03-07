import client from './assets/client.avif'
import clienta from './assets/client 1.avif'
import clientb from './assets/client2.avif'
import clientc from './assets/client3.avif'
import pc from './assets/pc1.svg'
import bell from './assets/bell.svg'
import searchicon from './assets/serch.svg'
import workflow from './assets/workflow1.avif'
import workflow1 from './assets/workflow2.avif'
import workflow2 from './assets/workflow3.avif'

import icon1 from './assets/icon1.avif'
import icon2 from './assets/icon2.avif'
import icon3 from './assets/icon3.avif'
import icon4 from './assets/icon4.webp'
import icon5 from './assets/icon5.avif'
import bimbo from './assets/bimbo.avif'
import boxmain from './assets/box1.avif'
import arrow from './assets/arrow.png'
import box2 from './assets/box2.avif'
import box3 from './assets/box3.avif'
import box4 from './assets/box4.avif'
import box5 from './assets/box5.avif'
import box6 from './assets/box6.avif'
import box7 from './assets/box7.avif'
import box8 from './assets/box8.avif'
import React,{useState} from 'react'
function User(props) {
 
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleDivClick = (divId) => {
      setSelectedDiv(divId);}
    
   


    return (
        <div className=''>
            <div className="flex justify-start items-start">
                <div className="w-[50%] bg-[#032d42] h-[400px]  ">
                    <h1 className='text-5xl font-bold text-[#fff] flex items-start  px-10 pt-24 pb-7'>PUT&nbsp; <span className='text-[#62d84e]'>YES</span> &nbsp;TO WORK</h1>
                    <p className='text-[#fff] text-2xl w-[95%] text-left px-10 ' >Save or grow? Satisfy shareholders or satisfy customers? When facing tough choices, choose the one platform that lets you say <span className='text-[#62d84e] font-bold'>YES</span> to both.</p>
                    <button className='flex items-start mx-10 font-semibold bg-[#62d84e] mt-7 py-5 px-10 rounded-md  '>
                        {props.make}
                    </button>


                </div>
                <div className="w-[50%]  h-[400px]">
                    <img className=' h-[400px]' src={client} />
                </div>
            </div>


            <div className='flex justify-around px-20 py-10 border-b-2 border-gray-300 '>
                <div className='flex cursor-pointer'> <img className='w-12 h-12  ' src={pc} /> <h1 className='text-xl mt-2 ml-5'>
                    {props.fordemo}</h1></div>
                <div className='flex cursor-pointer'> <img className='w-12 h-12 ' src={bell} /> <h1 className='text-xl pl-5 mt-2  ml-5'>{props.forcontact}

                </h1></div>
                <div className='flex cursor-pointer'> <img className='w-12 h-12 ' src={searchicon} /> <h1 className='text-xl mt-2 ml-5'>

                    {props.lookingfor}</h1></div>
            </div>


            <div className="flex justify-start px-10 mt-20 items-start">
                <div className="w-[50%]  ">
                    <img src={clienta} />
                </div>
                <div className="w-[50%]    ">
                    <h1 className='text-4xl font-bold  flex items-start  px-10 pt-5 pb-5'>
                        {props.h2}</h1>
                    <p className=' text-xl w-[90%] flex justify-start text-left px-10 ' >{props.para2}</p>
                    <button className='flex items-start mx-10 font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.explore}
                    </button>


                </div>

            </div>

            <div className='flex justify-between mt-32 text-[#999] text-lg font-semibold w-[55%] m-auto'>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer' onClick={() => handleDivClick(1)}><p>{props.workflow1}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer' onClick={() => handleDivClick(2)}><p>{props.workflow2}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer' onClick={() => handleDivClick(3)}><p>{props.workflow3}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer' onClick={() => handleDivClick(4)}><p>{props.workflow4}</p></div>
            </div>

{
         selectedDiv === 1 &&  <div className="flex justify-start px-10 mt-20 items-start">

                <div className="w-[50%] mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>IT Workflows</h2>
                    <h1 className='text-4xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.h3}</h1>
                    <p className=' text-xl w-[90%] flex justify-start text-left  ' >{props.para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="w-[50%]  ">
                    <img src={clientb} />
                </div>

            </div>
}


{ selectedDiv === 2 && <div className="flex justify-start px-10 mt-20 items-start">

                <div className="w-[50%] mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>Employee Workflows</h2>
                    <h1 className='text-4xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part3h3}</h1>
                    <p className=' text-xl w-[90%] flex justify-start text-left  ' >{props.part3para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="w-[50%]  ">
                    <img src={workflow} />
                </div>

            </div>


}

{ selectedDiv === 3 &&  <div className="flex justify-start px-10 mt-20 items-start">

                <div className="w-[50%] mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>Customer Workflows</h2>
                    <h1 className='text-4xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part3h3}</h1>
                    <p className=' text-xl w-[90%] flex justify-start text-left  ' >{props.part3para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="w-[50%]  ">
                    <img src={workflow1} />
                </div>

            </div>


}

{ selectedDiv === 4 &&  <div className="flex justify-start px-10 mt-20 items-start">

                <div className="w-[50%] mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>Creator Workflows</h2>
                    <h1 className='text-4xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part4h3}</h1>
                    <p className=' text-xl w-[90%] flex justify-start text-left  ' >{props.part4para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="w-[50%]  ">
                    <img src={workflow2} />
                </div>

            </div>


}



            <div className="flex justify-start px-10 mt-32 items-start">
                <div className="w-[50%]  ">
                    <img src={clientc} />
                </div>
                <div className="w-[50%]    ">
                    <h1 className='text-3xl font-bold  flex items-start  px-10 pt-5 pb-5'>
                        {props.h4}</h1>
                    <p className=' text-xl w-[90%] mx-10 flex justify-start text-left  ' >{props.para4}</p>
                    <button className='flex items-start mx-10 font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  '>
                        {props.explore}
                    </button>


                </div>

            </div>


            <div>
                <div className='w-[60%] m-auto mt-20 text-xl font-bold '> <p>{props.trust}</p></div>
            </div>

            <div>
                <div className='w-[80%] m-auto mt-10 flex  '>
                    <div><img src={icon1} /></div>
                    <div><img src={icon2} /></div>
                    <div><img src={icon3} /></div>
                    <div><img src={icon4} /></div>
                    <div><img src={icon5} /></div>
                </div>
            </div>




            <div className='flex mt-10 bg-[#032d42]'>

                <div className='w-[50%] py-32 text-left px-10'>
                    <h1 className='text-4xl text-[#fff] font-bold'>{props.blueh1}</h1>
                    <p className='text-xl w-[90%] mt-5 text-[#fff]'>{props.bluepara}</p>
                    <button className='text-[#fff] text-lg font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md '>{props.btnforblue}</button><span className='pl-8 text-[#fff] font-semibold text-lg'>View All Stories</span>


                </div>
                <div className='w-[50%]'>
                    <img className='w-[85%] m-auto mt-32' src={bimbo} />
                </div>
            </div>
            <div className='bg-[#f7f7f7] '>
                <div className='py-20 flex justify-between mx-10'> <h1 className='text-4xl font-bold'>{props.afterblueh1}</h1>  <button className=' text-lg font-semibold border-[2px] border-[#62d84e] mt-10 py-3 px-10 rounded-md '>{props.btnlast}</button> </div>

                <div className='bg-[#f7f7f7] flex flex-col flex-wrap' >
                    <div className='flex justify-between px-10  text-left '>
                        <div className='w-[30%] bg-[#fff]'> <div><img  src={boxmain} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box1p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box1h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='w-[30%] bg-[#fff]'> <div><img src={box2} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box2h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box2h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box2p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box2h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='w-[30%] bg-[#fff]'> <div><img src={box3} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box3h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box3h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box3p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box3h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* boxes secod line from here */}


                <div className='bg-[#f7f7f7]' >
                    <div className='flex justify-between px-10 pt-10  text-left '>
                        <div className='w-[30%] bg-[#fff]'> <div><img src={box4} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box4h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box4h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box4p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box4h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='w-[30%] bg-[#fff]'> <div><img src={box5} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box5h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box5h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box5p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box5h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='w-[30%] bg-[#fff]'> <div><img src={box6} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box6h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box6h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box6p}</p>
                                <div className='flex pt-16'>  <h3 className='font-semibold text-xl'>{props.box6h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* third section from here */}


                <div className='bg-[#f7f7f7]' >
                    <div className='flex  px-10 pt-10 pb-20  text-left '>
                        <div className='w-[30%] bg-[#fff]'> <div><img src={box7} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box1p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box1h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='w-[30%] mx-16  bg-[#fff]'> <div><img src={box8} /></div>
                            <div className='mx-4 mt-4'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold text-2xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='text-xl mt-2 mb-5'> {props.box1p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box1h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;