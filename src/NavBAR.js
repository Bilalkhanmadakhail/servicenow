import logo from './assets/icon.png'
import search from './assets/search-icon.svg'
import account from './assets/account.png'
import globe from './assets/globe (1).png'


function NavBar(props) {
  
    return (
        <div className='flex ' >
            <div className='w-[20%] py-5 px-9'>
                <img className='w-[100%]' src={logo} />
            </div>
            <ul className="w-[58%] flex justify-start py-7 font-sans text-[#293e40] text-lg">
                <li className='pr-5'> <a>{props.Solution}</a></li>
                <li className='pr-5'> <a>{props.product}</a></li>
                <li className='pr-5'> <a>{props.Platform}</a></li>
                <li className='pr-5'> <a>{props.Customer}</a></li>
                <li className='pr-5'> <a>{props.Events}</a></li>
                <li className='pr-5'> <a>{props.About}</a></li>


            </ul>
            <div className='flex py-5 justify-around w-[22%] mr-5'>
                <button className='px-5 py-1 rounded-sm font-semibold text-white bg-[#293e40]'> {props.button}</button>
              
                <img className=' mt-2 w-[28px] h-[28px] w-' src={search}/>
                <img className='mt-2 w-[28px] h-[28px]' src={globe}/>
                <img className='mt-2 w-[28px] h-[28px]' src={account}/>
            

            </div>

        </div>
    )
}

export default NavBar;