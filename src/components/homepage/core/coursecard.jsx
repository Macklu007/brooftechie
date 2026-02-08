import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";
export default function Coursecard({course,setitem,currentitem}) 
{

  return (
    
    
    <div className={` flex flex-col  ml-0 cursor-pointer h-[300px] w-[130px] sm:w-[350px] md:ml-16   mt-10 rounded-md md:h-[300px] gap-3  ${currentitem===course.heading?"bg-white shadow-[12px_12px_0_0] shadow-yellow-25":"bg-richblack-800"}  `} onClick={()=>setitem(course.heading)} >
       
       
       <div className={`font-semibold text-sm md:text-xl mt-7 ml-5 ${currentitem===course.heading?" text-black ":"text-white"}`}>
            {course.heading}
        </div>
        <div className={`font-thin text-xs sm:text-base h-[150px] mt-2 md:mt-5  ml-2 md:ml-6 ${currentitem===course.heading?" text-richblack-900 ":"text-richblack-300"}`}>
            {course.description}
        </div>

        <div className={`flex flex-row  md:gap-40 mx-auto    border-dotted border-t-2 border-richblack-400 md:mt-16 md:pt-8 ${ currentitem===course.heading?"text-blue-100":"text-richblack-400"}`}>
           
           
            <div className='flex flex-row items-center text-xs md:text-lg  '>
                <FaUserGroup  ></FaUserGroup> 
                {course.level}
               
            </div>
            <div className='flex flex-row items-center text-xs md:text-lg' >
                <MdPlayLesson></MdPlayLesson>

                {course.lessionNumber } Lession
            </div>
            
            
        </div>
       
       

    </div>
  )
}
