
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
        <div className="text-[#293e40] font-[DM Sans] ">
            <div className='w-[94%] mx-auto border-b-2 border-gray-300 py-14'>

                <div className=' sm:flex  sm:flex-row flex flex-col  lg:justify-start sm:justify-between'>
                    <p className='lg:w-[68%] md:w[60%] flex justify-start font-semibold'> {props.req}</p>
                <div className='lg:w-[32%] sm:my-0 my-5 md:w-[40%] flex justify-between py-4 px-5 bg-[#293e40]'>
                 <div className='flex '>  <img className='w-7' src={globe}/>
                    <p className='text-white pl-2  '>{props.us}</p></div> 
                    <img className=' w-7' src={expand}/>
                    
                </div>
                

                </div>
                <div className='sm:-mt-7 flex  justify-start items-center text-center'>
                    <p className='font-semibold text-lg'>{props.connect}</p><img className='mt-1 w-7 h-7' src={arrow}/>


                </div>
            </div>

            <div className="flex md:px-10 xl:px-0 sm:px-10 px-5 lg:w-[94%] md:w-[100%] xl:justify-start md:justify-between mx-auto border-b-2 border-gray-200  ">
                <div className="lg:w-[25%] md:w-[20%] sm:w-[33%]  flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli1}</li>
                        <li className="pb-4 cursor-pointer">{props.li1}</li>
                        <li className="pb-4 cursor-pointer">{props.li2}</li>
                        <li className="pb-4 cursor-pointer">{props.li3}</li>
                        <li className="pb-4 cursor-pointer">{props.li4}</li>
                        <li className="pb-4 cursor-pointer">{props.li5}</li>
                        <li className="pb-4 cursor-pointer">{props.li6}</li>
                        <li className="pb-4 cursor-pointer">{props.li7}</li>
                        <li className="pb-4 cursor-pointer">{props.li8}</li>
                        <li className="pb-4 sm:hidden cursor-pointer">{props.li9}</li>

                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[28%] md:block hidden flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli2}</li>
                        <li className="pb-4 cursor-pointer">{props.li21}</li>
                        <li className="pb-4 cursor-pointer">{props.li22}</li>


                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[28%] sm:w[33%] flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli3}</li>
                        <li className="pb-4 cursor-pointer">{props.li31}</li>
                        <li className="pb-4 cursor-pointer">{props.li32}</li>
                        <li className="pb-4 cursor-pointer">{props.li33}</li>
                        <li className="pb-4 cursor-pointer">{props.li34}</li>
                        <li className="pb-4 cursor-pointer">{props.li35}</li>
                        <li className="pb-4 cursor-pointer"> {props.li36}</li>
                        <li className="pb-4 cursor-pointer">{props.li37}</li>
                        <li className="pb-4 cursor-pointer">{props.li38}</li>
                        <li className="pb-4 sm:
                        hidden cursor-pointer">{props.li39}</li>

                    </ul>
                </div>
                <div className="lg:w-[25%] md:w[15%] sm:w[33%]  sm:block hidden flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli4}</li>
                        <li className="pb-4 cursor-pointer">{props.li41}</li>
                        <li className="pb-4 cursor-pointer">{props.li42}</li>


                    </ul>
                </div>
            </div>

            <div>

                <div className="md:flex md:flex-row sm:flex sm:flex-col w-[100%]  px-5 sm:px-10  mx-auto">


                    <div className="md:w-[60%] sm:w-[100%] my-10 flex-col flex justify-start">
                        <p className="flex justify-start mb-5 text-lg font-bold">{props.updates}</p>
                        <div className="flex">
                            <input className="border-gray-600 border-[1px] w-[50%]  px-3 lg:py-3 md:py-2 sm:py-3 " type="email" placeholder="Email" />
                            <button className="border-gray-600 cursor-pointer border-[2px] ml-5 px-10 font-semibold md:py-2 lg:py-3">{props.submit}</button>
                        </div>
                    </div>

                    <div className="md:w-[40%] sm:w-[100%] my-10">
                        <p className="flex justify-start mb-5 text-lg font-bold">{props.connect}</p>
                        <div className="flex md:w-[100%] sm:w-[60%] justify-between pr-10">
                         <img className='w-8 h-8  xl:w-12 xl:h-12' src={linkin}/>
                         <img className='w-8 h-8 xl:w-12 xl:h-12' src={twitter}/>
                         <img className='w-8 h-8 xl:w-12 xl:h-12' src={yt}/>

                         <img className='w-8 h-8 xl:w-12 xl:h-12' src={fb}/> <img className='w-8 h-8 xl:w-12 xl:h-12' src={insta}/>
                         <img className='w-8 h-8 xl:w-12 xl:h-12' src={tiktok}/>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[94%] mt-5 sm:block hidden xl:flex mx-auto">
                    <div className='lg:w-[13%]  md:w-[20%] sm:w-[20%] border-r-2 border-gray-300'>
                        <img className='pr-5' src={logo} />
                    </div>
                    <span className='pl-5 font-semibold lg:text-lg md:text-[14px] flex justify-start'>{props.servicemark}</span>

                </div>

            </div>
            <div>
                <div className=" text-sm mt-5 w-[100%]  flex mx-auto">
                    <ul className='sm:flex md:mx-3 sm:mx-4 mx-5 text-left  w-[100%] xl:flex justify-around'>
                        <li className=' cursor-pointer'>{props.lastli1}</li>
                        <li className='sm:hidden xl:block cursor-pointer'>{props.lastli2}</li>
                        <li className=' cursor-pointer'>{props.lastli3} </li>
                        <li className='sm:hidden lg:block cursor-pointer'>{props.lastli4}</li>
                        <li className=' cursor-pointer'>{props.lastli5}</li>
                        <li className=' sm:hidden xl:block cursor-pointer'>{props.lastli6}</li>
                        <li className='sm:hidden: lg:block cursor-pointer'>{props.lastli7}  </li>
                        <li className=' cursor-pointer'>{props.lastli8} </li>
                        <li className='sm:hidden lg:block cursor-pointer'>{props.lastli9} </li>
                    </ul> 
                </div>
                <div className=" mt-2 flex mx-auto">
                    <p className='text-sm px-5 sm:px-7 md:px-10 pb-14'>{props.coprit}</p>
                </div>

            </div>
        </div>


    )
}

export default Student