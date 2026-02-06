import React, { useEffect,useState } from 'react'
import { MdClose } from "react-icons/md"

export  function ChipsInput({label,name,register,errors,setValue,tags,placeholder}) {
    
    const[tagsinput,settaginput]=useState(tags);


    useEffect(()=>{
        register(name,{required:true})
    },[register])



    useEffect(()=>{
        setValue(name,tagsinput)
    },[tagsinput])

    function remove(index){
        const newchips=tagsinput.filter((_,i)=>i!==index)
        settaginput(newchips);
    }

    function handlekeydown(event){
        if(event.key ==="Enter" || event.key===","){
            event.preventDefault();
           
            const inputvalue=event.target.value.trim();

            if(inputvalue && !tagsinput.includes(inputvalue) ){
                const newinput=[...tagsinput,inputvalue]
                settaginput(newinput);
                event.target.value =""
            }
        }
    }



  return (

    <div className='w-full'>
    <label htmlFor={name}>{label}</label>


   
    <div>
       

        <div className='flex flex-row gap-2'>
            {tagsinput.map((tag,index)=>(
                <div key={index} className=' w-fit flex  items-center gap-1'>

                    <p className='text-orange-400' >{tag}</p>
                     <MdClose className="text-sm text-red-600" onClick={()=>remove(index)} />
                    

                </div>

            ))

            }
        </div>

       
        <div className=''>
         
       <input name={name}
       id={name}
       onKeyDown={handlekeydown}
       placeholder={placeholder}
       className='w-full bg-richblack-700 h-10 rounded-md text-richblack-5 '
       

       />
        </div>

        <div>
            {errors[name] && (
                <span>{label}is required</span>
            )

            }
        </div>
        
    </div>


    </div>





    
  )
}
