import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";
export default function Coursecard({course,setitem,currentitem}) 
{

  return (
    
    
    <div className={` flex flex-col  cursor-pointer w-[350px] ml-16 mt-10 rounded-md h-[300px] gap-3  ${currentitem===course.heading?"bg-white shadow-[12px_12px_0_0] shadow-yellow-25":"bg-richblack-800"}  `} onClick={()=>setitem(course.heading)} >
       
       
       <div className={`font-semibold text-xl mt-7 ml-5 ${currentitem===course.heading?" text-black ":"text-white"}`}>
            {course.heading}
        </div>
        <div className={`font-thin mt-5 ml-6 ${currentitem===course.heading?" text-richblack-900 ":"text-richblack-300"}`}>
            {course.description}
        </div>

        <div className={`flex flex-row  gap-40 mx-auto    border-dotted border-t-2 border-richblack-400 mt-16 pt-8 ${ currentitem===course.heading?"text-blue-100":"text-richblack-400"}`}>
           
           
            <div className='flex flex-row items-center  '>
                <FaUserGroup  ></FaUserGroup> 
                {course.level}
               
            </div>
            <div className='flex flex-row items-center' >
                <MdPlayLesson></MdPlayLesson>

                {course.lessionNumber } Lession
            </div>
            
            
        </div>
       
       

    </div>
  )
}
