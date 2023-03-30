import Navbar from '../page2/Navbar2';
import Section3 from '../page3/Section3';
import Last from '../mainpage/Last';
import Card2 from '../page3/Card2';
function About(){
    return(
        <div className='page3 max-w-[1400px]   mx-auto'>
        <div className='bg-[#FAF8F2]'>
     
        <Section3 btn='For DAO' p3='Receive fiat then send payments in crypto without having crypto on your books' h1='Turn fiat' h2=' into crypto'
   btn2='Create account' p1='with your DAO' p2='' />
        </div>
        <Card2/>
     
        
      </div>
    )
}
export default About;