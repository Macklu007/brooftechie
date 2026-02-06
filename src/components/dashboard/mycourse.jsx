import React from 'react'
import { useState,useEffect } from 'react'
import { Getallcourse } from '../../services/operation/course'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { setCourse,setEditCourse } from '../../slices/courseslice'
import { useDispatch } from 'react-redux'
import Modal from '../common/modal'
import { deleteCourse } from '../../services/operation/course'
import toast from 'react-hot-toast'


export default function Mycourse() {
    const {token}=useSelector((state)=>state.auth)
    const [allcourse,setallcourse]=useState([]);
    const navi=useNavigate();
    const dispatch=useDispatch();
    const[openmodal,setmodal]=useState(false);
    const[selectedcourse,setselectedcouse]=useState(null);

  function totaltime(course) {
  if (!course?.courseContent?.length) return "0HH:0MM:00S";

  let total = 0;

  course.courseContent.forEach(section => {
    section?.subSection?.forEach(sub => {
      total += Number(sub?.timeDuration || 0);
      
    });

  });
  const hour=Math.floor((total)/(60*60));
      total=total-(hour*60*60);
      const min=Math.floor(total/60);
      total=total-(min*60);
      const sec= Math.floor(total%60);

  return  `${hour}HH:${min}MM:${sec}SS`;
}
    
    
    async function getallcourse(){
     const result  = await Getallcourse(token);
     console.log(result,"result");

     const {data}=result?.data
      setallcourse(data)
   
      
      
     
     

     
     
    

       
    }
  function handleEdit(course){
     dispatch(setCourse(course))
     dispatch(setEditCourse(true))
     navi("/dashboard/add-course")
  }
  function handledelete(course){
    setselectedcouse(course);
    setmodal(true);
  }

  async function handler() {
    const result=await deleteCourse(token,{"courseId":selectedcourse._id})
    toast.success(result.data.message)
    setselectedcouse(null);
    setmodal(false)
    getallcourse();
    
  }



   
    useEffect(()=>{
       getallcourse()
    },[])

    
    
   
  return (
   
    <div className='text-white flex flex-col gap-5 relative '>
    
    
    {openmodal &&

    
    <div className='text-black absolute  w-full h-screen '>
      {openmodal &&
       <Modal setmodal={setmodal} text={`are you sure to delete course ${selectedcourse.courseName}`}handler={handler}/>

      }
    </div>
    }
      
       <div className=' w-full flex flex-row justify-between'>
        <p className='font-extrabold text-2xl'> My Course</p>
        <button className='bg-yellow-100 text-richblack-900 w-44 h-7 font-extrabold rounded-lg' onClick={()=>{navi("/dashboard/add-course")}}>Add Course</button>
       </div>

       <div className='text-white flex flex-col gap-5 flex-wrap  w-full'>

            <div className='w-full flex flex-row justify-between  mt-10 '>
                 <p className='font-bold'>Course</p>
                <div className=' w-[50%]  flex flex-row justify-evenly gap-4 '>

                   <p className='font-bold w-[10%] items-center'>Duration</p>
                 <p className='font-bold w-[10%]  items-center'>Price</p>
                 <p className='font-bold w-[10%] items-center'>Actions</p>
                </div>
               


            </div>

        {allcourse?.map((course)=>(
          <div className='w-full  h-[20vh] flex flex-row bg-richblack-900' key={course.courseId}>
            <img className='w-[20vw] h-[15vh]  rounded-lg' src={course.thumbnail}></img>
            <div className='ml-4 w-[20%] '>
            <p className='font-normal text-xl '>{course.courseName}</p>
            <p className='font-extralight text-richblack-100 '>{course.courseDescription}</p>
            <p className={`${course.status === "Published" ?"text-green-600":"text-red-600"} font-extrabold`}>{course.status}</p>
            <p className='text-richblack-300 font-extralight'>{new Date(course.createdAt).toLocaleString("en-IN")}</p>
         


            </div>

            <div className=' w-[50%] flex flex-row  justify-evenly h-[20%] gap-4 '>
                
                <p className='font-extrabold w-[10%] text-richblack-100 items-center'>{totaltime(course)}</p>
                <p className='font-bold w-[10%] text-richblack-200 items-center'>₹{course.price}</p>
               
               <div className='flex flex-row gap-2 w-[10%] items-center'>

                <button onClick={()=>{handleEdit(course)}} ><MdOutlineModeEditOutline className='text-richblack-200 font-extrabold size-5' /></button>
                <button onClick={()=>{handledelete(course)}}><MdDeleteOutline  className='text-richblack-200 font-extrabold size-5'/></button>
                </div>

            </div>
           
        </div>))

        }
        </div>
    </div>
  )
}
