import React from 'react'
import Highlighted from '../homepage/core/highlighted';
import CTAbutton from '../homepage/core/button';






function Learning() {
   
const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highliteText: "Anyone, Anywhere",
    description:
      "Brooftechie partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Brooftechie partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Brooftechie partners with more than 275+ leading universities and companies to bring",
  },
];


 return (
      <div className=' flex flex-col h-screen md:grid grid-cols-4 w-[80%]  md:w-[70%] gap-5 md:gap-0  mx-auto md:h-[500px] mt-20   '>
    {
        LearningGridArray.map((card,index)=>{
            
          return(

            <div 
            className={`${index===0 && "col-span-2  bg-transparent"}  ${card.order % 2===1 ?"bg-richblack-800":"bg-richblack-600  "} ${card.order===3 && "col-start-2"} ${index!==0 &&"w-[350px] md:w-[260px] h-[100px] md:h-[250px] flex flex-col justify-center items-center "}  `}
            
            >
                {
                    card.order< 0? <div className='flex flex-col mx-auto '>
                        <h1 className='  text-xl md:text-2xl  text-white font-b w-[100%] md:w-[80%]'>{card.heading}<Highlighted text={card.highliteText}/></h1>
                        
                        <p className='text-justify  text-richblack-50 w-[100%] md:w-[80%] '>{card.description}</p>
                        <CTAbutton active={true} linkto={"/signup"}>{card.BtnText}</CTAbutton>

                      

                        </div>
                    
                    :<div className='flex flex-col justify-center items-center'
                    >
                          <h1 className='text-white text-[12px] md:text-base font-semibold w-[70%] ' >{card.heading}</h1>
                          <p className='text-justify text-richblack-50 text-[10px] md:text-base w-[70%]'>{card.description}</p>

                    </div>
                }

               



           
           
           </div>


            
          

          )
           

            
        }

        )
    }
 </div>)

  
}

export default Learning