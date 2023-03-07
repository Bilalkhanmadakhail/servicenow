
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

                <div className=' flex   justify-start'>
                    <p className='w-[68%] flex justify-start font-semibold'>Request info or schedule a demo</p>
                <div className='w-[32%] flex py-4 px-5 bg-[#293e40]'>
                    <img className='w-7' src={globe}/>
                    <p className='text-white pl-2 pr-32'>United States - Global</p>
                    <img className=' w-7' src={expand}/>
                </div>
                

                </div>
                <div className='-mt-7 flex  justify-start items-center text-center'>
                    <p className='font-semibold text-lg'>Contact</p><img className='mt-1 w-7 h-7' src={arrow}/>


                </div>
            </div>

            <div className="flex w-[94%] mx-auto border-b-2 border-gray-200  ">
                <div className="w-[25%] flex-col justify-start text-left">
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
                        <li className="pb-4 cursor-pointer">{props.li9}</li>

                    </ul>
                </div>
                <div className="w-[25%] flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli2}</li>
                        <li className="pb-4 cursor-pointer">{props.li21}</li>
                        <li className="pb-4 cursor-pointer">{props.li22}</li>


                    </ul>
                </div>
                <div className="w-[25%] flex-col justify-start text-left">
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
                        <li className="pb-4 cursor-pointer">{props.li39}</li>

                    </ul>
                </div>
                <div className="w-[25%]  flex-col justify-start text-left">
                    <ul>

                        <li className="font-semibold text-lg pb-6 cursor-pointer">{props.mainli4}</li>
                        <li className="pb-4 cursor-pointer">{props.li41}</li>
                        <li className="pb-4 cursor-pointer">{props.li42}</li>


                    </ul>
                </div>
            </div>

            <div>

                <div className="flex w-[94%] mx-auto">


                    <div className="w-[60%] my-10 flex-col flex justify-start">
                        <p className="flex justify-start mb-5 text-lg font-bold">Get the latest ServiceNow updates</p>
                        <div className="flex">
                            <input className="border-gray-600 border-[1px] w-[50%]  px-3 py-3 " type="email" placeholder="Email" />
                            <button className="border-gray-600 cursor-pointer border-[2px] ml-5 px-10 font-semibold py-3">{props.submit}</button>
                        </div>
                    </div>

                    <div className="w-[40%] my-10">
                        <p className="flex justify-start mb-5 text-lg font-bold">Connect with us</p>
                        <div className="flex justify-between pr-10">
                         <img src={linkin}/>
                         <img src={twitter}/>
                         <img src={yt}/>

                         <img src={fb}/> <img src={insta}/>
                         <img src={tiktok}/>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[94%] mt-5 flex mx-auto">
                    <div className='w-[13%] border-r-2 border-gray-300'>
                        <img className='pr-5' src={logo} />
                    </div>
                    <span className='pl-5 font-semibold text-lg flex justify-start'>The world works with ServiceNow™</span>

                </div>

            </div>
            <div>
                <div className="w-[94%] text-sm mt-5 flex mx-auto">
                    <ul className='flex justify-between'>
                        <li className='pr-12 cursor-pointer'>Terms and conditions</li>
                        <li className='pr-12 cursor-pointer'>GDPR</li>
                        <li className='pr-12 cursor-pointer'> Privacy statement</li>
                        <li className='pr-12 cursor-pointer'> Cookie policy</li>
                        <li className='pr-12 cursor-pointer'>Cookie Preferences</li>
                        <li className='pr-12 cursor-pointer'> Sitemap</li>
                        <li className='pr-12 cursor-pointer'>  Business continuity</li>
                        <li className='pr-12 cursor-pointer'> Accessibility </li>
                        <li className='pr-12 cursor-pointer'>Website feedback </li>

                    </ul> 
                </div>
                <div className="w-[94%] mt-2 flex mx-auto">
                    <p className='text-sm pb-14'>©️2023 ServiceNow. All rights reserved.</p>
                </div>

            </div>
        </div>


    )
}

export default Student