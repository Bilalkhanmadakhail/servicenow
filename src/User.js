import client from './assets/clientt.jpg'
import clienta from './assets/client 1.avif'
import clientb from './assets/client2.avif'
import clientc from './assets/client3.avif'
import pc from './assets/pc1.svg'
import bell from './assets/bell.svg'
import searchicon from './assets/serch.svg'
import workflow from './assets/workflow1.avif'
import workflow1 from './assets/workflow2.avif'
import workflow2 from './assets/workflow3.avif'
import far from './assets/far.png'

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
import close from './assets/close.png'
import hamburger from './assets/menu.png'
import React, { useState } from 'react'
function User(props) {

    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
      setShowDiv(!showDiv);}
    const [selectedDiv, setSelectedDiv] = useState(null);
   


    const handleDivClick = (divId) => {
        setSelectedDiv(divId);
        
    }
 



    return (
        <div className=''>
            <div  className='w-[100%] lg:hidden flex justify-end px-6'>
                <img src={hamburger} onClick={handleClick}   />

            </div>


          {   showDiv && <div className='lg:hidden md:block' >
          {/* <div  className='w-[100%]  px-5'>
                <img src={close}    />

            </div> */}
            
                <ul className=' w-[100%] px-5'>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Solution</p> <img className='w-7 h-7' src={far}/></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Product</p> <img className='w-7 h-7' src={far}/></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Platform</p> <img className='w-7 h-7' src={far}/></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Customer</p> <img className='w-7 h-7' src={far}/></li>

                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Events</p> <img className='w-7 h-7' src={far}/></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>About</p> <img className='w-7 h-7' src={far}/></li>
                </ul>
            </div>}

           





            <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col justify-start items-start">
                <div className="lg:w-[50%] md:w-[100%] pb-5 sm:pb-0 sm:w-[100%] bg-[#032d42] xl:h-[550px] lg:h-[500px] md:h-[500px] sm:h-[400px] ">
                    <h1 className='xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl  g text-2xl  font-bold text-[#fff] flex items-start px-5 sm:px-12 pt-10  sm:pt-14 md:pt-28 pb-4 sm:pb-7'>PUT&nbsp; <span className='text-[#62d84e]'>YES</span> &nbsp;TO WORK</h1>
                    <p className='text-[#fff] leading-7 sm:leading-10 xl:text-[1.6rem] md:text-[1.6rem] lg:text-[1.2rem] w-[96%] sm:text-[1.2rem] text-left px-5  sm:px-10 ' >Save or grow? Satisfy shareholders or satisfy customers? When facing tough choices, choose the one platform that lets you say <span className='text-[#62d84e] font-bold'>YES</span> to both.</p>
                    <button className='flex items-start sm:ml-0 ml-5 md:ml-10 sm:mx-10 font-semibold bg-[#62d84e] sm:mt-14 mt-4 py-3 sm:py-4 xl:px-11 md:px-11 px-5 sm:px-11 lg:px-8 rounded-md sm:text-xl text-sm '>
                        {props.make}
                    </button>


                </div>
                <div className="lg:w-[50%] md:w-[100%]    sm:w-[100%] xl:h-[550px] lg:h-[500px] sm:h-[400px]  ">
                    <img className=' w-full  h-full' src={client} />
                </div>
            </div>


            <div className='md:flex md:flex-row flex flex-col lg:justify-around sm:justify-between md:justify-between mx-5 lg:px-20 sm:px-5 md:px-10 py-10 border-b-2 border-gray-300 '>
                <div className='flex md:mt-0 mt-6 cursor-pointer'> <img className='md:w-12 md:h-12  w-10 h-10  ' src={pc} /> <h1 className='sm:text-[18px] md:mt-2 sm:mt-1 lg:ml-5 sm:ml-2 ml-7'>
                    {props.fordemo}</h1></div>
                <div className='flex md:mt-0 mt-6 cursor-pointer'> <img className='md:w-12 md:h-12 w-10 h-10  ' src={bell} /> <h1 className='sm:text-[18px] pl-5 md:mt-2  sm:mt-1 lg:ml-5 sm:pt-0 sm:ml-2 ml-2'>{props.forcontact}

                </h1></div>
                <div className='flex md:mt-0 mt-6 cursor-pointer'> <img className='md:w-12 md:h-12 w-10 h-10  ' src={searchicon} /> <h1 className='md:text-xl sm:text-[18px] md:mt-2 sm:mt-1 lg:ml-5 sm:ml-2 ml-7'>

                    {props.lookingfor}</h1></div>
            </div>


            <div className="lg:flex lg:flex-row lg:justify-start md:flex md:flex-col px-10 mt-20 items-start">
                <div className="lg:w-[50%]  md:w-[100%]  ">
                    <img src={clienta} />
                </div>
                <div className="lg:w-[50%]  md:w-[100%]     ">
                    <h1 className='xl:text-4xl md:text-4xl sm:text-3xl lg:text-3xl font-bold  flex items-start md:px-0  lg:px-10 xl:pt-5 lg:pt-1 pt-5 xl:pb-5 lg:pb-3'>
                        {props.h2}</h1>
                    <p className=' md:text-xl sm:text-[18px] xl:w-[90%] lg:w-[100%] flex justify-start text-left lg:px-10 md:px-0 lg:pt-0 pt-5 ' >{props.para2}</p>
                    <button className='flex items-start md:mx-0 lg:mx-10 font-semibold border-[2px] border-[#62d84e] lg:mt-5  mt-10  xl:mt-10 sm:py-4 sm:px-10 px-5 py-3 lg:px-7 xl:px-10 rounded-md relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100   '>
                        {props.explore}
                    </button>

                </div>

            </div>

            <div className='sm:flex sm:flex-row  flex flex-col justify-start text-left sm:justify-between mt-32 text-[#999] md:text-xl sm:text-[16px]  font-semibold xl:w-[55%] lg:w-[70%] sm:w-[90%] w-[95%] mx-5 sm:mx-0 m-auto'>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer sm:pt-0 pt-2' onClick={() => handleDivClick(1)}><p>{props.workflow1}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer sm:pt-0 pt-2' onClick={() => handleDivClick(2)}><p>{props.workflow2}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer sm:pt-0 pt-2' onClick={() => handleDivClick(3)}><p>{props.workflow3}</p></div>
                <div className='hover:border-b-2 hover:border-black hover:text-black cursor-pointer sm:pt-0 pt-2' onClick={() => handleDivClick(4)}><p>{props.workflow4}</p></div>
            </div>

            {
                selectedDiv === 1 && <div className="lg:flex lg:flex-row sm:flex sm:flex-col-reverse justify-start px-10 mt-20 items-start">

                    <div className="lg:w-[50%] sm:w-[100%] mt-40   ">
                        <h2 className='flex items-start text-lg  font-bold'>{props.it}</h2>
                        <h1 className='sm:text-4xl text-xl  font-bold  flex items-start  sm:pt-5 pt-2 pb-5'>
                            {props.h3}</h1>
                        <p className=' sm:text-xl text-lg  w-[90%] flex justify-start text-left  ' >{props.para3}</p>
                        <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100   '>
                            {props.btn3}
                        </button>


                    </div>
                    <div className="lg:w-[50%] w-[100%]   ">
                        <img src={clientb} />
                    </div>

                </div>
            }


            {selectedDiv === 2 && <div className="lg:flex lg:flex-row sm:flex sm:flex-col-reverse justify-start px-10 mt-20 items-start">

                <div className="lg:w-[50%] sm:w-[100%]  mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>{props.Employee}</h2>
                    <h1 className='sm:text-4xl text-xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part3h3}</h1>
                    <p className=' sm:text-xl text-lg w-[90%] flex justify-start text-left  ' >{props.part3para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="lg:w-[50%] mt-5 sm:mt-0 w-[100%]   ">
                    <img src={workflow} />
                </div>

            </div>


            }

            {selectedDiv === 3 && <div className="lg:flex lg:flex-row sm:flex sm:flex-col-reverse justify-start px-10 mt-20 items-start">

                <div className="lg:w-[50%] sm:w-[100%]  mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>{props.Customer}</h2>
                    <h1 className='sm:text-4xl text-xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part3h3}</h1>
                    <p className=' sm:text-xl text-lg w-[90%] flex justify-start text-left  ' >{props.part3para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  '>
                        {props.btn3}
                    </button>


                </div>
                <div className="lg:w-[50%] mt-5 sm:mt-0 w-[100%]   ">
                    <img src={workflow1} />
                </div>

            </div>


            }

            {selectedDiv === 4 && <div className="lg:flex lg:flex-row sm:flex sm:flex-col-reverse justify-start px-10 mt-20 items-start">

                <div className="lg:w-[50%] sm:w-[100%]  mt-40   ">
                    <h2 className='flex items-start text-lg  font-bold'>{props.Creator} </h2>
                    <h1 className='sm:text-4xl text-xl font-bold  flex items-start  pt-5 pb-5'>
                        {props.part4h3}</h1>
                    <p className=' sm:text-xl text-lg w-[90%] flex justify-start text-left  ' >{props.part4para3}</p>
                    <button className='flex items-start  font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md  relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>
                        {props.btn3}
                    </button>


                </div>
                <div className="lg:w-[50%] mt-5 sm:mt-0 sm:w-[100%]   ">
                    <img src={workflow2} />
                </div>

            </div>


            }



            <div className="lg:flex lg:flex-row md:flex md:flex-col justify-start px-10 mt-32 items-start">
                <div className="lg:w-[50%]  w-[100%]  ">
                    <img src={clientc} />
                </div>
                <div className="lg:w-[50%] w-[100%]    ">
                    <h1 className='xl:text-3xl sm:text-3xl lg:text-2xl font-bold  flex items-start md:px-0 pt-5  lg:px-10 xl:pt-5 lg:pt-1 xl:pb-5 lg:pb-3'>
                        {props.h4}</h1>
                    <p className=' md:text-xl text-lg   sm:text-[18px] xl:w-[90%] lg:w-[95%] md:mx-0 lg:mx-10 flex justify-start text-left  pt-5 lg:pt-0
                     ' >{props.para4}</p>
                    <button className='flex items-start lg:mx-10 font-semibold border-[2px] border-[#62d84e] lg:mt-5 xl:mt-10 mt-5 sm:mt-10 py-4 px-10   lg:px-7 xl:px-10 rounded-md  relative   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>
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




            <div className='lg:flex lg:flex-row md:flex md:flex-col-reverse mt-10 bg-[#032d42]'>

                <div className='lg:w-[50%] md:w-[100%] w-[100%] md:py-16 pt-10 sm:pb-2 lg:py-32 text-left px-10'>
                    <h1 className='xl:text-4xl md:text-4xl sm:text-3xl text-2xl lg:text-4xl text-[#fff] font-bold'>{props.blueh1}</h1>
                    <p className='text-lg sm:text-xl  w-[90%] mt-5 text-[#fff]'>{props.bluepara}</p>
                    <button className='text-[#fff] z-10 text-lg font-semibold border-[2px] border-[#62d84e] mt-10 py-4 px-10 rounded-md relative   bg-transform text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  '>{props.btnforblue}</button><span className='pl-8 text-[#fff] font-semibold text-lg'>{props.Stories}</span>


                </div>
                <div className='lg:w-[50%] md:w-[100%]'>
                    <img className='w-[85%] m-auto md:mt-32 my-5' src={bimbo} />
                </div>
            </div>
            <div className='bg-[#f7f7f7] '>
                <div className='sm:py-20 py-10 sm:flex sm:flex-row flex flex-col text-left mx-5 justify-between sm:mx-10'> <h1 className='xl:text-4xl md:text-2xl text-lg sm:text-2xl lg:text-3xl font-bold'>{props.afterblueh1}</h1>  <button className=' sm:text-lg text-sm font-semibold border-[2px] border-[#62d84e]  sm:mt-0 mt-5  xl:mt-10 lg:mt-5  py-3 px-3 sm:px-10 rounded-md  relative z-10   bg-transparent text-black-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  '>{props.btnlast}</button> </div>

                <div className='bg-[#f7f7f7] flex flex-col flex-wrap' >
                    <div className='md:flex md:flex-row flex flex-col justify-between w-[100%] px-10  text-left '>
                        <div className='lg:w-[30%] md:w-[32%] w-[100%]  bg-[#fff]'> <div className='h-[200px]'><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={boxmain} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box1p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box1h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='lg:w-[30%] md:w-[32%] md:mt-0 mt-10 w-[100%] bg-[#fff]'> <div className='h-[200px]'><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box2} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box2h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box2h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box2p}</p>
                                <div className='flex xl:mt-12'>  <h3 className='font-semibold text-xl'>{props.box2h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='lg:w-[30%] md:w-[32%] md:mt-0 mt-10 w-[100%] bg-[#fff]'> <div className='h-[200px]' ><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box3} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box3h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box3h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box3p}</p>
                                <div className='flex xl:mt-12'>  <h3 className='font-semibold text-xl'>{props.box3h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* boxes secod line from here */}


                <div className='bg-[#f7f7f7]' >
                    <div className='md:flex md:flex-row flex flex-col justify-between w-[100%] px-10 pt-10  text-left '>
                        <div className='lg:w-[30%] md:w-[32%] w-[100%]  bg-[#fff]'> <div className='h-[200px]' ><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box4} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box4h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box4h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box4p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box4h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='lg:w-[30%] md:w-[32%] w-[100%] md:mt-0 mt-10  bg-[#fff]'> <div className='h-[200px]' ><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box5} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box5h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box5h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box5p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box5h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='lg:w-[30%] md:w-[32%] w-[100%]  md:mt-0 mt-10  bg-[#fff]'> <div className='h-[200px]' ><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box6} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box6h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box6h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box6p}</p>
                                <div className='flex xl:pt-16 lg:pt-32'>  <h3 className='font-semibold text-xl'>{props.box6h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* third section from here */}


                <div className='bg-[#f7f7f7]' >
                    <div className='md:flex md:flex-row flex flex-col  px-10 pt-10 pb-20  text-left '>
                        <div className='lg:w-[30%] md:w-[32%]  w-[100%] bg-[#fff]'> <div className='h-[200px]' ><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box7} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box1p}</p>
                                <div className='flex'>  <h3 className='font-semibold text-xl'>{props.box1h3}</h3><img className='w-8 h-8 ml-3' src={arrow} /></div>
                            </div>

                        </div>

                        <div className='lg:w-[30%] md:w-[32%] md:mt-0 mt-10  w-[100%] md:mx-16  bg-[#fff]'> <div className='h-[200px]'><img className='lg:w-[85%] md:w-[100%] m-auto hover:w-[100%]' src={box8} /></div>
                            <div className='mx-4 md:mt-4 sm:mt-40'>
                                <h1 className='font-bold  '>{props.box1h1}</h1>
                                <h2 className='font-bold lg:text-2xl md:text-xl w-[80%] mt-2'>{props.box1h2}</h2>
                                <p className='lg:text-xl md:text-lg mt-2 mb-5'> {props.box1p}</p>
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