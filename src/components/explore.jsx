import React, { useEffect, useState } from 'react'

import { HomePageExplore } from '../data/homepage-explore';
import Highlighted from './homepage/core/highlighted';
import Coursecard from './homepage/core/coursecard';
import toast from 'react-hot-toast';


const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];
function Explore() {
  
  const[currenttab, settab]=useState(tabsName[0]);
  const[courses,setcourse]= useState(HomePageExplore[0].courses);
  const[currentitem,setitem]=useState(HomePageExplore[0].courses[0].heading);


  const setcard=(value)=>{
    settab(value);

    const result= HomePageExplore.filter((course)=>{
        return course.tag===value;
    })
    
    setcourse(result[0].courses);
   

    setitem(result[0].courses[0].heading);

  }


   
  
  
    return (
    <div>

        <div className='w-11/12 mx-auto flex flex-col  mt-32 items-center'>
           
            <div className='text-xl sm:text-3xl font-bold text-white'>
                 Unlock the <Highlighted text= "Power of Code"/>   
            </div>
            <div className='text-richblack-400 font-semibold'>
                Learn to Build Anything You Can Imagine
            </div>
           
        </div>


        <div className="flex flex-row  sm:gap-4 w-[90%] sm:w-fit justify-center mt-8 mb-8 mx-auto bg-zinc-800 rounded-lg h-10 items-center  "  >
            {
                tabsName.map((ele,index)=>{
                    return (
                        <div key={index} className={`font-bold mx-1 text-[10px] sm:text-lg sm:mx-5 cursor-pointer  ${currenttab===ele?"text-yellow-100":"text-richblack-200 "}`} onClick={()=>setcard(ele)}> 
                           {ele}
                        </div>

                    )



                    

                    

                })
            }


          
        </div>




         <div className=' flex flex-row relative  h-[150px]  sm:w-11/12'>

            <div className='flex  flex-row  gap-2 md:gap-0 absolute top-0 md:top-5 md:left-16  h-[350px]    ' >
            {   

                courses.map((course,index)=>(
                    <Coursecard
                    
                    key={index}
                    course={course}
                    setitem={setitem}
                    currentitem={currentitem}
                    ></Coursecard>

                ))
            }
            </div>
           
        </div>




    </div>
  )
}

export default Explore