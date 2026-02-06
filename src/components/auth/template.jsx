import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import frame from"../../image/frame.png";
import Signupform from './Signupform';
import Highlighted from '../homepage/core/highlighted';
import Loginform from './Loginform';
import Spinner from '../common/spinner';

import insimage from"../../image/0c7e6bbd70dd6361bc207cfc56d12fb610b495c5.jpg";







function Template({title, description1, description2, image, formType }) {


     const {loading}=useSelector((state)=>state.auth);
     const{currenttab}=useSelector((state)=>state.tab);

     if(currenttab==="Instructor" ){
      image=insimage;
     }


    



  return (
    <div className='text-white relative w-full h-fit mt-20 pl-20 '>

      <div>
        
        
        {loading ? <Spinner/> :  <div className='w-11/12  mx-auto  flex flex-row  justify-evenly items-center mt-10    mb-5'>
          
          
          
          
           <div className='w-[50%]  '> 
              
              
               <div className='mb-10'>
               <h1 className='text-4xl font-bold w-auto'>{title}</h1>
               <p className='text-lg font-semibold w-auto'>{description1}</p>
               <p className='text-lg font-edu-sa w-auto text-cyan-400'> {description2}</p>
            </div>


            { formType==="Login"?(<Loginform/>):(<Signupform></Signupform>)

            }
           </div>
           
           
        
        
        
        
        <div className={`w-[35%] flex justify-center  relative shadow-[12px 12px 0px 2px] shadow-2xl rounded-2xl -skew-y-3 
         
         ${formType==="Login"?"shadow-orange-600":"shadow-cyan-100"}
          '  `}>
          
          
           <img src={frame} alt="frame" 
              loading="lazy" 
              className=' relative top-2 left-5  rounded-2xl'/>


                <img
              src={image}
              alt="Students"
              
              loading="lazy"
              className="absolute  top-0  h-[412px] rounded-2xl "
            />
        </div>

        
        
        
              </div>
        
        
        
        
        
        }








      

        

        </div>
       
    </div>
  )
}

export default Template