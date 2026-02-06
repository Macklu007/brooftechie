import React from 'react'
import { useSelector } from 'react-redux'

export default function Navigationcompo(props) {
    const {step}=useSelector((state)=>(state.course))
    
  return (
    <div className='flex flex-row gap-5'>
        {step!==1 &&
           <button className='w-20 h-8 text-richblack-700 bg-richblack-300 ' onClick={props.fnx1}>Back</button>
        }

        {step!==3 &&
        <button className='w-20 h-8 bg-yellow-50  text-richblack-700' onClick={props.fnx2}>Next</button>

        }
    </div>
   
  )
}
