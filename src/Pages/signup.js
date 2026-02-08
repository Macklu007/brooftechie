import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import template from '../components/auth/template'; 
import Template from '../components/auth/template';
import image from"../image/signup.webp";
import Navbar from '../components/common/navbar';

function Signup() {
  
 





  
  
    return (
   
   
   
   
   <div>
    <Navbar></Navbar>
  <Template title="Join the millions "

  description1="learning to code with Brooftechie for free Build skills for today, tomorrow, and beyond "

  description2="Education to future-proof your career."

 image={image}
  
  ></Template>
 
    </div>
  )
}

export default Signup