import React from 'react'
import { useSelector } from 'react-redux' 
import { set, useForm } from 'react-hook-form'
import { apiConnector } from '../../../services/apiconnector';
import { settingapi } from '../../../services/apis';
import { FaMale,FaFemale } from "react-icons/fa";
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setuser } from '../../../slices/proflieSlice';


export default function Profileinfosettings({setloading}) {
  
    const{user}=useSelector((state)=>state.profile);
    const{token}=useSelector((state)=>state.auth);
    const api=settingapi.updateprofileinfo;
    const dispatch=useDispatch();


     const object1  =localStorage.getItem("user");


      const parseobject=JSON.parse(object1);

     

      const newobject={...user}

      localStorage.setItem("user",JSON.stringify(newobject));


   

    const{
            register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },


      } = useForm()




    useEffect(()=>{
        
            reset({
                firstName:`${user.firstName }`,
                lastName:`${user.lastName}`,
                dateOfBirth:`${user.additionalDetails.dateOfBirth!==null? user.additionalDetails.dateOfBirth :""}`,
                gender:`${user.additionalDetails.gender!==null? user.additionalDetails.gender :""}`,
               
                contactNumber:`${user.contactNumber}`,
                about:`${user.additionalDetails.about!==null? user.additionalDetails.about :""}`,
                
                
            })

            
        

    },[isSubmitSuccessful])


    

     async function submit(data){
        const id=toast.loading("Updating...")
        setloading(true);



        try{
            const response= await apiConnector("PUT",api,{...data},{
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,

        }

       
        );

            if(!response.data.success){
                throw new Error(response.data.message);
            
        }

        dispatch(setuser(response.data.updatedUserDetails));
     

        

        toast.success(response.data.message);


            


        }
        catch(err){
            toast.error(err.message);
            console.log(err);

        }

        setloading(false);
        toast.dismiss(id);

      }
    
    
  return (
    <div className='flex flex-col bg-richblack-800 mt-10  h-[45vh] rounded-lg  '>
       
      
        <h1 className='text-xl text-white font-semibold mt-2 ml-10'>Pofile Infromation</h1>

        <form onSubmit={handleSubmit(submit)} className='flex flex-col  mt-5 gap-5  ' >
            
            <div className='flex flex-row gap-5 ml-10'> 
              
                <div className='flex flex-col'>
                    <label htmlFor='firstName' className='text-richblack-100 font-bold '> Firstname
                </label>
                <input 
                type="text" 
                {...register("firstName") }
                id="firstName" 
                name="firstName" 
               
                className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'
                
                />

                </div>
                
                <div className='flex flex-col ml-10'>
                     <label htmlFor="lastName" className='text-richblack-100 font-bold'> lastname
                </label>
                    <input type="text" {...register("lastName") } id="lastName" name="lastName" 
                     className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'   />
                </div>
                

                
            </div>


            <div className='flex flex-row gap-5'>
                <div className='flex flex-col ml-10'>
                    <label htmlFor='dateOfBirth' className='text-richblack-100 font-bold ' >Date Of Birth</label>
                    <input type="date" {...register("dateOfBirth")} id="dateOfBirth" name='dateOfBirth'
                     className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white' />
                   
                </div>

                <div className='flex flex-col ml-10 '>
                    <label htmlFor='gender' className='text-richblack-100 font-bold'>Gender</label>
                   
                    <select id="gender" name="gender" {...register("gender")}
                     className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white' >
                        <option value="Male"> Male </option>
                        <option value="Female"> Female</option>
                    </select>


                </div>
            </div>


            <div className='flex flex-row gap-5 '>

                <div className='flex flex-col ml-10 ' >
                    <label htmlFor='contactNumber' className='text-richblack-100 font-bold '>contactNumber</label>
                    <input type="tel" 
                    id="contactNumber"
                    name='contactNumber'
                     className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'
                    
                   
                    {...register("contactNumber")
                            
                    } />

                </div>

                <div className='flex flex-col ml-10'>
                    <label htmlFor='about' className='text-richblack-100 font-bold '>About</label>
                    <input type="text"  {...register("about")} id="about" name='about'
                    placeholder='Write Your bio'
                     className='h-10 w-[320px]  bg-richblack-700 rounded-lg font-semibold text-white'
                     />

                </div>


            </div>


            <div className='flex flex-row justify-end bg-richblack-900 h-[98px] pt-5 gap-5  items-center'>
                <button type='submit' className='w-24 h-10 bg-yellow-100 text-richblack-700 font-semibold rounded-md'>Save</button>
                <button type='button'  className='w-24 h-10 bg-slate-600 text-white font-semibold rounded-md' onClick={()=>reset({firstName:`${user.firstName }`,
                lastName:`${user.lastName}`,
                dateOfBirth:`${user.additionalDetails.dateOfBirth!==null? user.additionalDetails.dateOfBirth :""}`,
                gender:`${user.additionalDetails.gender!==null? user.additionalDetails.gender :""}`,
               
                contactNumber:`${user.contactNumber}`,
                about:`${user.additionalDetails.about!==null? user.additionalDetails.about :""}`,})}>Cancel</button>
            </div>


            
        </form>

        

    </div>
  )
}
