import React from 'react'
import CTAbutton from './button';
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
function Codeblock({postion,heading,subheading,btn1,btn2,codeblock,backgroundGradient,codecolor ,colour}) {
 
  return (
    <div className={`sm:flex ${postion} flex flex-col  mx-auto pt-28 w-[100%]  overflow-x-hidden gap-2 mt-3 justify-evenly mb-7`}>
     
     
     <div className=' w-[70%] sm:w-[35%] mx-auto sm:mx-7 flex  flex-col max-w-maxContent gap-4   '>
        
  
        <div className='w-[100%] md:w-[84%]  font-bold text-white'>{heading}</div>
          <div className='font-bold w-[100%] sm:w-[70%] text-richblack-300'>
            {subheading}
          </div>
          <div className='flex flex-row  gap-4 mt-4 '>
            <CTAbutton active={btn1.active} linkto={btn1.linkto}  >
                <div className='flex flex-row'>
                    {btn1.text}
                     <FaArrowRight className='mt-0.5 mx-1' />

                </div>
            </CTAbutton>
            <CTAbutton active={btn2.active} linkto={btn2.linkto}  >
              <div className='flex flex-row'>
                 {btn2.text}
                     <FaArrowRight className='mt-0.5 mx-1' />
              </div>
            </CTAbutton>
          </div>



     </div>

     <div className='flex flex-row relative  overflow-y-visible w-[70%]  sm:w-[35%] bg-opacity-10 shadow-xl   bg-richblack-400 mx-auto sm:mx-0 '>
        {/* section-2 */}

       <div className={`   rounded-t-full rounded-b-full ${backgroundGradient} w-[70%] h-[90%]   blur-2xl  opacity-50 absolute -translate-x-10`}>

              </div>


       

        

        <div className='w-[5%]  z-10 text-richblack-400'>
           <p>1</p>
             <p>2</p>
               <p>3</p>
                 <p>4</p>
                   <p>5</p>
                     <p>6</p>
                       <p>7</p>
                         <p>8</p>
                           <p>9</p>
                             <p>10</p>
                               <p>11</p>


        </div>
         
         <div className='w-[90%]  z-10 relative' >

         

         
          <TypeAnimation 
           repeat={Infinity}
            sequence={

              [ "",codeblock,
              1000,
              
              

              

              ]
            }
            omitDeletionAnimation={true}
           
            
           cursor={true}
       
            
            className={`${colour}  text-[15px] font-mono text-sm`}

            
           style={{ whiteSpace: 'pre-line',}}
              
          
          
          />


        

           
         </div>




     </div>


    </div>
  )
}

export default Codeblock;