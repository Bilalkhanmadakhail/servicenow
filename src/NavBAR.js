import logo from './assets/icon.png'
import platform from './assets/platform.avif'
import customer from './assets/customer.avif'
import events from './assets/events.avif'
import about from './assets/about.avif'
import close from './assets/close.png'
import hamburger from './assets/menu.png'
import far from './assets/far.png'
import search from './assets/search-icon.svg'
import account from './assets/account.png'
import globe from './assets/globe (1).png'
import React, { useState } from 'react'



function NavBar(props) {
    const [selectDiv, setSelectDiv] = useState(null);
    const handleClick = (divId) => {
        setIsDivVisible(true);
        setSelectDiv(divId);
    }
    const [isDivVisible, setIsDivVisible] = useState(true);

    const handleHideDiv = () => {
        setIsDivVisible(false);
    };
    const [showDiv, setShowDiv] = useState(false);

    const handleeClick = () => {
        setShowDiv(!showDiv);
    }
    return (
        <div className=' bg-white xl:shadow-none z-50 shadow-3xl max-w-[1400px] mx-auto '>
         
            <div className='flex bg-white max-w-[1400px]  w-[100%]  justify-between   xl:fixed sticky z-50 xl:top-0   ' >
                
                <div className='sm:w-[240px] sm:mx-0  mx-4 w-[50%] pt-4 pb-4 sm:pl-8 sm:'>
                    <img className='md:w-[85%] sm:mb-0 mb-1 sm:w-[80%]' src={logo} />
                </div>
                <ul className="w-[60%]  xl:mr-10 pr-5 hidden font-face-rm lg:flex justify-start py-6    text-[#293e40] text-[16px]">
                    <li className='pr-5  cursor-pointer ' onClick={() => handleClick(1)} > <a>{props.Solution}</a></li>
                    <li className='pr-5 cursor-pointer' onClick={() => handleClick(2)}> <a>{props.product}</a></li>
                    <li className='pr-5 cursor-pointer' onClick={() => handleClick(3)}> <a>{props.Platform}</a></li>
                    <li className='pr-5 cursor-pointer' onClick={() => handleClick(4)}> <a>{props.Customer}</a></li>
                    <li className='pr-5 cursor-pointer' onClick={() => handleClick(5)}> <a>{props.Events}</a></li>
                    <li className='pr-5 cursor-pointer' onClick={() => handleClick(6)}> <a>{props.About}</a></li>


                </ul>
                <div className='flex py-4 justify-around md:w-[20%] w-[35%] mr-5'>
                    <button className='md:px-5 xl:h-10 font-face-mm sm:ml-0 ml-5 px-3 lg:text-[14px]  sm:text-lg text-sm h-[45px] hidden lg:block  rounded-sm font-bold text-white bg-[#293e40]'> {props.button}</button>
                    <div className='w-[100%] lg:hidden flex justify-end px-6'>
                <img src={hamburger} onClick={handleeClick} />

            </div>

                    <img className=' mt-2 w-[28px] h-[28px] hidden xl:block' src={search} />
                    <img className='mt-2 w-[28px] h-[28px] hidden xl:block' src={globe} />
                    <img className='mt-2 w-[28px] h-[28px] hidden xl:block' src={account} />


                </div>

            </div>
            {showDiv && <div className='lg:hidden md:block' >
                {/* <div  className='w-[100%]  px-5'>
                <img src={close}    />

            </div> */}

                <ul className=' w-[100%] pl-5 pr-10'>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Solution</p> <img className='w-7 h-7' src={far} /></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Product</p> <img className='w-7 h-7' src={far} /></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Platform</p> <img className='w-7 h-7' src={far} /></li>
                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Customer</p> <img className='w-7 h-7' src={far} /></li>

                    <li className='flex justify-between pt-5 '> <p className='text-xl font-semibold'>Events</p> <img className='w-7 h-7' src={far} /></li>
                    <li className='flex justify-between py-5 '> <p className='text-xl font-semibold'>About</p> <img className='w-7 h-7' src={far} /></li>
                </ul>
            </div>}
            
                {selectDiv == 1 && isDivVisible  &&
                    <div className=' flex h-[700px] mt-[87px]  '>
                        <div className='w-[20%]'>
                            <ul className='w-full ml-10 mt-10 flex flex-col items-start'>
                                <li className='font-thin pl-2 '>SOLUTIONS AREAS</li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>Customer experience
                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Technology excellence
                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Employee experience
                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Operating excellence
                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2  pt-2 pb-5 border-b-[1px] border-gray-300'>Hyperautomation and low code</li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2  '>
                                    Industry solutions
                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Value acceleration</li>




                            </ul>
                        </div>

                        <div className='w-[28%] ml-12 border-l-2'>
                            <ul className='ml-8 mt-10 flex flex-col  items-start'>
                                <li className='font-thin pl-2 '>SOLUTIONS </li>
                                <div>
                                    <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>Overview

                                    </li>
                                    <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                        Enterprise CX
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className='w-[50%] bg-[#f4f2f2]'>
                            <div className='mt-20 ml-10 flex flex-col items-start'>
                                <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                                <h1 className='text-2xl font-semibold text-[#293e40]'>Customer experience</h1>
                                <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                    Increase customer loyalty and improve your bottom line. Create effortless experiences that bring customers back again and again.
                                </p>
                                <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[1px] border-[#293e40] font-semibold  hover:text-white hover:bg-[#293e40]' >Learn More</button>

                            </div>

                        </div>
                    </div>

                }
       
         
                {selectDiv == 2 && isDivVisible  && <div className='flex  mt-[87px]  h-[700px]'>
                    <div className='w-[20%]'>
                        <ul className='w-full ml-10 mt-10 flex flex-col items-start'>
                            <li className='font-semibold text-[#293e40] pl-2 '>WORKFLOWS</li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>IT Workflows

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Employee Workflows

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2 '>Customer Workflows

                            </li>

                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2  pt-2 pb-5 border-b-[1px] border-gray-300'>Creator Workflows
                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px] text-[#697779] mt-2 py-2  '>
                                All Products and Solutions
                            </li>





                        </ul>
                    </div>

                    <div className='w-[28%] ml-12 border-l-2'>
                        <ul className='ml-8 mt-10 flex flex-col  items-start'>
                            <li className='font-semibold text-[#293e40] pl-2 '>PRODUCTS </li>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>Overview of IT Workflows


                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                    IT Service Management

                                </li>
                            </div>

                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2]  font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>IT Operations Management


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                Automated service ops
                            </li>


                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>Strategic Portfolio Management


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                Application Portfolio Management

                            </li>


                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>IT Asset Management


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                Enterprise Asset Management


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>
                                Security Operations

                            </li>

                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>Governance, Risk, and Compliance


                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px] text-[#697779] mt-2 pt-3 pb-2 '>

                                    Telecommunications Service Operations Management


                                </li>

                            </div>

                        </ul>

                    </div>
                    <div className='w-[50%] bg-[#f4f2f2]'>
                        <div className='mt-20 ml-10 flex flex-col items-start'>
                            <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                            <h1 className='text-2xl font-semibold text-[#293e40]'>IT Operations Management</h1>
                            <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                Identify, prioritize, and respond to threats faster. Connect existing security tools with a security orchestration, automation, and response engine to quickly resolve incidents.
                            </p>
                            <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[1px] border-[#293e40] font-semibold   hover:text-white hover:bg-[#293e40]' >Learn More</button>
                            <ul className='flex flex-col items-start mt-14'>
                                <li className='font-semibold py-2 text-[#293e40]'>FEATURED SOLUTIONS
                                </li>
                                <li className='font-semibold py-2 text-[#293e40]'>
                                    Employee portal
                                </li>
                                <li className='font-semibold py-2 text-[#293e40]'>
                                    ESG solutions</li>
                            </ul>

                        </div>

                    </div>
                </div>
                }
       
                {selectDiv == 3 && isDivVisible  && <div className='flex  mt-[87px]  h-[700px]'>
                    <div className='w-[20%]'>
                        <ul className='w-full ml-10 text-[#293e40] mt-10 flex flex-col items-start'>
                            <li className='font-thin pl-2 '>HOW IT WORKS</li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Overview

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Latest release

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>AI and analytics

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>App development

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2  pt-2 pb-1 border-gray-300'>Cloud security
                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2  '>
                                Integrations

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Trust and security
                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>
                                ServiceNow Store</li>




                        </ul>
                    </div>

                    <div className='w-[28%] ml-12 border-l-2'>
                        <ul className='ml-8 mt-10 flex flex-col  items-start'>
                            <li className='font-thin pl-2 '>LATEST INNOVATIONS</li>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Machine learning


                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Intelligent chatbot

                                </li>
                            </div>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2]  font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Performance analytics


                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Configurable workspaces

                                </li>
                            </div>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Platform encryption

                                </li>

                            </div>


                        </ul>

                    </div>
                    <div className='w-[50%] bg-[#f4f2f2]'>
                        <div className='mt-20 ml-10 flex flex-col items-start'>
                            <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                            <h1 className='text-2xl font-semibold text-[#293e40]'>Now Platform</h1>
                            <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                The platform for digital business delivers unmatched opportunity. Built for a fast-changing world, the Now Platform® connects people and data for greater productivity and innovation.
                            </p>
                            <div className='flex text-center items-center'>
                                <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[1px] border-[#293e40] font-semibold  hover:text-white hover:bg-[#293e40]'>Learn More</button>
                                <p className='font-semibold pt-5 pl-10   text-[#293e40]'>View Latest Release</p>
                            </div>


                        </div>
                        <div className='flex px-10 justify-between mt-14'>
                            <div className='w-[48%] mt-4'><img src={platform} /></div>
                            <div className='w-[45%] flex flex-col items-start'>
                                <h1 className='text-[16px] font-semibold my-3 '>What’s new in the Tokyo release</h1>
                                <h2 className='text-left mb-4'>See how to supercharge experiences with the Now Platform Tokyo release.</h2>
                                <p className='text-[16px] font-semibold '>Get Fact Sheet</p>
                            </div>
                        </div>

                    </div>
                </div>
                }
      
                {selectDiv == 4 && isDivVisible  && <div className='flex  mt-[87px]  h-[700px]'>
                    <div className='w-[20%]'>
                        <ul className='w-full ml-10 text-[#293e40] mt-10 flex flex-col items-start'>
                            <li className='font-thin pl-2 '>CUSTOMER SUCCESS</li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Case studies


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Customer Success Center

                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Training and certification



                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Services


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2  pt-2 pb-1 border-gray-300'>Extend Value
                            </li>


                        </ul>
                    </div>

                    <div className='w-[28%] ml-12 border-l-2'>
                        <ul className='ml-8 mt-10 flex flex-col  items-start'>
                            <li className='font-thin pl-2 '>CUSTOMER SUPPORT
                            </li>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Support



                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Product documentation


                                </li>
                            </div>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2]  font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Developer portal



                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Community

                                </li>
                            </div>


                        </ul>

                    </div>
                    <div className='w-[50%] bg-[#f4f2f2]'>
                        <div className='mt-20 ml-10 flex flex-col items-start'>
                            <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                            <h1 className='text-2xl font-semibold text-[#293e40]'>Customers</h1>
                            <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                Make the most out of your ServiceNow investment. Explore valuable resources to drive business outcomes and achieve success faster.
                            </p>
                            <div className='flex text-center items-center'>
                                <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[1px] border-[#293e40] font-semibold  hover:text-white hover:bg-[#293e40]'>Learn More</button>
                                <p className='font-semibold pt-5 pl-10   text-[#293e40]'>View Latest Release</p>
                            </div>


                        </div>
                        <div className='flex px-10 justify-between mt-14'>
                            <div className='w-[48%] mt-4'><img src={customer} /></div>
                            <div className='w-[45%] flex flex-col items-start'>
                                <h1 className='text-[16px] text-left font-semibold my-3 '>
                                    The Now Platform Tokyo release has arrived!</h1>
                                <h2 className='text-left mb-4'>Get the support and tools you need for every step of your upgrade journey.

                                </h2>
                                <p className='text-[16px] font-semibold '>View Upgrade Info</p>
                            </div>
                        </div>

                    </div>
                </div>
                }
      
                {selectDiv == 5 && isDivVisible  && <div className='flex  mt-[87px]  h-[700px]'>
                    <div className='w-[20%]'>
                        <ul className='w-full ml-10 text-[#293e40] mt-10 flex flex-col items-start'>
                            <li className='font-thin pl-2 '>GLOBAL EVENTS</li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Event calendar



                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Knowledge

                            </li>


                        </ul>
                    </div>

                    <div className='w-[28%] ml-12 border-l-2'>
                        <ul className='ml-8 mt-10 flex flex-col  items-start'>
                            <li className='font-thin pl-2 '>VIRTUAL EVENTS

                            </li>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Live webinars




                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    On-demand webinars



                                </li>
                            </div>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2]  font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Live demos




                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Platform release broadcast

                                </li>
                            </div>


                        </ul>

                    </div>
                    <div className='w-[50%] bg-[#f4f2f2]'>
                        <div className='mt-20 ml-10 flex flex-col items-start'>
                            <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                            <h1 className='text-2xl font-semibold text-[#293e40]'>Events</h1>
                            <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                Connect with visionaries from around the world. Gain new ServiceNow skills and fresh insights into the power of digital transformation.
                            </p>
                            <div className='flex text-center items-center'>
                                <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[1px] border-[#293e40] font-semibold  hover:text-white hover:bg-[#293e40]'>Learn More</button>

                            </div>


                        </div>
                        <div className='flex px-10 justify-between mt-14'>
                            <div className='w-[48%] mt-4'><img src={events} /></div>
                            <div className='w-[45%] flex flex-col items-start'>
                                <h1 className='text-[16px] text-left font-semibold my-3 '>

                                    Say YES to Knowledge 2023</h1>
                                <h2 className='text-left mb-4'>Can’t-miss keynotes or must-see demos? Shake hands with experts or hands-on training? Connect with old friends or make new ones? YES! Welcome to Knowledge 2023, happening May 14-18 in Las Vegas.

                                </h2>
                                <p className='text-[16px] font-semibold '>Register Now</p>
                            </div>
                        </div>

                    </div>
                </div>
                }
            
    
                {selectDiv == 6 && isDivVisible  && <div className='flex  mt-[87px]  h-[700px]'>
                    <div className='w-[20%]'>
                        <ul className='w-full ml-10 text-[#293e40] mt-10 flex flex-col items-start'>
                            <li className='font-thin pl-2 '>COMPANY
                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>About




                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Careers


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>              Leadership


                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Investors



                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Global Impact



                            </li>
                            <li className='w-full items-start flex pl-2 hover:bg-[#e1e1e1] font-semibold text-[16px]  mt-2 py-2 '>Diversity, Equity, and Inclusion


                            </li>


                        </ul>
                    </div>

                    <div className='w-[28%] ml-12 border-l-2'>
                        <ul className='ml-8 mt-10 flex flex-col  items-start'>
                            <li className='font-thin pl-2 '>PARTNERS


                            </li>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Partner programs




                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    Partner portal




                                </li>
                            </div>
                            <div>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2]  font-semibold text-[16px]  mt-2 pt-3 pb-2 '>Partner Finder





                                </li>
                                <li className='w-full items-start flex pl-2 hover:bg-[#f4f2f2] font-semibold text-[16px]  mt-2 pt-3 pb-2 '>
                                    App store

                                </li>
                            </div>


                        </ul>

                    </div>
                    <div className='w-[50%] bg-[#f4f2f2]'>
                        <div className='mt-20 ml-10 flex flex-col items-start'>
                            <div className='flex -mt-10 cursor-pointer justify-end w-[80%] m-auto'> <img className='w-8 h-8' src={close} alt="close" onClick={handleHideDiv} /></div>
                            <h1 className='text-2xl font-semibold text-[#293e40]'>About ServiceNow</h1>
                            <p className='flex text-left  mt-4 text-lg text-[#293e40]'>
                                The world works with ServiceNow. We believe in the power of technology to reduce complexity and make the world a better place for all of us.
                            </p>
                            <div className='flex text-center items-center'>
                                <button className='px-7 py-2 mt-6 rounded- text-[#293e40] border-[2px] border-[#293e40] font-semibold  hover:text-white hover:bg-[#293e40]'>Learn More</button>

                            </div>


                        </div>
                        <div className='flex px-10 justify-between mt-14'>
                            <div className='w-[48%] mt-4'><img src={about} /></div>
                            <div className='w-[45%] flex flex-col items-start'>
                                <h1 className='text-[16px] text-left font-semibold my-3 '>


                                    Fill the demand for skilled talent</h1>
                                <h2 className='text-left mb-4'>Rise up and join the digital revolution. Help fill the need for people with ServiceNow expertise.

                                </h2>
                                <p className='text-[16px] font-semibold '>Get Started</p>
                            </div>
                        </div>

                    </div>
                </div>
                }

</div>
    

    )
}

export default NavBar;