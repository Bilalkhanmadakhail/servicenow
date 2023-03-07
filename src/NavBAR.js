import logo from './assets/icon.png'
import search from './assets/search-icon.svg'
import account from './assets/account.png'
import globe from './assets/globe (1).png'


function NavBar(props) {
  
    return (
        <div className='flex justify-between w-[100%] ' >
            <div className='w-[300px] py-5 px-9'>
                <img className='w-[100%]' src={logo} />
            </div>
            <ul className="w-[58%] hidden lg:flex justify-start py-7 font-sans  text-[#293e40] text-lg">
                <li className='pr-5 cursor-pointer'> <a>{props.Solution}</a></li>
                <li className='pr-5 cursor-pointer'> <a>{props.product}</a></li>
                <li className='pr-5 cursor-pointer'> <a>{props.Platform}</a></li>
                <li className='pr-5 cursor-pointer'> <a>{props.Customer}</a></li>
                <li className='pr-5 cursor-pointer'> <a>{props.Events}</a></li>
                <li className='pr-5 cursor-pointer'> <a>{props.About}</a></li>


            </ul>
            <div className='flex py-5 justify-around w-[22%] mr-5'>
                <button className='px-5 py-1 rounded-sm font-semibold text-white bg-[#293e40]'> {props.button}</button>
              
                <img className=' mt-2 w-[28px] h-[28px] hidden xl:block' src={search}/>
                <img className='mt-2 w-[28px] h-[28px] hidden xl:block' src={globe}/>
                <img className='mt-2 w-[28px] h-[28px] hidden xl:block' src={account}/>
            

            </div>

        </div>
    )
}

export default NavBar;