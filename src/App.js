import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBAR from './NavBAR';
import Student from './Student'
import User from './User'




function App() {


  return (
    <div className="App w-[100%] ">

      <NavBAR product='products' Solution='Solutions' Platform='Platform'
        Customer='Customers' Events='Events' About='About' button='Get Started' img={logo} />

      <User make='Make YES Work' fordemo='Try Demo' forcontact='Contact Sales' lookingfor='View Customer Stories' explore='Explore Platform' para2='Behind every great experience is a great workflow. As the foundation for all digital workflows, the Now Platform® connects people, functions, and systems across your organization.' h2='The platform of platforms' workflow1='IT Workflows' workflow2='Employee Workflows

' workflow3='Customer Workflows' workflow4='Creator Workflows'   h3='Unleash the power of IT' part2h3='Elevate the employee experience' part3h3='Drive customer loyalty' part4h3='Build apps fast'
para3='Transform your business with digital IT workflows. Modernize your operations to optimize productivity, cost, and resilience with a single platform for IT.'  
     part2para3='Make it easier for employees to get what they need, when they need it. Embed intelligence into every interaction to deliver experiences that break down silos and unlock productivity.'
      part3para3='Reimagine the customer experience to create instant satisfaction. Scale service operations with connected digital workflows to automate work across departments.' 
      part4para3='Create intuitive experiences users love. Quickly build digital workflow apps and scale across the enterprise with a low-code platform.' 
      
      btn3='Get Details' h4='Personalize your value acceleration' para4='Maximize your investment with ServiceNow Impact. Realize value faster with experts on demand, premium support, and preventive tools to guide your digital transformation.' trust='Trusted by ~7,700 enterprise customers' btnforblue='Read Story' bluepara='With data-driven insights from over 200 bread-making facilities, Grupo Bimbo raises quality control on a global scale.' blueh1='Digital efficiency brings bread to the world' btnlast='See All News' afterblueh1='What’s new at ServiceNow' 
      
      
       box1h1='NEWS' box1h2='ServiceNow and AT&T announce telco solution' box1p='Learn how Telecom Network Inventory helps communications service providers manage 5G and fiber networkinventory.' box1h3='Read Press Release'
       box2h1='ANNOUNCEMENT' box2h2='ServiceNow CEO at investor conference' box2p='Register to hear Bill McDermott speak at the Morgan Stanley 2023 Technology, Media and Telecom conference.' box2h3='Read Press Release'
       
       box3h1='ANNOUNCEMENT' box3h2='ServiceNow CEO at investor conference' box3p='Register to hear Bill McDermott speak at the Morgan Stanley 2023 Technology, Media and Telecom conference.' box3h3='Read Press Release
       
       '
       box4h1='NEWS' box4h2=' Enhanced ServiceNow partner program' box4p='Were transforming the experience to simplify and deepen our partner relationships, helping our co-creators drive more customer value.' box4h3=' Read Blog'
       box5h1='NEWS' box5h2='  New innovations on the ServiceNow app store' box5p=' Learn how new solutions from ServiceNow help digitize today’s most pressing workplace productivity challenges.' box5h3='
       Read Press Release'
       box6h1='
      
       NEWS
      
       
      
       ' box6h2=' Be unstoppable' box6p=' Turn dreams into in-demand skills. Explore RiseUp with ServiceNow and elevate your career.' box6h3=' Get Started'
       
       box8h1='NEWS' box8h2='  ServiceNow and AT&T announce telco solution ' box8p=' Learn how Telecom Network Inventory helps communications service providers manage 5G and fiber networkinventory. ' box8h3='  Read Press Release '
       box7h1='NEWS' box7h2='  ServiceNow and AT&T announce telco solution' box7p='  Learn how Telecom Network Inventory helps communications service providers manage 5G and fiber networkinventory.' box7h3='  Read Press Release '
       
              
       />

      <Student mainli1='Company' li1='About' li2='Careers' li3='Locations' li4='Partners' li5='Suppliers' li6='Investors' li7='Newsroom' li8='Blog' li9='Workflow magazine: Insights and research'
        mainli2='Services and Support' li21='Services' li22='Now Support portal'

        mainli3='Resources' li31='Customer stories' li32='ServiceNow Research' li33='Now on Now' li34='Training and certification' li35='User community' li36='InveDeveloper portalstors' li37='NewProduct documentationsroom' li38='Product accessibility
    '  li39='Resource library'

        mainli4='My Account' li41='Sign in' li42='Register' submit='Subcribe' />

       


    </div>



  );
}

export default App;