import React from 'react'
import Template from '../components/auth/template';
import image from"./../image/login.webp";
import Navbar from '../components/common/navbar';

function Login() {
  return (
    <div>
        
      <Navbar></Navbar>
      
    <Template title="Welcome Back"  description1={"Build skills for today, tomorrow, and beyond "} description2={"Education to future-proof your career."} image={image} formType={"Login"}  ></Template>
   
    </div>
   
  )
}

export default Login;