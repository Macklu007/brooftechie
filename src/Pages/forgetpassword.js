import React, { useState } from 'react'
import Navbar from '../components/common/navbar'
import { FaAsterisk } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {resetpassword} from"../services/operation/auth"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function Forgetpassword() {
  const[emailsent,setemailsent]=useState(false);
   const[email,setemail]=useState("");
   const dispatch=useDispatch();
  
  
  
   function submit(e){
    e.preventDefault();

    dispatch(resetpassword(email,setemailsent));





   
  }
   
  function changehandler(e){
    setemail(e.target.value);


  }
   
    return (
   
   
   <div className='w-screen h-screen  flex flex-col  items-center justify-between   '>
        <Navbar/>
       
        <div className='w-[50%] flex flex-col gap-5   text-white  h-[40%] mb-72 font-mono  mx-auto pl-28'>
            
            
            <div  className=' flex flex-col gap-5 w-[80%]  '>
                 
                 

                   <h1 className='text-3xl'>{ !emailsent ? "Reset your password" : "Check email"
                    
                    }
                    </h1>

                    <p className='text-sm text-richblack-300'>
                    { emailsent ?`We have sent the reset email to ${email}` :" Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"

                    }

                   </p>

                 
                 
                
            </div>
              
              {
                !emailsent ?  
                
                <form onSubmit={submit} 
                className='gap-10 flex flex-col w-[80%] mt-5'>
                  <div className='flex flex-col gap-2'>
                      <label className='flex flex-row items-center gap-2'> Email<FaAsterisk className='text-red-500 text-[8px]' /> </label>
                        <input 
                        type="email" 
                        value={email} 
                        
                        onChange={changehandler} 
                        placeholder='Enter email' 
                        className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[100%] pl-2 '
                        />
                  </div>
               
            <button type="submit"
           className='bg-yellow-50 w-[100%] rounded-md text-stone-700 font-medium  h-10'
            >Reset password</button>
              </form>
               
               :
                           <button type="submit"
                            className='bg-yellow-50 w-[100%] rounded-md text-stone-700 font-medium  h-10'
                            onClick={submit}>Resend Email</button>




              }

             
           
           
            
             <Link className='text-white text-sm flex flex-row gap-2 items-center' to="/login"><FaArrowLeftLong />Back to login</Link>

        </div>
         
       
        
    </div>
  )
}

export default Forgetpassword