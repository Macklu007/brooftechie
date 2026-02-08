import React, { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaAsterisk } from "react-icons/fa";
import Tab from '../common/tab';
import {login} from"../../services/operation/auth"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaQuestion } from "react-icons/fa";
import { settab } from '../../slices/tabslice';
import { Link } from 'react-router-dom';



function Loginform() {


    const dispatch=useDispatch();
    const navigate=useNavigate();

   const[form,setform]=useState({
     email:"",
     password:""
   })

     const{currenttab}=useSelector((state)=>state.tab);

    const[accountype,setaccounttype]=useState(currenttab);

   const {email,password}=form;
  
   function changehandle(e){

   
   
    setform((prev)=>(
        
      {  ...prev,
       
        [e.target.name]:e.target.value

      }
        
   ))

   }


    function submit(err){
    
      err.preventDefault();
    

     dispatch(login(form,navigate));

    
    
   }

   const[showpass,setshowpass]=useState(false);

   function clickhandle(){
    setshowpass((prev)=>(!prev))
   }
  
    return (
    
    
    
    
       
       <div>

                 <Tab currenttab={accountype} setaccounttype={setaccounttype}></Tab>
          <form className='w-[100%] flex flex-col gap-5 md:gap-14 font-mono mt-10   ' onSubmit={submit}>
       <div >
                         <label className=' text-xs flex flex-row gap-2 items-center ' >Email<FaAsterisk className='text-red-500 text-[8px]' /></label>
                        <input 
                        type="email"
                         name='email' 
                         value={email}
                          onChange={changehandle} 
                          placeholder='Enter your email '
                          required
        
                           className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[80%] md:w-[65%] text-[14px] pl-2 '
                          
                          />
                   
                     </div>

                      
                      
                      
                      <div className='flex flex-col  relative w-[80%] md:w-[65%]  '>
                        
                        
                        <label className=' text-xs flex flex-row gap-2  items-center ' >Password <FaAsterisk className='text-red-500 text-[8px]' /></label>
                        
                        <input type={`${showpass?"text":"password"}`} 
                        name='password' 
                        value={password} 
                        onChange={changehandle}
                        placeholder='Password'
                        required
                        
                        className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400  text-[14px]  pl-2 ' />
                        
                        {
                        
                        showpass?<IoMdEye className=' absolute right-2 bottom-1.5' onClick={clickhandle} />:<IoMdEyeOff className=' absolute right-2 bottom-1.5'  onClick={clickhandle}
                        
                        />
       
                        }
                        </div>
       
       
        <button type="submit" 
        className='bg-yellow-200 w-[80%]  md:w-[65%] rounded-md text-stone-700 font-medium h-6 md:h-10'
        >Login</button>
       </form>


       <Link to="/forgetpassword"
       
       className='text-cyan-400 text-xs md:text-sm flex justify-end w-[85%] md:w-[65%] mt-3 font-mono'
       
       ><span className='flex flex-row'>Forget password <FaQuestion /></span></Link>
        
        
       
       
       
        </div>
      
      
      
      
      
      
      
      
      
      
      
    
      
       

    
  )
}

export default Loginform