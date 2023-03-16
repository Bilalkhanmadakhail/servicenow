
import logo from './assets/icon.png'
import expand from './assets/expan.png'
import arrow from './assets/arrow.png'
import linkin from './assets/linkdin.svg'
import fb from './assets/fb.svg'
import yt from './assets/yt.svg'
import insta from './assets/insta.svg'
import twitter from './assets/twitter.svg'
import tiktok from './assets/tiktok.svg'


import globe from './assets/globe (1).png'
function Student(props) {
    console.log(props)
    return (
        <div className="text-[#293e40] max-w-[1400px] mx-auto font-[DM Sans] ">
            <div className='w-[94%] mx-auto border-b-[1px] border-gray-300 py-12'>

                <div className=' sm:flex  sm:flex-row flex flex-col  lg:justify-start sm:justify-between'>
                    <p className='lg:w-[68%] md:w[60%] flex justify-start font-semibold'> {props.req}</p>
                <div className='lg:w-[32%] sm:my-0 my-3 md:w-[40%] flex justify-between py-3 px-5 bg-[#293e40]'>
                 <div className='flex '>  <img className='w-7' src={globe}/>
                    <p className='text-white pl-2  font-face-rm '>{props.us}</p></div> 
                    <img className=' w-7' src={expand}/>
                    
                </div>
                

                </div>
                <div className='sm:-mt-7 flex  justify-start items-center text-center'>
                    <p className='font-semibold text-lg'>{props.connect}</p><img className='mt-1 w-7 h-7' src={arrow}/>


                </div>
            </div>

            <div className="flex md:px-10 xl:px-0 mt-10 sm:px-10 px-5 lg:w-[94%] md:w-[100%] xl:justify-start md:justify-between mx-auto border-b-2 border-gray-200  ">
                <div className="lg:w-[25%] md:w-[20%] sm:w-[33%]  flex-col justify-start text-left">
                    <ul className='w-fit'>

                        <li className="font-semibold text-lg pb-6 font-face-gm cursor-pointer"><p  className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.mainli1}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer  "><p>{props.li1}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li2}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer   "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li3}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li4}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'> {props.li5}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li6}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li7}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li8}</p></li>
                        <li className="pb-4 font-face-rm sm:hidden cursor-pointer  " ><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li9}</p></li>

                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[28%] md:block hidden flex-col justify-start text-left">
                    <ul className='w-fit'>

                        <li className="font-semibold text-lg pb-6 font-face-gm cursor-pointer   "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.mainli2}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointerclassName=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100' "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li21}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer   "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li22}</p></li>


                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[28%] sm:w[33%] flex-col justify-start text-left">
                    <ul className='w-fit'>

                        <li className="font-semibold text-lg pb-6 font-face-gm  cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.mainli3}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'> {props.li31}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li32}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li33}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li34}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer"><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li35}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'> {props.li36}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'> {props.li37}</p></li>
                        <li className="pb-4 font-face-rm cursor-pointer"><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li38}</p></li>
                        <li className="pb-4 font-face-rm sm:
                        hidden cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li39}</p></li>

                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[15%] sm:w[33%]  sm:block hidden flex-col justify-start text-left">
                    <ul className='w-fit'>

                        <li className="font-semibold font-face-gm text-lg pt-6 cursor-pointer  "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.mainli4}</p></li>
                        <li className="pt-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'>{props.li41}</p></li>
                        <li className="pt-4 font-face-rm cursor-pointer "><p className=' relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100'   >{props.li42}</p></li>


                    </ul>
                </div>
            </div>

            <div>

                <div className="md:flex md:flex-row sm:flex sm:flex-col w-[100%]  px-5 sm:px-10  mx-auto">


                    <div className="md:w-[60%] sm:w-[100%] my-10 flex-col flex justify-start">
                        <p className="flex font-face-gm justify-start mb-5 text-lg font-bold">{props.updates}</p>
                        <div className="flex">
                            <input className="border-gray-600 font-face-rm border-[1px] w-[50%]  px-3 lg:py-3 md:py-2 sm:py-3 " type="email"  placeholder="Email" />
                            <button className="border-gray-600 hover:bg-[#4B5563] hover:text-white cursor-pointer border-[2px] ml-5 px-10 font-semibold md:py-2 lg:py-3">{props.submit}</button>
                        </div>
                    </div>

                    <div className="md:w-[40%] sm:w-[100%] my-10">
                        <p className="flex justify-start mb-5 font-face-gm text-lg font-bold">{props.connect}</p>
                        <div className="flex md:w-[100%] sm:w-[60%] justify-between pr-10">
                        <svg className='xl:w-12 xl:h-12 h-8 w-8'>
                                     
                                        <title>LinkedIn-outline</title>
                                        <desc>Created with Sketch.</desc>
                                        <g id="Design" stroke="white" stroke-width="1"  fill="none" className='hover:fill-black' fill-rule="evenodd">
                                            <g id="Artboard" transform="translate(-41.000000, -227.000000)">
                                                <g id="LinkedIn-outline" transform="translate(42.000000, 228.000000)">
                                                    <circle id="Oval-Copy-9" stroke="#000000" cx="20" cy="20" r="20">
                                                    </circle>
                                                    <path d="M11.4540216,16.7718018 L14.9623706,16.7718018 L14.9623706,28.9988475 L11.4540216,28.9988475 L11.4540216,16.7718018 Z M13.1187676,15.2424126 L13.0933678,15.2424126 C11.8233772,15.2424126 11,14.3077219 11,13.1240876 C11,11.9162505 11.8477187,11 13.1431091,11 C14.4374412,11 15.233302,11.9139454 15.2587018,13.12063 C15.2587018,14.3042643 14.4374412,15.2424126 13.1187676,15.2424126 L13.1187676,15.2424126 Z M29,29 L25.0217545,29 L25.0217545,22.6715328 C25.0217545,21.0153669 24.3994591,19.8859009 23.0310442,19.8859009 C21.9843603,19.8859009 21.4022813,20.6477142 21.13135,21.3841721 C21.0297507,21.6469458 21.0456256,22.0145985 21.0456256,22.3834038 L21.0456256,29 L17.1044214,29 C17.1044214,29 17.1552211,17.7906262 17.1044214,16.7718018 L21.0456256,16.7718018 L21.0456256,18.6907415 C21.2784572,17.8517096 22.5378645,16.6542451 24.5476246,16.6542451 C27.0410395,16.6542451 29,18.4141375 29,22.2001537 L29,29 L29,29 Z" id="Shape" fill="#000000"><path d="M11.4540216,16.7718018 L14.9623706,16.7718018 L14.9623706,28.9988475 L11.4540216,28.9988475 L11.4540216,16.7718018 Z M13.1187676,15.2424126 L13.0933678,15.2424126 C11.8233772,15.2424126 11,14.3077219 11,13.1240876 C11,11.9162505 11.8477187,11 13.1431091,11 C14.4374412,11 15.233302,11.9139454 15.2587018,13.12063 C15.2587018,14.3042643 14.4374412,15.2424126 13.1187676,15.2424126 L13.1187676,15.2424126 Z M29,29 L25.0217545,29 L25.0217545,22.6715328 C25.0217545,21.0153669 24.3994591,19.8859009 23.0310442,19.8859009 C21.9843603,19.8859009 21.4022813,20.6477142 21.13135,21.3841721 C21.0297507,21.6469458 21.0456256,22.0145985 21.0456256,22.3834038 L21.0456256,29 L17.1044214,29 C17.1044214,29 17.1552211,17.7906262 17.1044214,16.7718018 L21.0456256,16.7718018 L21.0456256,18.6907415 C21.2784572,17.8517096 22.5378645,16.6542451 24.5476246,16.6542451 C27.0410395,16.6542451 29,18.4141375 29,22.2001537 L29,29 L29,29 Z" id="Shape" fill="#000000"></path></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <svg className='xl:w-12 xl:h-12 w-8 h-8' >
                                      
                                        <title>twitter-outline</title>
                                        <desc>Created with Sketch.</desc>
                                        <g id="Design" stroke="white" stroke-width="1" fill="none" className='hover:fill-black' fill-rule="evenodd">
                                            <g id="Artboard" transform="translate(-41.000000, -169.000000)">
                                                <g id="twitter-outline" transform="translate(42.000000, 170.000000)">
                                                    <circle id="Oval-Copy-7" stroke="#000000" cx="20" cy="20" r="20">
                                                    </circle>
                                                    <path d="M26.8795563,14.5109397 C27.6423666,14.0154047 28.2276809,13.2296607 28.5023772,12.2936503 C27.7881669,12.753626 26.9989435,13.0862768 26.1568938,13.266367 C25.4849445,12.4863583 24.5245642,12 23.461701,12 C21.4226096,12 19.770206,13.795167 19.770206,16.0090151 C19.770206,16.3233127 19.8008452,16.6295809 19.8642367,16.9220841 C16.7960909,16.7546117 14.0755415,15.1601822 12.2530375,12.7329787 C11.9350238,13.3271618 11.7533016,14.0154047 11.7533016,14.7495306 C11.7533016,16.1397813 12.405177,17.3671479 13.3961965,18.0875088 C12.7908082,18.0668615 12.2213418,17.8844771 11.7226624,17.5862385 L11.7226624,17.6355626 C11.7226624,19.5787019 12.9947174,21.199514 14.6862124,21.5665769 C14.3755943,21.6606368 14.0501849,21.7076667 13.7120972,21.7076667 C13.4743793,21.7076667 13.241944,21.6835782 13.0179609,21.6365482 C13.4870576,23.2286836 14.8510301,24.38952 16.4675119,24.4204909 C15.2028526,25.4964441 13.6106709,26.13651 11.881141,26.13651 C11.5832013,26.13651 11.2884311,26.1193039 11,26.0814506 C12.6344427,27.2181985 14.5752773,27.8823529 16.6608558,27.8823529 C23.4543053,27.8823529 27.1669308,21.7730498 27.1669308,16.4747262 C27.1669308,16.3003713 27.1648177,16.1271635 27.1574221,15.9562498 C27.879028,15.3907436 28.5066033,14.6841475 29,13.8800503 C28.3375594,14.1989362 27.6254622,14.4145857 26.8795563,14.5109397 Z" id="Shape" fill="#000000"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <svg className='xl:w-12 xl:h-12 w-8 h-8'>
                                    
                                        <title>youtube-outline</title>
                                        <desc>Created with Sketch.</desc>
                                        <g id="Design" stroke="white" stroke-width="1" fill="none" className='hover:fill-black' fill-rule="evenodd">
                                            <g id="Artboard" transform="translate(-41.000000, -107.000000)">
                                                <g id="youtube-outline" transform="translate(42.000000, 108.000000)">
                                                    <circle id="Oval-Copy-5" stroke="#000000" cx="20" cy="20" r="20">
                                                    </circle>
                                                    <path d="M29,23.8095956 L29,17.1904044 C29,17.1904044 29,14 25.898048,14 L14.1008937,14 C14.1008937,14 11,14 11,17.1904044 L11,23.8095956 C11,23.8095956 11,27 14.1008937,27 L25.898048,27 C25.898048,27 29,27 29,23.8095956 M23.6,20.5005678 L17.3,24.2142857 L17.3,16.7857143 L23.6,20.5005678" id="Shape" fill="#000000"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                    <svg className='xl:w-12 xl:h-12 w-8 h-8'>
                                     
                                        <title>facebook-outline</title>
                                        <desc>Created with Sketch.</desc>
                                        <g id="Design" stroke="white" stroke-width="1" fill="none" className='hover:fill-black' fill-rule="evenodd">
                                            <g id="Artboard" transform="translate(-41.000000, -51.000000)">
                                                <g id="facebook-outline" transform="translate(42.000000, 52.000000)">
                                                    <circle id="Oval-Copy-4" stroke="#000000" cx="20" cy="20" r="20">
                                                    </circle>
                                                    <path d="M24.4724704,17.3000366 L21.2999803,17.3000366 L21.2999803,15.5000422 C21.2999803,14.5712451 21.3755801,13.9862469 22.7066759,13.9862469 L24.3878707,13.9862469 L24.3878707,11.1242559 C23.5697732,11.0396561 22.7471758,10.9982563 21.9236784,11 C19.481986,11 17.6999916,12.4913516 17.6999916,15.229143 L17.6999916,17.3000366 L15,17.3000366 L15,20.9000253 L17.6999916,20.8991253 L17.6999916,29 L21.2999803,29 L21.2999803,20.8973253 L24.0593717,20.8964253 L24.4724704,17.3000366 Z" id="Path" fill="black"  fill-rule="nonzero"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <svg className='xl:w-12 xl:h-12 w-8 h-8'>
                                    
                                        <title>Instagram-outline</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs>
                                            <polygon id="path-1" points="0 0.00567857143 17.9943214 0.00567857143 17.9943214 17.9978571 0 17.9978571">
                                            </polygon>
                                        </defs>
                                        <g id="Design" stroke="white" stroke-width="1" fill="none" className='hover:fill-black' fill-rule="evenodd">
                                            <g id="Artboard" transform="translate(-41.000000, -288.000000)">
                                                <g id="Instagram-outline" transform="translate(42.000000, 289.000000)">
                                                    <circle id="Oval-Copy-11" stroke="#000000" cx="20" cy="20" r="20">
                                                    </circle>
                                                    <g id="Group" transform="translate(11.000000, 11.000000)">
                                                        <g id="Group-3">
                                                            <mask id="mask-2" fill="white">
                                                                <use href="#path-1"></use>
                                                            </mask>
                                                            <g id="Clip-2"></g>
                                                            <path d="M9.00001786,0 C6.55574675,0 6.24925721,0.0103571429 5.28931151,0.0541428571 C4.33136644,0.0978214286 3.67712433,0.249928571 3.10465802,0.472357143 C2.51282845,0.70225 2.01092011,1.00989286 1.51054797,1.51007143 C1.01021155,2.01028571 0.702471613,2.51203571 0.472506207,3.10367857 C0.250007443,3.67596429 0.0978522986,4.33 0.0541599433,5.28764286 C0.0103604113,6.24728571 0,6.55367857 0,8.99717857 C0,11.4406429 0.0103604113,11.7470357 0.0541599433,12.7066786 C0.0978522986,13.6643214 0.250007443,14.3183571 0.472506207,14.8906429 C0.702471613,15.4822857 1.01021155,15.9840357 1.51054797,16.48425 C2.01092011,16.9844286 2.51282845,17.2920714 3.10465802,17.522 C3.67712433,17.7443929 4.33136644,17.8965 5.28931151,17.9401786 C6.24925721,17.9839643 6.55574675,17.9943214 9.00001786,17.9943214 C11.4442532,17.9943214 11.7507428,17.9839643 12.7106885,17.9401786 C13.6686336,17.8965 14.3228757,17.7443929 14.895342,17.522 C15.4871715,17.2920714 15.9890799,16.9844286 16.489452,16.48425 C16.9897884,15.9840357 17.2975284,15.4822857 17.5275295,14.8906429 C17.7499926,14.3183571 17.9021477,13.6643214 17.9458401,12.7066786 C17.9896396,11.7470357 18,11.4406429 18,8.99717857 C18,6.55367857 17.9896396,6.24728571 17.9458401,5.28764286 C17.9021477,4.33 17.7499926,3.67596429 17.5275295,3.10367857 C17.2975284,2.51203571 16.9897884,2.01028571 16.489452,1.51007143 C15.9890799,1.00989286 15.4871715,0.70225 14.895342,0.472357143 C14.3228757,0.249928571 13.6686336,0.0978214286 12.7106885,0.0541428571 C11.7507428,0.0103571429 11.4442532,0 9.00001786,0 Z M9.00001786,1.62110714 C11.4030974,1.62110714 11.6877586,1.63028571 12.6367723,1.67357143 C13.5142634,1.71357143 13.9908066,1.86014286 14.3079424,1.98335714 C14.7280392,2.14657143 15.0278481,2.34153571 15.3427688,2.65639286 C15.6577254,2.97121429 15.8527512,3.27092857 16.016017,3.69089286 C16.1392701,4.00792857 16.2858878,4.48432143 16.3259004,5.36153571 C16.3691998,6.31025 16.3783813,6.59482143 16.3783813,8.99717857 C16.3783813,11.3995 16.3691998,11.6840714 16.3259004,12.6327857 C16.2858878,13.51 16.1392701,13.9863929 16.016017,14.3034286 C15.8527512,14.7233929 15.6577254,15.0231071 15.3427688,15.3379286 C15.0278481,15.6527857 14.7280392,15.84775 14.3079424,16.0109643 C13.9908066,16.1341786 13.5142634,16.28075 12.6367723,16.32075 C11.6879015,16.3640357 11.403276,16.3732143 9.00001786,16.3732143 C6.59672397,16.3732143 6.31213419,16.3640357 5.36322768,16.32075 C4.48573657,16.28075 4.00919338,16.1341786 3.69205761,16.0109643 C3.2719608,15.84775 2.97215193,15.6527857 2.65723115,15.3379286 C2.34231037,15.0231071 2.14724883,14.7233929 1.98398304,14.3034286 C1.86072987,13.9863929 1.71411219,13.51 1.67409957,12.6327857 C1.63080019,11.6840714 1.62161872,11.3995 1.62161872,8.99717857 C1.62161872,6.59482143 1.63080019,6.31025 1.67409957,5.36153571 C1.71411219,4.48432143 1.86072987,4.00792857 1.98398304,3.69089286 C2.14724883,3.27092857 2.34227465,2.97121429 2.65723115,2.65639286 C2.97215193,2.34153571 3.2719608,2.14657143 3.69205761,1.98335714 C4.00919338,1.86014286 4.48573657,1.71357143 5.36322768,1.67357143 C6.31224136,1.63028571 6.59690259,1.62110714 9.00001786,1.62110714 L9.00001786,1.62110714 Z" id="Fill-1" fill="#0A0B09" mask="url(#mask-2)"></path>
                                                        </g>
                                                        <path d="M8.99717857,12.0018929 C7.34082143,12.0018929 5.99810714,10.6591786 5.99810714,9.00285714 C5.99810714,7.3465 7.34082143,6.00378571 8.99717857,6.00378571 C10.6535,6.00378571 11.9962143,7.3465 11.9962143,9.00285714 C11.9962143,10.6591786 10.6535,12.0018929 8.99717857,12.0018929 Z M8.99717857,4.38267857 C6.4455,4.38267857 4.377,6.45117857 4.377,9.00285714 C4.377,11.5545 6.4455,13.623 8.99717857,13.623 C11.5488214,13.623 13.6173214,11.5545 13.6173214,9.00285714 C13.6173214,6.45117857 11.5488214,4.38267857 8.99717857,4.38267857 L8.99717857,4.38267857 Z" id="Fill-4" fill="#0A0B09"></path>
                                                        <path d="M14.8795357,4.20014286 C14.8795357,4.79642857 14.3961429,5.27978571 13.7998571,5.27978571 C13.2036071,5.27978571 12.7202143,4.79642857 12.7202143,4.20014286 C12.7202143,3.60385714 13.2036071,3.12046429 13.7998571,3.12046429 C14.3961429,3.12046429 14.8795357,3.60385714 14.8795357,4.20014286" id="Fill-5" fill="#0A0B09"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <img className='xl:w-12 xl:h-12 w-8 h-8' src={tiktok}/>
                       

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[94%] mt-5 sm:block hidden xl:flex mx-auto">
                    <div className='lg:w-[13%]  md:w-[20%] sm:w-[20%] border-r-2 border-gray-300'>
                        <img className='pr-5' src={logo} />
                    </div>
                    <span className='pl-5 font-semibold font-face-gm lg:text-lg md:text-[14px] flex justify-start'>{props.servicemark}</span>

                </div>

            </div>
            <div>
                <div className=" text-sm mt-5 w-[100%]  flex mx-auto">
                    <ul className='sm:flex md:mx-3 font-face-rm sm:mx-4 mx-5 text-left  w-[100%] xl:flex justify-around'>
                        <li className=' cursor-pointer relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>{props.lastli1}</li>
                        <li className='sm:hidden xl:block relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  cursor-pointer'>{props.lastli2}</li>
                        <li className=' cursor-pointer relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>{props.lastli3} </li>
                        <li className='sm:hidden lg:block relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  cursor-pointer'>{props.lastli4}</li>
                        <li className=' cursor-pointer relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>{props.lastli5}</li>
                        <li className=' sm:hidden relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  xl:block cursor-pointer'>{props.lastli6}</li>
                        <li className='sm:hidden: lg:block relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100  cursor-pointer'>{props.lastli7}  </li>
                        <li className=' cursor-pointer relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>{props.lastli8} </li>
                        <li className='sm:hidden lg:block cursor-pointer relative z-10   border-transparent text-black-800 transition-colors before:absolute before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:border-b-2 before:border-b-[#62d84e] before:transition-transform before:duration-300  hover:text-black before:hover:scale-x-100 '>{props.lastli9} </li>
                    </ul> 
                </div>
                <div className=" mt-2 flex mx-auto">
                    <p className='text-sm px-5 font-face-rm sm:px-7 md:px-10 pb-14'>{props.coprit}</p>
                </div>

            </div>
        </div>


    )
}

export default Student