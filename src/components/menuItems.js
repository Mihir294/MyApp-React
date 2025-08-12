import Menu from './menu';
import React from 'react';
import Google from './Google.jpg';
import './menu.css';

export default function menuItems() {
  const myStyle={
    marginTop:"50px",
    padding: "27px"
  };
  return (
    <div style={myStyle}>


    <div className=' color'>
     <p >Burgers</p>
     </div>

    <div className='mains flexs'>
       <Menu src={Google} name="Veg Burger" description="Tomatos,Potato,Onion,Capsicum..."/> 
       <Menu src={Google} name="Veg Burger" description="Tomatos,Potato,Onion,Capsicum..."/>    
       <Menu src={Google} name="Veg Burger" description="Tomatos,Potato,Onion,Capsicum..."/> 
         <Menu src={Google} name="Veg Burger" description="Tomatos,Potato,Onion,Capsicum..."/>
         <Menu src={Google} name="Veg Burger" description="Tomatos,Potato,Onion,Capsicum..."/>
    </div>

     <div className='color'>
     <p >Fries</p>
     </div>

    <div className='mains flexs'>
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>    
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
    </div>

         <div className='color'>
     <p >Beverages</p>
     </div>

    <div className='mains flexs'>
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>    
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
    </div>

         <div className='color'>
     <p>Desserts</p>
     </div>

    <div className='mains flexs'>
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>    
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
    </div>

         <div className='color'>
     <p >Platters</p>
     </div>

    <div className='mains flexs'>
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>    
       <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/> 
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
         <Menu src={Google} name="Fries" description="Tomatos,Potato,Onion,Capsicum..."/>
    </div>


    </div>
  )
}
