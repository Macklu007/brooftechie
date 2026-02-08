import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import Highlighted from '../components/homepage/core/highlighted';
import CTAbutton from'../components/homepage/core/button'; 
import banner from"../image/banner.mp4";
import Codeblock from '../components/homepage/core/codeblock';
import Subhero from '../components/homepage/subhero';
import Planwithus from '../components/homepage/planwithus';
import InstructorSection from '../components/homepage/instructorSection';
import Explore from '../components/explore';
import Navbar from '../components/common/navbar';
import Modal from '../components/common/modal';
import { useState } from 'react';
import ReviewSlider from '../components/common/ReviewSlider';

function Home() {
   const[openmodal,setmodal]=useState(false);
  return (
    <div  className={`scroll-smooth  ${openmodal ? "w-[100vw] h-[100vh] " : "overflow-x-hidden"}`}>


       {/* section 1 */}
       
         <Navbar setmodal={setmodal}></Navbar>
        
        <div className={`absolute top-0 w-full  `} >
          
       { openmodal &&
        <Modal setmodal={setmodal}/>
      }
      </div>
       
       

        <div >
           
           
           
            <Link to={"/signup"}> 
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-[300px] sm:w-fit 
            shadow-sm shadow-richblack-600'> 
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group - hover:bg-richblack-900' >
             <p>Become a Instructor</p>
              <FaArrowRight />


                </div>
            
           </div>
       </Link>
       
       
       
       
      

        <div className='flex-col flex    sm:flex-row  font-semibold text-white text-2xl sm:text-3xl text-center mx-auto w-[350px] sm:w-fit mt-9 ' >

            <p>Empower Your Future with </p>
            
            <Highlighted text="Coding Skills"></Highlighted>
        
        </div>

         <div className='text-richblack-300 font-bold  w-8/12 mt-3 text-center mx-auto max-w-maxContent'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 

        </div>

          
        <div className='flex flex-row mt-5 gap-7 justify-center'>
            <CTAbutton active={true} linkto={"/signup"} >Learn more</CTAbutton>
            <CTAbutton>Book a Demo</CTAbutton>
           

        </div>

        <div className='w-8/12 mx-auto mt-6 shadow-2xl shadow-blue-50 bg-gradient-to-bl from-caribbeangreen-25 to-richblue-600 rounded-2xl'> 
            <video 
            muted
            autoPlay
            loop
            

            src={banner}
            className='h-[100%] rounded-2xl'
            
            >
           
            </video>
          </div>



         <Codeblock 
         postion={"lg:flex-row"} 
         
         heading={ 
          <div className=' text-2xl sm:text-3xl font-bold'>
                      Unlock your 
                      <Highlighted text={"coding potential"} ></Highlighted>
                      <br/>
                      with our online courses
                     
          </div>
          
           }

         
         
         subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"}
         btn1={
            {
            active:true,
            linkto:"/signup",
            text:"Try it YourSelf"
         }}

         
         btn2={
            {
            active:false,
            linkto:"/",
            text:"Learn more"
         }}

         codeblock={" <!DOCTYPE html>\n <html> \n<body>\n<h1>THIS IS YOUR FIRST CODE IN HTML</h1>\n<p>Hello world.....</p>\n</body>\n</html> "}
         colour="text-sky-400"
         backgroundGradient="bg-gradient-to-r from-lime-900 to-yellow-300"
         >
           </Codeblock>


            <Codeblock 
         postion={"lg:flex-row-reverse"} 
         
         heading={ 
          <div className='text-2xl sm:text-3xl font-bold'>
                     Start 
                      <Highlighted text={"coding in seconds"} ></Highlighted>
                      <br/>
                     
                     
          </div>
          
           }

         
         
         subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson"}
         btn1={
            {
            active:true,
            linkto:"/signup",
            text:"Continue Lesson"
         }}

         
         btn2={
            {
            active:false,
            linkto:"/",
            text:"Learn more"
         }}

         codeblock={`<!DOCTYPE>\n<html>\n<body>\n<h2>What Can JavaScript Do?</h2>\n<p id="demo">JavaScript can change HTML content.</p>\n<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>\nClick Me!</button></body> </html>`}
         
          colour="text-yellow-100"

          backgroundGradient="bg-gradient-to-r from-blue-300 to-blue-700"
         >
           </Codeblock>

           <Explore></Explore>


         
         
         
         </div>


            
     

         {/* section 2*/}

         <div className='bg-pure-greys-5 text-richblack-700'> 
          
          <div className='homepage_bg  w-11/12 mx-auto h-[336px] flex items-end justify-center '>
            


            <div className=' flex flex-row gap-10 '>
            
            
             <CTAbutton active={true} linkto={"/signup"} >
            <div className=' flex flex-row gap-2 items-center'>
              <p>Explore Full Catalog </p>
              <FaArrowRight></FaArrowRight>
            </div>
            
            </CTAbutton>
            
           
            <CTAbutton  >
              

             
              <p>Learn more</p>
              
             
            </CTAbutton>



            </div>
           


          </div>
        <div className='w-11/12 max-w-maxContent flex flex-col mx-auto mt-24'>

              <div className='flex flex-col md:flex-row w-11/12 justify-center mx-auto gap-20 ' >
                  
                  
                  <div className='text-3xl'> 
                    <h1>Get the skills you need for a <Highlighted text={"job that is in demand"}/></h1>

                </div>

                  <div className='text-richblack-500 font-semibold flex flex-col gap-6 '>
                        <p>The modern Brooftechie is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>

                        <div className='w-fit'>
                          <CTAbutton active={true} linkto={"/signup"}>Learn More</CTAbutton>
                        </div>

                        
                  </div>
                
           </div>


           <Subhero></Subhero>




         </div>







      </div>
         
       
          



         {/* section 3 */}
         <div className='w-full mx-auto flex flex-col  text-center bg-pure-greys-5'>
           
           
           
           
           <div>

            <div className='w-11/12 mx-auto  text-3xl font-semibold '>

            Your swiss knife for <Highlighted text="learning any language"/>
             </div>
             
             <p className='text-base w-[50%] mx-auto'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>

           </div>

          <Planwithus></Planwithus>
          <div className='w-11/12 mt-10 flex justify-center mx-auto mb-10 '>
             <CTAbutton active={true} linkto={"/signup"}> Learn more</CTAbutton>
          </div>
         


           
        
        
        
        
        
         </div>
             
             
             
             
       


             <ReviewSlider/>
         {/* section 4 */}


        
         <div>

          <InstructorSection></InstructorSection>
         </div>

         
       

    </div>
  )
}

export default Home