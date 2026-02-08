import React, { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Tab from '../common/tab';
import { FaAsterisk } from "react-icons/fa";
import codes from"../../data/countrycode.json"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import{setsignupdata} from"../../slices/authslice";
import { Sendotp } from '../../services/operation/auth';
import { settab } from '../../slices/tabslice';
import toast from 'react-hot-toast';

   function Signupform() {
 
    const navigate=useNavigate();
    const dispatch=useDispatch(); 

    const[formdata,setformdata]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword :"",
    countrycode:"+91",
    contactNumber:"",
   
 

  });
  const{currenttab}=useSelector((state)=>state.tab);



  const[ accountType,setaccounttype]=useState(currenttab)



  const[showpass,setshowpass]=useState(false)
  const[showcnfpass,setcnfshowpass]=useState(false)


  const{firstName,lastName,email,password,confirmPassword,countrycode ,contactNumber}= formdata;

  const{signupdata}=useSelector((state)=>state.auth);
    
  
  
    function changehandle(e){
       
    
    setformdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    })
   
);
     }


  function clickhandler(){

    setshowpass((prev)=>!prev);

}

function clickhandler2(){

    setcnfshowpass((prev)=>!prev);

}


 function handlesubmit(e){
   


   
   
   
   
    e.preventDefault();
        
    
    const Signupdata={
            ...formdata,
            accountType
        }
          

        if(password!==confirmPassword){
            return toast.error("Passwords Do Not Match")
        }


         

        

        dispatch(setsignupdata(Signupdata));

      
       
          dispatch(Sendotp(formdata.email,navigate));






       
       setformdata({ 
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword :"",
         countrycode:"+91",
         contactNumber:"",
     

       });

       setaccounttype("Student");
       dispatch(settab("Student"));

      

     

     




  

 

}



  return (
    <div>
       
         <Tab currenttab={accountType} setaccounttype ={setaccounttype} ></Tab>
       
        <form onSubmit={handlesubmit} className='  flex flex-col w-[100%] gap-3 md:gap-10 font-mono  mt-5 '>
           
            
        

            <div className=' flex flex-col md:flex-row  gap-3 md:gap-6 w-[100%]  '>
            
            <div >
                 <label className=' text-xs flex flex-row gap-2 items-center ' >First name<FaAsterisk className='text-red-500 text-[8px]' /></label>
              
              <input   type="text" name='firstName' value={firstName} onChange={changehandle} placeholder='Enter Firstname ' required
               className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[200px] pl-2 '
              />
            </div>
           

           
              <div >
                 <label className=' text-xs flex flex-row gap-2 items-center ' >Last name<FaAsterisk className='text-red-500 text-[8px]' /></label>
             
             <input type="text" name='lastName'  value={lastName} onChange={changehandle} placeholder='Enter Lastname 'required
              className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[200px] pl-2 '/>
            
            </div>
            
            
            </div>

           
    
            <div className='flex flex-col w-[100%]  ' >
                
              
              
              <label htmlFor="countrycode" className='text-xs flex flex-row items-center gap-2'>Mobile number <FaAsterisk className='text-red-500 text-[8px]' /> </label>
               <div className='w-[88%] md:w-[70%] flex flex-row gap-1 md:gap-3' >
                
                
                
               
                <select name="countrycode" id="countrycode" value={countrycode} onChange={changehandle}
                className='w-[20%] md:w-[20%] bg-richblack-800  rounded-full h-8 text-xs md:text-base'
                >

                   { codes.map((item,index)=>(
                    <option key={index} value={item.code}> {item.code}</option>
                   ))

                }  
                </select>
               
               <div className='w-[80%] flex items-center '>
                   
                    <input type="tel"
                    name='contactNumber'
                    value={contactNumber}
                    onChange={changehandle}
                    required
                    placeholder='Mobile number'
                   minLength="10" 
                    className=' w-[90%] md:w-[95%] h-8 bg-richblack-800  border-b-[1px] border-richblack-400  rounded-lg pl-2' />
                </div>


                </div> 


                





            </div>
            

             <div >
                
                
                 <label className=' text-xs flex flex-row gap-2 items-center ' >Email<FaAsterisk className='text-red-500 text-[8px]' /></label>
                <input 
                type="email"
                 name='email' 
                 value={email}
                  onChange={changehandle} 
                  placeholder='Enter your email '
                  required

                   className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[80%] md:w-[68%] pl-2 '
                  
                  />
           
             </div>
           
              <div className='flex flex-col md:flex-row gap-2 md:gap-5'>



              
              <div className='flex gap-1 md:gap-2 items-center  '>
                 
                 
                 <div className='flex flex-col  relative  '>
                 
                 
                 <label className=' text-xs flex flex-row gap-2  items-center ' >Password <FaAsterisk className='text-red-500 text-[8px]' /></label>
                 
                 <input type={`${showpass?"text":"password"}`} 
                 name='password' 
                 value={password} 
                 onChange={changehandle}
                 placeholder='Password'
                 required
                 
                 className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[200px] pl-2 ' />
                 
                 {
                 
                 showpass?<IoMdEye className=' absolute right-2 bottom-1.5' onClick={clickhandler} />:<IoMdEyeOff className=' absolute right-2 bottom-1.5'  onClick={clickhandler}
                 
                 />

                 }
                 </div>



              </div>

             <div className='flex flex-row gap-2 items-center relative'>

                
                
                <div className='flex flex-col   relative '>

                 <label className=' text-xs flex flex-row gap-2 items-center ' >Confirm Password<FaAsterisk className='text-red-500 text-[8px]' /></label>
                 
                 <input 
                 type={`${showcnfpass?"text":"password"}`}
                  name='confirmPassword'
                   value={confirmPassword}
                    onChange={changehandle}
                 className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[200px] pl-2 '
                 placeholder='Password'
                 required
                 />
                 
                 
                 {
                 showcnfpass?<IoMdEye className=' absolute right-2 bottom-1.5' onClick={clickhandler2} />:<IoMdEyeOff className=' absolute right-2 bottom-1.5'  onClick={clickhandler2}/>

                 }
                
                </div>


                 

              </div>

              </div>
              
                
                <button type='submit' className='bg-yellow-100 w-[65%] rounded-md text-stone-700 font-medium h-6 md:h-10'>
                    Create Account
                </button>
               

        </form>
    </div>
  )
}

export default Signupform