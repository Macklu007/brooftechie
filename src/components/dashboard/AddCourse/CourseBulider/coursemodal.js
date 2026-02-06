import React from 'react'
import { useState } from 'react';
import  Subsectionform from './subsectionform'


 function Coursemodal(props) {

   const[showvideo,setshowvideo]=useState(true);
  
  const setmodal=props.setmodal
  const btn1handle=props.btn1handle

   const viewsubsection=props.viewsubsection
   const addsubsection=props.addsubsection
   const editsubsection=props.editsubsection
   const setaddsubsection=props.setaddsubsection
   const seteditsubsection=props.seteditsubsection
   const setviewsubsection=props.setviewsubsection
    const setform=props.setform
    const form=props.form
    const setsubsection=props.setsubsection
  return (
    <div >
        

         <div className='relative backdrop-blur-sm ' 
                >
                      
                      
                       <div 
                       className='w-full h-[800px] bg-white opacity-10  flex justify-center items-center  '>
                 
               
               
               
               
               
                       </div>
        
        
        
                         <div 
                         className='w-[100px] z-10 h-[200px]  bg-transparent absolute top-[28%] left-[37%]  flex flex-col gap-10 rounded-2xl justify-center items-center shadow-2xl shadow-richblue-50 '>
                            <p className=' pt-32 text-richblack-50 font-mono text-3xl '>{props.text}</p>
                            
                    {props.form &&
                    <div>
                      <Subsectionform viewsubsection={viewsubsection}
            setviewsubsection={setviewsubsection} 
            addsubsection={addsubsection}
             setaddsubsection={setaddsubsection} 
             editsubsection={editsubsection} 
             seteditsubsection={seteditsubsection}
             setform={props.setform}
             setmodal={setmodal}
             btn1handle={btn1handle}
             showvideo={showvideo}
             setshowvideo={setshowvideo}

             /> 
                    </div>

                    }
                   
                   
                  <div className=' gap-5 flex flex-row '>
                    {!form &&
                      <button  onClick={btn1handle} 
                    className=' bg-red-500 w-20 h-10 rounded-md font-semibold '  >
                       {props.btn1text}
        
                    </button>

                    }
                    
        
                    <button  onClick={()=>{setmodal(false);setaddsubsection(null);seteditsubsection(null);setviewsubsection(null);setform(false);setsubsection(null)}}
                        className=' bg-white w-20 h-10 rounded-md font-semibold text-slate-700 ' >
                         
                         {props.btn2text}
                    </button>
                  </div>
                </div>
        
        
            </div>
           
        
        
          
        
    </div>
  )
}


export default Coursemodal