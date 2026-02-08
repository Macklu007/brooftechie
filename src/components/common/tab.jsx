import React from 'react'
import { settab } from '../../slices/tabslice';
import { useDispatch, useSelector } from 'react-redux';

function Tab({currenttab,setaccounttype }) {
 
    const tabs=[
        {id:1,
          title:"Student"  
        },
         {id:2,
          title:"Instructor"  
        },

    ];

    const dispatch=useDispatch();

    function clickhandle(tab){
        setaccounttype(tab.title)
        dispatch(settab(tab.title));

        
      
        
        
    }

    

  return (
    <div className=' w-[160px] md:w-[40%] rounded-full bg-richblack-700 text-richblack-100 h-[40px] flex flex-row gap-2 border-b-2 border-richblack-400 mt-2 mb-2 font-mono text-xs md:text-lg ' >
        {
            tabs.map((tab)=>{
                
              return  <div  key={tab.id} className={`${currenttab==tab.title && "bg-yellow-100 text-black"} w-[50%]  flex  justify-center items-center rounded-full cursor-pointer`} onClick={()=>clickhandle(tab)}>

                <button type="button"
              >{tab.title}</button>
               
               </div>
             
              
            })
        }

    </div>
  )
}

export default Tab