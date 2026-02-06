import React from 'react'
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Sendotp } from '../services/operation/auth';
import { FaArrowLeftLong } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Navbar from '../components/common/navbar';
import { setsignupdata } from '../slices/authslice';
import {signup} from"../services/operation/auth";


function Verifyemail() {
     const [otp, setOtp] = useState('');
     const {email}=useParams();
     const navigate=useNavigate();
     const dispatch=useDispatch();

     const{signupdata}=useSelector((state)=>state.auth);

     

     
     
     
     
     
     function submithandler(e){
        e.preventDefault();

        
        if(otp.length!==6){
            toast.error("Please fill all input")
            return
        }
       
       
        if(!signupdata){
            
            toast.error("please fill signup from");
            navigate("/signup");
            return
        }



       

        const updatesignupdata={
        ...signupdata,
        otp
     }   
      
     dispatch(setsignupdata(updatesignupdata));


     dispatch(signup(updatesignupdata,navigate));








         


     }
  return (

    <div className='w-screen h-screen'>

         <Navbar/>
   
    <div className=' w-11/12 mx-auto   flex flex-col justify-center items-center h-[80%] mt-10  font-mono  '>

        
        
        
         <div className='shadow-2xl  shadow-blue-400 w-[80%] h-[90%] flex flex-col gap-10  rounded-3xl  justify-center items-center'>
         
        <div className='w-[60%] h-[15%] flex flex-col justify-center items-center gap-2 rounded-xl shadow-md  shadow-white  '>

          <h1 className='text-3xl text-white'>Verify email</h1>
          <p className='text-sm text-richblack-400'>A verification code has been sent to you. Enter the code below</p>

        </div>
   
   
     <form className='w-[50%] flex flex-col justify-center items-center gap-10 ' onSubmit={submithandler} >



         <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputType='number'
      inputStyle={"inputstyle"}
      
    
     
    
      
    />
    

     <button className='h-8 w-[60%] bg-yellow-100 text-black rounded-lg '>Verify email</button>
    
    </form>
    <div className='w-[30%] flex flex-row justify-between '>
        <Link className='text-white text-sm flex flex-row gap-2 items-center' to="/login"><FaArrowLeftLong />Back to login</Link>
       
       
        <span className='text-cyan-400 text-sm flex flex-row gap-1 items-center cursor-pointer' onClick={()=>dispatch(Sendotp(email,navigate))}> <VscDebugRestart />Resend it</span>
        
    </div>



    
    
         </div>
        </div>
    </div>
  )
}

export default Verifyemail