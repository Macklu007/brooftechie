import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import Coursemodal from './coursemodal'
import { Deletesection} from "../../../../services/operation/section"
import { Createsubsection,UpdateSubsection,Deletesubsection } from '../../../../services/operation/subsection'
import toast from 'react-hot-toast'

import { setCourse } from '../../../../slices/courseslice'


 

 export function Nestedview({setEditSectionName,setValue,setLoading}){
  const { token } = useSelector((state) => state.auth)
  
  const[viewsubsection,setviewsubsection]=useState(null)
  const[addsubsection,setaddsubsection]=useState(null)
  const[editsubsection,seteditsubsection]=useState(null)

  const[form,setform]=useState(false)


  const [section,setsection]=useState(null);
  const[subsection,setsubsection]=useState(null)
  
  const [openmodal,setmodal]=useState(false)
  const dispatch=useDispatch();

   async function createsubsection (data){
    const id=toast.loading("adding subsection")
     
    setLoading(true)
    
    const formdata=new FormData()

    formdata.append("sectionId",section._id)
    formdata.append("courseId",course._id)
    
    formdata.append("title",data.title);
    formdata.append("description",data.description)
    formdata.append("video",data.video);


   const result =await Createsubsection(token,formdata)
   dispatch(setCourse(result))
   toast.dismiss(id)
   toast.success(`Successfully add ${data.title}`)
   setLoading(false)
    
    
    
    setmodal(false)
    setaddsubsection(null)
    setform(false)

  }


  
   async function updatesubsection(data){
    
    const formdata=new FormData()
   
    const id=toast.loading("editting subsection")
      if(!data.video){
        if(data.title === editsubsection.title && data.description === editsubsection.description){
          toast.error("nothing change")
          seteditsubsection(null)
          
          setmodal(false)
          setform(false)
            toast.dismiss(id);
          return
        }

         

              
               formdata.append("courseId",course._id)
               formdata.append("subSectionId",editsubsection._id)
               formdata.append("title",data.title);
               formdata.append("description",data.description)
    
             
            const result= await UpdateSubsection(token,formdata)
            
            console.log(result)
            if(result){
              dispatch(setCourse(result))
            }
            seteditsubsection(null)
          
          setmodal(false)
          setform(false)
              toast.dismiss(id);


            return

      }
              

      
               formdata.append("courseId",course?._id)
               formdata.append("subSectionId",editsubsection?._id)
               formdata.append("title",data.title);
               formdata.append("description",data.description)
               formdata.append("video",data.video);

               const result=await UpdateSubsection(token,formdata)
            
            console.log(result)
              
            if(result){
              dispatch(setCourse(result))
            }
            seteditsubsection(null)
          
          setmodal(false)
          setform(false)
              toast.dismiss(id);



            toast.dismiss(id);

           







 
  }
  
  function clicksubsection(e,sub){
     e.stopPropagation();
    setsubsection(sub);
    setmodal(true);
  }

  async function deletesubsection() {
     
   


    const formdata=new FormData();
     formdata.append("sectionId",section._id)
     formdata.append("courseId",course._id)
     formdata.append("subSectionId",subsection?._id)
    
    const updatedcourse= await Deletesubsection(token,formdata)

        if(updatedcourse.data.success){
            
          console.log(updatedcourse.data.data)
          dispatch(setCourse(updatedcourse.data.data));
           toast.success(`${subsection.title} Deleted`)
           setsubsection(null);
           setmodal(false)
 
          return
         }

         toast.error("something went wrong tryagain")
    
        
    
  }

  function fnx1(event,data){
     event.preventDefault();
   event.stopPropagation();
  

   seteditsubsection(data)
   
   setmodal(true)
   setform(true)


  }

  function clickhandle(sub){
           setsection(sub)
          setaddsubsection(true)
                  setmodal(true)
                  setform(true)


  }

  
 

 async function deleteSection(){
  
 const sectionId=section._id;
 const courseId=course._id;
  const result =await Deletesection(token,{sectionId,courseId})
    
  if(result){

    dispatch(setCourse(result))
  }
   setsection(null)
   setmodal(false)


     
    


  }

  function editsection(section){
    setsection(section);
    setEditSectionName({sectionName:section.sectionName,
      sectionId:section._id
    })
      setValue("sectionName", `${section.sectionName}`)
    

    console.log(section.sectionName,section._id)
    

     setsection(null)


  }
    
    const course = useSelector((state)=>(state.course.course))
    console.log(course,"NESTEDVIEW");
  return (
    <div className='relative'>

      <div className={`absolute -top-96 -right-8    w-[600px]  h-fit`} >
          
          { openmodal &&
          <Coursemodal text={ viewsubsection?"Viewing":addsubsection?"Adding":editsubsection?"Editting":`are you sure to delete ${subsection?subsection.title:section?.sectionName}`} 
          setmodal={setmodal} 
          btn1text={"delete"}
           btn2text={"cancel"} 
           btn1handle={editsubsection?updatesubsection:addsubsection?createsubsection:subsection?deletesubsection:deleteSection} 
           form={form} 
           setform={setform}
           viewsubsection={viewsubsection}
            setviewsubsection={setviewsubsection} 
            addsubsection={addsubsection}
             setaddsubsection={setaddsubsection} 
             editsubsection={editsubsection} 
             seteditsubsection={seteditsubsection}
             setsubsection={setsubsection}
             />
      
        }

       </div>
      

        <div>

          {course?.courseContent?.length > 0&& 
          <div >
           {course.courseContent.map((sub,index)=>(
            <details  open   key={index}  >

           
                <summary className="  text-white mt-5 bg-slate-800 ">
                            
                          <div className='flex justify-between gap-20 '>
                                        <p>{sub.sectionName}</p>

                              <div className='flex gap-2 mr-10'>
                                <button onClick={()=>{editsection(sub)}} > <FaEdit className='size-5' /></button>
                                <p>|</p>
                                <button onClick={()=>{setmodal(true) ;setsection(sub);}}><MdDelete className='size-5 text-red-500'/></button>
                              </div>


                          </div>
                            
                      
                      <hr/>
                    
                </summary>

                <div className='flex flex-col mt-2 w-full'>
                     {sub?.subSection?.length > 0 &&
                      
                      sub.subSection.map((subsection)=>(
                        
                        <div className='flex flex-col   bg-richblack-600 border-b-2  border-richblack-25 border-dotted'  onClick={()=>{setviewsubsection(subsection); setmodal(true);setform(true)}}>
                          <div className='flex flex-row  justify-between '>
                            
                              <p className='font-extrabold text-md ml-2 ' >{subsection.title}</p>

                               <div className='flex flex-row  gap-2 mr-10'> 
                              <button onClick={(e)=>{fnx1(e,subsection)}} ><FaEdit className='size-5' /></button>
                              <p>|</p>
                              <button onClick={(e)=>{clicksubsection(e,subsection)}}><MdDelete className='size-5 text-red-500'/></button>
                            </div>
                            
                           

                          </div>
                         
                        </div>
                      ))

                      
                     }
                </div>
                <button className='text-yellow-50 font-inter text-md' onClick={()=>{clickhandle(sub)}}>Add</button>
                
            </details>))

          

           }

          </div>


         }

        </div>


    </div>
  )
}

