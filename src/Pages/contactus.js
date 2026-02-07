import React from 'react'
import Contactform from '../components/common/contactform'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Navbar from '../components/common/navbar';
import { GiIndiaGate } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';

import Modal from '../components/common/modal';


function Contactus() {
    const email="brooftechie@gmail.com"
    const address="laxmi nagar new delhi"
    const phonenumber="9897969594"
   
    const[openmodal,setModal]=useState(false);

    if(openmodal){
      return(<Modal setmodal={setModal}/>)

    }
  return (
    <div  >
        <Navbar setmodal={setModal}/>

        
        <div className='flex flex-row w-11/12 justify-around mx-auto items-center mt-10'>
              
           

               <div className='w-[40%] flex flex-col justify-start items-start h-[70vh] '>



                  
               <div className=' flex flex-col pl-10 mx-auto justify-center bg-richblack-800  w-[25vw] h-[35vh] gap-5 rounded-2xl'>
            
            
            <div className='flex flex-col justify-start items-start  w-full'>
                <h4 className='flex flex-row text-white font-bold gap-2'> <HiChatBubbleLeftRight className='text-3xl' /> Chat on us</h4>
                <p className='text-richblack-400 font-inter text-balance text-sm  pl-9'>Our friendly team is here to help.<br/> {email}</p>
            </div>


             <div className='flex flex-col justify-start items-start w-full '>
                <h4 className='flex flex-row text-white font-bold gap-2'> <IoCall  className='text-3xl' /> Call us</h4>
                <p className='text-richblack-400 font-inter text-balance text-sm  pl-9'>Mon - Fri From 8am to 5pm<br/> {phonenumber}</p>
            </div>



             <div className='flex flex-col justify-start items-start w-full '>
                <h4 className='flex flex-row text-white font-bold gap-2'> <GiIndiaGate className='text-3xl' /> Visit us</h4>
                <p className='text-richblack-400 font-inter text-balance text-sm  pl-9'>Come and say hello at our office HQ.<br/> {address}</p>
            </div>

              
           </div>
           




               </div>
           

           
           
           
           
            <div className='w-[55%] flex flex-col justify-center items-center border-richblack-400 border-[.2px] rounded-3xl'>
                <div className='flex flex-col w-full  ml-10 mb-10 mt-16'>
                <h1 className='text-white font-bold text-3xl '>Got a Idea? We’ve got the skills. Let’s team up</h1>
                <p className='font-inter text-richblack-400 text-center'>Tell' us more about yourself and what you’ve got in mind.</p>
              </div>
                <Contactform />
            </div>



        </div>
        
    </div>
  )
}

export default Contactus