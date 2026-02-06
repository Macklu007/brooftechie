import React, { useState } from 'react'
import Navbar from '../components/common/navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from 'react-router-dom'
import { FaAsterisk } from "react-icons/fa";
import { updatepassword } from '../services/operation/auth';
import { Link } from 'react-router-dom';
function Updatepassword() {
     const {token}=useParams();
     const navigate=useNavigate();
     const dispatch=useDispatch();
    const[resetpass,setresetpass]=useState(false);
    const[showpass,setshow]=useState(false);
    const[showconfirmpass,setconfirmpass]=useState(false);
    const[email,setemail]=useState("");

    const[formdata,setformdata]=useState({
        password:"",
        confirmPassword:""
    });

    const{password,confirmPassword}=formdata;



    function changehandler(e){
       
    
    setformdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    })
     )

   }


   function submit(e){
    e.preventDefault();
    dispatch(updatepassword(setemail,formdata,setresetpass,token,navigate));

    


   }



    
       
   

    
  
  return (
    
     <div className='w-screen h-screen  flex flex-col  items-center justify-between   '>
        
         <Navbar/>
       
        <div className='w-[50%] flex flex-col gap-5   text-white  h-[40%] mb-72 font-mono  mx-auto pl-28'>
            
            
            <div  className=' flex flex-col gap-5 w-[80%]  '>
                 
                 

                   <h1 className='text-3xl'>{ !resetpass ? "Choose  new password" : "Reset complete!"
                    
                    }
                    </h1>

                    <p className='text-sm text-richblack-300'>
                    { resetpass?`All done! We have sent an email ${email} to confirm` :" Almost done. Enter your new password and youre all set."

                    }

                   </p>

                 
                 
                
            </div>
              
              {
                !resetpass ?  
                
                <form onSubmit={submit} 
                className='gap-10 flex flex-col w-[80%] mt-5'>
                  <div className='flex flex-col gap-2'>
                      
                      <label className='flex flex-row items-center gap-2'> newPassword<FaAsterisk className='text-red-500 text-[8px]' /> </label>
                        <input 
                        type={`${showpass ? "text" :"password"}`}
                        value={password} 
                        name="password"

                        
                        onChange={changehandler} 
                        placeholder='Enter password' 
                        className='bg-richblack-800 h-8 rounded-md border-b-[1px] border-richblack-400 w-[100%] pl-2 '
                        />
                        
                         <label className='flex flex-row items-center gap-2'> Confirm newPassword<FaAsterisk className='text-red-500 text-[8px]' /> </label>
                        <input 
                        type={`${showconfirmpass ? "text":"password"}`}
                        value={confirmPassword} 
                        name='confirmPassword'
                        
                        onChange={changehandler} 
                        placeholder='Enter password' 
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
                            onClick={()=>navigate("/login")}>Login</button>




              }

             
           
            <Link className='text-white text-sm flex flex-row gap-2 items-center' to="/login"><FaArrowLeftLong />Back to login</Link>
       
            


        </div>
        
    </div>
  )
}

export default Updatepassword