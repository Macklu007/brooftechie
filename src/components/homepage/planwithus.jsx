import React from 'react'
import knowyour from"../../image/Know_your_progress.png";
import comparewith from"../../image/Compare_with_others.png"
import planwith from"../../image/Plan_your_lessons.png"


function Planwithus() {
  return (
    <div className='  h-[280px]   w-11/12  mt-12  ml-1 relative  '>
        
        
        
        <img className='w-[20%]  left-[30%]  h-[280px]  absolute'  src={knowyour} ></img>
         
         <img className='w-[25%] left-[45%]  h-[280px] absolute '  src={comparewith} ></img>
         
          <img className='w-[25%] left-[62%]  h-[280px]  absolute '   src={planwith} ></img>
    </div>
  )
}

export default Planwithus; 