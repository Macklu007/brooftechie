import React, { useEffect, useState } from 'react' 
import { useForm } from 'react-hook-form'
import countrycode from"../../data/countrycode.json"
import CTAbutton from '../homepage/core/button'; // This import seems unused
import { apiConnector } from '../../services/apiconnector';
import { contactusapi } from '../../services/apis';
import toast from 'react-hot-toast';
import Spinner from './spinner';

function Contactform() {
    
    const[loading,setloading]=useState(false);

    const{
        register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  async function submit(data){
       
    setloading(true);
   const id= toast.loading("Loading..."); // More user-friendly loading message
    
   try{
        const response=await apiConnector("POST",contactusapi.contactus,{...data}); // Changed method to "POST" (standard for form submissions)
       
       
        if(!response.data.success){

            throw new Error(response.data.message)

        }
        toast.success(response.data.message);

    }

    catch(err){
        
        const message= err?.message || "Failed to send email. Please try again." // More specific error message
        toast.error(message) // Display the error message from the caught error
    }
    
        
     setloading(false);
     toast.dismiss(id);

  }


  useEffect(()=>{
    if(isSubmitSuccessful){
        reset({
            email:"",
            firstname:"",
            lastname:"",
            phoneno:"",
            countrycode:"+91", // Ensure this default matches an option in your countrycode.json
            message:"",

        })
    }
  },[reset,isSubmitSuccessful])

  return (
    // Removed unnecessary width and margin from this wrapper. Parent component (Contactus) now handles overall width.

        <div className='flex justify-center items-center font-mono mb-10 w-full '> {/* Adjusted for full width within its parent */}
    {loading ?  <Spinner/>: 
    <form onSubmit={handleSubmit(submit)} className='w-[400px] md:w-[70%] flex flex-col gap-6 p-4 md:p-0'> {/* Adjusted form width and added padding */}

       <div className='flex flex-col md:flex-row w-full justify-between gap-4'> {/* Changed to flex-col for small screens, flex-row for medium+ */}

       
       
        <div className='flex flex-col w-full md:w-[48%]'> {/* Adjusted width to be more responsive */}
            <label htmlFor='firstname' className='text-richblack-400 mb-1'>First Name</label>
            <input
            name="firstname"
            type='text'
            id="firstname"
            placeholder='Enter first name'
            {...register("firstname",{required:true})}
           className='bg-richblack-800 h-10 rounded-md border-b-[1px] border-richblack-400  pl-2 text-white focus:outline-none focus:border-blue-500' // Added focus styles
             />
             {
                errors.firstname &&
                <span className='text-red-800 text-sm mt-1' >
                    Please enter your first name. {/* More specific error message */}

                </span>
             }
        </div>



         <div className=' flex flex-col   w-full md:w-[48%]'> {/* Adjusted width to be more responsive */}
          
            <label htmlFor='lastname' className='text-richblack-400 mb-1'>Last Name</label>
            <input
            name="lastname"
            type='text'
            id="lastname"
            placeholder='Enter last name'
            {...register("lastname",{required:true})}

             className='bg-richblack-800 h-10 rounded-md border-b-[1px] border-richblack-400  pl-2 text-white focus:outline-none focus:border-blue-500'
             />
             {
                errors.lastname &&
                <span className='text-red-800 text-sm mt-1' >
                    Please enter your last name.

                </span>
             }
        </div>
     
     
     </div>

        <div className=' flex flex-col w-full'> {/* Full width */}
            <label htmlFor='email' className='text-richblack-400 mb-1'>
                Email Address
            </label>
            <input
            type='email'
            name="email"
            id="email"
            placeholder='Enter your email address'

            {...register("email",{required:true})}
             className='bg-richblack-800 h-10 rounded-md border-b-[1px] border-richblack-400  pl-2 text-white focus:outline-none focus:border-blue-500'


            />

            {errors.email &&
            <span className='text-red-800 text-sm mt-1' >
                Please enter your email address.
            </span>
            }
        </div>



        <div className='flex flex-col gap-2 w-full'> {/* Full width */}

              <label htmlFor='phoneno' className='text-richblack-400 mb-1'> {/* Added htmlFor for accessibility */}
                Phone Number
            </label  >

              <div className='flex flex-row w-full gap-2' > {/* Added gap between select and input */}


            <select
            className='w-[30%] md:w-[25%] bg-richblack-800 h-10 rounded-md border-b-[1px] border-richblack-400  pl-2  text-white focus:outline-none focus:border-blue-500' // Adjusted width slightly and added focus styles

             name="countrycode"
              {...register("countrycode",{required:true})}
            > 
            
            { countrycode.map((card,index)=>{
                
              return  <option 
                   className='bg-richblack-800 text-richblack-50' // Ensure option styling
                   key={index}
                   value={card.code}>
                    {card.country} ({card.code}) {/* Clearer display of country and code */}
                    

                </option>
            })
               
            }
             
           
            </select>
            
            <div className='w-[70%] md:w-[75%]'> {/* Adjusted width */}
           
            <input 
            name='phoneno'
            id="phoneno"
            placeholder='1234567890'
            className='w-full bg-richblack-800 h-10 rounded-md border-b-[1px] border-richblack-400  pl-2 text-white focus:outline-none focus:border-blue-500'
           
            type="tel"
           

                    {
                        ...register("phoneno",{
                         
                            required:{
                                value:true,
                                message:"Please enter your phone number."
                            },
                            maxLength:{value:12,
                                message:"Phone number too long (max 12 digits)."
                            }
                            ,
                            minLength:{value:10,
                                message:"Phone number too short (min 10 digits)."
                            }


                        } )
                    }
                     
            />
            
            </div>
         </div>
            {/* Moved error span outside the inner div to display correctly below the input */}
            {
                errors.phoneno && 
                <span className='text-red-800 text-sm mt-1' >{errors.phoneno.message}</span>
            }

         
         </div>

        <div className=' flex flex-col w-full'> {/* Full width */}
            <label htmlFor='message' className='text-richblack-400 mb-1'>Message</label>
            <textarea
            cols={50} // Consider removing fixed cols/rows and using CSS for height/width
            rows={7} // Reduced rows slightly for better initial appearance
            name="message"
            id="message"
            className='bg-richblack-800  rounded-md border-b-[1px] border-richblack-400  pl-2 text-white pt-2 focus:outline-none focus:border-blue-500'

            {...register("message",{required:true})}

            placeholder='Enter your message here...'
            >

            </textarea>

            {
                errors.message &&
                <span className='text-red-800 text-sm mt-1' >Please enter your message.</span>
            }
        </div>





       <button type='submit' className='bg-yellow-100 w-full rounded-lg h-10 font-bold text-richblack-900 hover:scale-95 transition-all duration-200 mb-20' > {/* Added hover effect */}
        {loading ? 'Sending...' : 'Send Message'} {/* Dynamic button text based on loading state */}
       </button>


    </form>



    }
       

    
    

    
    </div>
   







  
   

   
  )
}

export default Contactform