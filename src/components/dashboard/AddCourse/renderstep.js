import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CourseinfoForm from './Courseinformation/CourseinfoForm';
import { CourseBulider } from './CourseBulider';
import CoursePublish from './Coursepublish';


export default function Renderstep() {

    const data=[
        { id:1,
          title:"Course Information"

         },

          { id:2,
          title:"Course Bulider"

         },


          { id:3,
          title:"Publish"

         },
     ]

     const {step}=useSelector((state)=>state.course);
   



  return (
    <div>
        <div className='flex flex-row  mt-10  '>
            {
                data.map((renderbtn)=>(
                    <div key={renderbtn.id} className='flex flex-col justify-center'>

                    <div className='flex flex-row  '>


                    <div className={` rounded-full size-10 flex items-center justify-center ${step===renderbtn.id? "border-[0.5px] border-yellow-100 text-yellow-100 ":" bg-richblack-700 border-[0.5px] border-richblack-300 text-richblack-400"}`}> 
                        <p>
                       { step >renderbtn.id ? <FaCheckCircle className='text-yellow-100 text-xl' />
                         :renderbtn.id

                         

                        }
                        </p>



                       



                       

                    </div>

                    {renderbtn.id!==3 &&

                    <pre className={` flex items-center ${step > renderbtn.id ?"text-yellow-100":" text-richblack-600"}`}>- - - - -  - - - - - -</pre>

                    }
                    </div>

                  





                    <p>{renderbtn.title}</p>


                    </div>

                ))
            }
        </div>


        {step===1 &&

      <CourseinfoForm/>

        }

        {step===2 &&

         <CourseBulider/>

        }

        {step ===3 &&
       <CoursePublish/>

        }

        
      
    </div>
  )
}
