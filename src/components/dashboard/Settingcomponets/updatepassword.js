import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../services/apiconnector'
import { settingapi } from '../../../services/apis'
import { useSelector } from 'react-redux'

export default function Updatepassword({setloading}) {
    const[formdata,setformdata]=useState({
        oldPassword:"",
        newPassword:"",

    })

    const{token}=useSelector((state)=>state.auth);

    function changehandle(e){
        setformdata((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }

      async function submithandler(){

        const id=toast.loading("Updating password....")

        setloading(true);
        


        try{
          
            const response= await apiConnector("PUT",settingapi.updatepassword,formdata,{
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,

        }

             );

          

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success(response.data.message)




        }
        catch(err){
            console.log(err)
            toast.error(err.response.data.message)

        }
         
        toast.dismiss(id);
        setloading(false);

    }
  return (
    <div>
        <div className='flex flex-col bg-richblack-800 mt-10  h-[25vh] rounded-lg justify-between'  >
            <h1 className='text-xl text-white font-semibold mt-2 ml-10'>Update Password</h1>
           
            <form className='flex flex-col  mt-5 gap-5 '  onSubmit={submithandler} >
            
            <div className='flex flex-row'>
                    <div className='flex flex-col ml-10 '>
                <label htmlFor='oldPassword' className='text-richblack-100 font-bold '>Old Password</label>
                 <input 
                 type='text'
                  value={formdata.oldPassword} 
                  name='oldPassword'
                   id='oldPassword'
                   onChange={changehandle}
                   className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'
                   />
                   
            </div>


             <div className='flex flex-col ml-10 '>
               
                <label htmlFor='newPassword' className='text-richblack-100 font-bold '>New Password</label>
                 <input 
                 type='text'
                  value={formdata.newPassword} 
                  name='newPassword'
                   id='newPassword'
                   onChange={changehandle}
                   className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'/>
                   
            </div>



            </div>
           
          
           <div className='flex flex-row justify-end bg-richblack-900 h-[70px] pt-10 gap-5 pb-10  items-center ' >

            <button type='submit' className='w-24 h-10 bg-yellow-100 text-richblack-800 font-semibold rounded-md' >Update</button>
            <button type="reset" className='w-24 h-10 bg-red-500 text-white font-semibold rounded-md' onClick={()=>setformdata({
                oldPassword:"",
                newPassword:""
            })}>Cancel</button>
             
           </div>
        

        </form>
        </div>

       

    </div>
  )
}
