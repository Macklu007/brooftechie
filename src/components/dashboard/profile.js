import React from 'react' 
import { useSelector } from 'react-redux'
import { FaEdit } from "react-icons/fa";
import { Profiledata } from './profiledata';
import Spinner from '../common/spinner';
import { useNavigate } from 'react-router-dom';

function Profile() {

   const{user}=useSelector((state)=>state.profile);
   const navigate=useNavigate();
   


   if(user===null){
    return <Spinner/>
   }

   
  return (
   <div className='w-full flex flex-col gap-10'>
   <h1 className='text-white text-4xl  font-bold pl-12'>
    My profile
   </h1>

   
   <div  className=' text-white bg-richblack-800 w-[90%] mx-auto rounded-md border-[.5px] border-richblack-500 flex flex-row h-32  items-center justify-between pr-10 '>
     

     <div className=' flex flex-row  gap-4 items-center'>

     
   <img className='rounded-full size-20 ml-5' src={user?.image} alt="profilepic"/>
   
   
    
   <div className=' flex flex-col'>
    <p className='text-xl font-bold '>{user.firstName} {user.lastName}</p>
    <p className='text-richblack-400'>{user.email}</p>

   </div>

   </div>
   <button className='flex  text-richblack-900  items-center gap-2 h-10 bg-yellow-50 justify-center rounded-lg w-24 font-semibold' onClick={()=>navigate("/dashboard/settings")}>Edit <FaEdit />
     </button>
    
   

   </div>



   <div className='w-[90%] mx-auto rounded-md border-[.5px] h-32 border-richblack-500 bg-richblack-800 gap-20'>
     <div className='flex  flex-row justify-between mx-auto w-[90%] pt-5'>
        <p className='text-white font-bold'>About</p>
         <button className='flex  text-richblack-900  font-semibold items-center gap-2 h-10 bg-yellow-50 justify-center rounded-lg w-24' onClick={()=>navigate("/dashboard/settings")}>Edit <FaEdit />
     </button>
     
        
    </div>

      
      { user.additionalDetails.about ==null ? <p className='text-richblack-400 w-[90%] mx-auto'>Write Something About Yourself</p> :<p className='text-richblack-200 w-[90%] mx-auto font-semibold'>{user.additionalDetails.about}</p>
        
      }
   </div>



   <div className='w-[90%] mx-auto rounded-md border-[.5px] h-80 border-richblack-500 bg-richblack-800 gap-20'>
    <div className='flex  flex-row justify-between mx-auto w-[90%] pt-5'>
        <p className='text-white font-bold'>Personal Details</p>
         <button className='flex  text-richblack-900   items-center gap-2 h-10 bg-yellow-50 justify-center rounded-lg w-24 font-semibold ' onClick={()=>navigate("/dashboard/settings")}>Edit <FaEdit />
     </button>
     
        
    </div>


    <div className='flex felx-row gap-10 w-[90%] mx-auto'>

      <div className='flex flex-col gap-5'>
         <Profiledata title={"First Name"} value={user.firstName} />

          <Profiledata title={"Email"} value={user.email} />

            <Profiledata title={"Gender"} value={user.additionalDetails.gender ===null?"Add gender" : ` ${user.additionalDetails.gender}`} />



      </div>


      <div className='flex flex-col gap-5'>
         <Profiledata title={"Last Name"} value={user.lastName} />

          <Profiledata title={"Phone Number"} value={user.contactNumber} />

            <Profiledata title={"Date Of Birth"} value={ user.additionalDetails.dateOfBirth === null ? "Add Date Of Birth" : ` ${user?.additionalDetails.dateOfBirth}`} />



      </div>
       
       




    </div>










   </div>

   
   

   
   
</div>
  )
}

export default Profile