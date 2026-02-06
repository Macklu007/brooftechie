import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Upload } from '../Courseinformation/Upload'; 
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { ImCross } from "react-icons/im";


 function Subsectionform (props) {
 
   
   const viewsubsection=props.viewsubsection
   const addsubsection=props.addsubsection
   const editsubsection=props.editsubsection
   const setaddsubsection=props.setaddsubsection
   const seteditsubsection=props.seteditsubsection
   const setviewsubsection=props.setviewsubsection
   const course=useSelector((state)=>(state.course.course));
   const editCourse=useSelector((state)=>(state.course.editCourse))
   const setform=props.setform
   const setmodal=props.setmodal
   const btn1handle=props.btn1handle
   const setshowvideo=props.setshowvideo
   const showvideo=props.showvideo
  
  function submit(data){
    btn1handle(data);
  }
   

  useEffect(()=>{
    if(viewsubsection || editsubsection){
      setValue("title",`${viewsubsection?viewsubsection.title:editsubsection?editsubsection.title:""}`)
      setValue("description",`${viewsubsection?viewsubsection.description:editsubsection?editsubsection.description:""}`)
      setValue("",`${viewsubsection?viewsubsection.description:editsubsection?editsubsection.description:""}`)
      



    }
  },[viewsubsection,editsubsection])
   
   function handlekey(event){
    if(event.key==="Enter"){
      event.preventDefault();
    }
  }
   
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
      } = useForm();
  return (
    <form  onSubmit={handleSubmit(submit)} onKeyDown={handlekey} className='flex flex-col w-[500px] ml-14  ' >
       
         <label htmlFor='title'>Enter title</label>
        <input type="text" 
        disabled={viewsubsection}
        className='text-richblack-50 h-10 text-lg  bg-richblack-800  rounded-lg border-dotted border-2 border-gray-500 pl-2'
        id="title" 
        placeholder='enter title'  
        {...register("title",{required:true})}>
        </input>
         
          <label htmlFor='description'>Enter description</label>
        <textarea
        className='text-richblack-50 h-20 text-lg  bg-richblack-800  rounded-lg border-dotted border-2 border-gray-500 pl-2' 
        id='description'
        disabled={viewsubsection}
        placeholder='description'
        {...register('description', {required:true})}
        >
       </textarea>


       {editsubsection  &&
       <p className='absolute bottom-16 z-10 left-72' onClick={()=>{setshowvideo(!showvideo)}}><ImCross className='text-red-400 hover:text-red-600 hover:text-xl ' /></p>

       } 
       { (viewsubsection || editsubsection)  && showvideo?
         <video className='h-[240px] w-full mt-10 bg-black rounded-lg border-dotted border-2 border-gray-500'  src={viewsubsection?viewsubsection.videoUrl:editsubsection?editsubsection.videoUrl:null} controls /> :
         <Upload register={register} name="video" label="Upload lecture" video={true} setvalue={setValue} errors={errors} edit={editCourse ? course?.thumbnail : null} />


       }

       
      
         <div className=' gap-5 flex flex-row  mt-5'>
                    {!viewsubsection  &&
                      <button  
                    className=' bg-yellow-100 w-28 h-14  rounded-md font-semibold'  >
                       {addsubsection?"Add subsection":editsubsection?"Edit subsection":"no text"}
        
                    </button>

                    }
                    
    
                  </div>
    </form>
  )
}

export default Subsectionform
