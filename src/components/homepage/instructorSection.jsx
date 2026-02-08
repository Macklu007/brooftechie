import React from 'react'
import CTAbutton from './core/button';
import Highlighted from './core/highlighted';
import { FaArrowRight } from "react-icons/fa6";

function InstructorSection() {
  return (
    <div className='flex  w-[90%] flex-row md:w-11/12 justify-between  md:mb-28' >
        
        
        <div className='instructorimage md:w-[45%] md:h-[550px]  w-[50%] h-[450px] md:mt-32 md:border-l-[15px]  md:border-t-[15px] md:border-solid border-white ml-5 md:ml-32 rounded-sm  shadow-2xl shadow-cyan-600'>
        

      
        </div>

        <div className='flex flex-col items-start justify-center h-[550px] w-[40%] ml-10'>
            
            
            <div className='text-2xl  text-white font-bold flex flex-col md:mt-48  mb-1'  >
                Become an 
                <Highlighted text="instructor"/>
            </div>
            <p className='text-sm font-semibold text-richblack-400'> Instructors from around the world teach millions of students on Brooftechie. We provide the tools and skills to teach what you love.</p>
             
            <div className='mt-12'>
                 
             <CTAbutton  active={true} linkto={"/signup"}>
             
             <div className='flex flex-row items-center gap-3  '>
               
                Start Teaching Today
                 <FaArrowRight></FaArrowRight>
                </div>
                </CTAbutton>
            </div>

        </div>
    </div>
  )
}

export default InstructorSection;