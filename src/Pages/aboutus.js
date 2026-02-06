import React from 'react'
import Highlighted from '../components/homepage/core/highlighted'
import photo1 from"../image/aboutus1.webp"
import photo2 from"../image/aboutus2.webp"
import photo3 from"../image/aboutus3.webp"
import Navbar from '../components/common/navbar'
import aboutphoto from"../image/FoundingStory.png";
import Learning from '../components/about/learning'
import Contactform from '../components/common/contactform'
import { useState ,useEffect} from 'react'
import Modal from '../components/common/modal'

function Aboutus() {
  
  const[openmodal,setmodal]=useState(false);



  


 
  return (
     
     <div className={` relative`}>
       
       <Navbar setmodal={setmodal}></Navbar>

      
       
       
       <div className={`absolute top-0 w-full  `} >
          
          { openmodal &&
        <Modal setmodal={setmodal}/>
        }

       </div>
     
       
      
       <div>
             
       
        <div className='flex flex-col gap-5 relative bg-richblack-800 w-12/12 mx-auto items-center pt-10  h-[430px] '>
          {/* section1 */}



          <p className='text-richblack-300 '>About us</p>
         <h1 className='text-4xl text-white font-bold w-[55%] text-center'>
          Driving Innovation in Online Education for a <Highlighted text= " Brighter Future"/> 
         </h1>
         <p className='text-richblack-300 w-[55%] font-bold text-center mb-20 '> Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>

           
           <div className=' flex flex-row gap-5 absolute -bottom-40 mx-auto w-11/12 justify-around '>
            <img src={photo1} alt='pic'  className=' w-[28%] h-[30%] rounded-3xl' />
            <img src={photo2} alt='pic' className=' w-[28%] h-[30%] rounded-3xl'  />
            <img src={photo3} alt='pic' className=' w-[28%] h-[30%] rounded-3xl'  />
           </div> 



          </div>


             <div className=' w-11/12 mx-auto justify-center  flex items-end h-[350px] '>

              <h1 className='text-4xl text-center text-richblack-300 w-[85%]'>" We are passionate about revolutionizing the way we learn. Our innovative platform <span className='text-cyan-400'>combines technology</span>, <span className='text-orange-500'>expertise</span> , and community to create an <span className='text-orange-400'>unparalleled educational experience</span> "</h1>

             </div>
      
        </div>


        <div className=' w-11/12 flex flex-col mt-40 mx-auto gap-24 mb-20 ' >
          {/* section2 */}

          <div className='flex flex-row justify-around w-[100%] items-center  '>
            
            
            <div className='flex flex-col gap-2 w-[40%]   ' >
             <h1 className='text-3xl  text-center font-bold text-transparent bg-gradient-to-br from-red-900 to-red-600 w-fit bg-clip-text  '>Our Founding Story </h1>
             <p className='text-richblack-300  font-inter text-base text-justify'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
             <p className='text-richblack-300 font-inter text-base  text-justify'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
             </div>


             
             <img src={aboutphoto} alt='pic'/>
             
          </div>

          <div className='flex flex-row justify-around w-[100%] items-center '>
             
            <div className='flex flex-col gap-2 w-[40%]  ' >
             <h1 className='text-3xl  text-center font-bold text-transparent bg-gradient-to-br from-orange-900 to-orange-400 w-fit bg-clip-text  '>Our Vision </h1>
             <p className='text-richblack-300  font-inter text-base text-justify'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience..</p>
             
             </div>


             <div className='flex flex-col gap-2 w-[40%]  ' >
             <h1 className='text-3xl  text-center font-bold text-transparent bg-gradient-to-br from-cyan-900 to-cyan-400 w-fit bg-clip-text  '>Our Mission </h1>
             <p className='text-richblack-300  font-inter text-base text-justify'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
             
             </div>
 
 
            

          </div>
            
            
            
           


        </div>




        <div>
          {/* section3 */}

           
            <div className='bg-richblack-800 w-screen h-[150px] mx-auto flex flex-row items-center justify-around '>

              <div className=' flex flex-row w-11/12 items-center justify-around'>


              
              <div className='flex flex-col items-center '>
                <p className=' text-2xl text-white font-bold'>50k</p>
                <p className='text-richblack-500'>Active Student</p>

              </div>

               <div className='flex flex-col items-center '>
                <p className=' text-2xl text-white font-bold'>10+</p>
                <p className='text-richblack-500'>Mentors</p>

              </div>


               <div className='flex flex-col items-center '>
                <p className=' text-2xl text-white font-bold'>200+</p>
                <p className='text-richblack-500'>Courses</p>

              </div>


               <div className='flex flex-col items-center '>
                <p className=' text-2xl text-white font-bold'>50+</p>
                <p className='text-richblack-500 '>Awards</p>

              </div>




              </div>
              


             </div>




         

        </div>



          <div>
            {/* section4 */}

            <Learning/>


            <div className='h-screen  flex flex-col w-6/12 mx-auto '>
              
              <div className='flex flex-col justify-end items-center h-[20%] mt-16  '>
              <h1 className='text-3xl text-white font-bold'>Get in Touch</h1>
              <p className='text-richblack-400'>We’d love to here for you, Please fill out this form.</p>
            </div>

            <Contactform/>
            </div>
            



          </div>










       
    </div>
  )
}

export default Aboutus