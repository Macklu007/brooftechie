import React from 'react'
import logo2 from "../../image/Logo2.svg";
import logo3 from "../../image/Logo3.svg";
import logo4 from "../../image/Logo4.svg"
import logo1 from "../../image/Logo1.svg"

function Subhero() {
  const subherodata=[
    {headind:"Leadership",
        title:"Fully committed to the success company",
        src:logo1,
       
    },
     {  headind:"Responsibility",
        title:"Students will always be our top priority",
        src:logo2,
       
    },
     {headind:"Flexibility",
        title:"The ability to switch is an important skills",
        src:logo3,
       
    },

     {headind:"Solve the problem",
        title:"Code your way to a solution",
        src:logo4,
       
    },






  ]

  
    return (

    <div className='w-11/12 flex flex-col md:flex-row mt-10 justify-between mb-44 mx-auto'>
        
        
        <div>

      {
        subherodata.map((data ,index)=>(
        <div className='flex flex-row mt-6' key={index}>
           
           <div className='flex flex-col gap-5'>
              
              <div className=' size-14 mr-4 rounded-full   bg-white flex flex-col justify-center items-center' >
                <img  src={data.src}></img>
               
               
             

                </div>

                {
                    (index+1)!==subherodata.length&& 

                    (
                        <p className='rotate-90 mt-5 '>............</p>
                    )
                }
           </div>
           
          

                <div> 
                    <h6 className='text-lg gap-y-2 mb-0.5 font-bold'>{data.headind}</h6>
                    <p>{data.title}  </p>
                    </div>

        </div>))
      }

        </div>


        <div className=' w-[100%] md:w-7/12 relative '>
                    
                    <div className='skillsection w-[360px] h-[400px]  md:w-[100%] md:h-[95%]  shadow-orange-400 shadow-xl '>

                    </div>
           
            <div className='absolute w-[90%] md:w-3/4 h-24 bg-caribbeangreen-700 flex flex-row bottom-1 left-3  md:bottom-0 mt-2 md:ml-20'>

            <div className= ' flex flex-row  justify-center gap-3 h-16 items-center w-[50%] border-r-2 border-neutral-600 mt-3'>

            <p className='text-2xl text-white font-bold'>10</p>
            <p className='text-richblack-200 text-xs font-light'>YEARS
                <br></br>EXPERIENCES</p>

                

            </div>


            <div className= 'flex flex-row  justify-center gap-3 h-16 items-center w-[50%]  mt-3' >
                  <p className='text-2xl font-bold text-white'>200</p>
            <p className='text-richblack-200 text-xs font-light'>TYPES <br></br>OFCOURSES</p>



            </div>


            </div>
        </div>
      
    </div>
  )
}

export default Subhero