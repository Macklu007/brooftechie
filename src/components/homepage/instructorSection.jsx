import React from 'react'
import CTAbutton from './core/button';
import Highlighted from './core/highlighted';
import { FaArrowRight } from "react-icons/fa6";

function InstructorSection() {
  return (
    <div className='flex flex-row w-11/12 justify-between  mb-28' >
        
        
        <div className='instructorimage w-[45%] h-[550px]  mt-32 border-l-[15px] border-t-[15px] border-solid border-white  ml-32  shadow-2xl shadow-cyan-600'>
        

      
        </div>

        <div className='flex flex-col items-start justify-center h-[550px] w-[40%] ml-10'>
            
            
            <div className='text-2xl  text-white font-bold flex flex-col mt-48  mb-1'  >
                Become an 
                <Highlighted text="instructor"/>
            </div>
            <p className='text-sm font-semibold text-richblack-400'> Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
             
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