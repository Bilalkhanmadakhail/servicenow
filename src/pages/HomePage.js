import Student from '../mainpage/Student'
import User from '../mainpage/User'
import Section from '../mainpage/Section'
import Crypto from '../mainpage/Crypto'
import Last from '../mainpage/Last'

function Home(){
    return(
        <div className='max-w-[1400px]'>
        <Student h1='Pay people in crypto' h2='while staying in fiat' p1='No crypto on accounting books for businesses.' p2='Contractors paid globally, hassle-free.'/>
     

    
        <User busines='FOR BUSINESSES' crypto='Pay in Crypto, Stay in Fiat' p3='Contractors paid globally' p4='without any crypto on your books' btn3='Pay with crypto' btn4='Learn more'/>
        <Section/>
        <Crypto/>
      
        </div> 
    )


}
export default Home