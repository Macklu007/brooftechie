import Navigationcompo from "./navigationcompo";
import Renderstep from "./renderstep";
import { BsLightningChargeFill } from "react-icons/bs";

export  function AddCourse(){
    return(
      <div className="text-white flex flex-row gap-5 ">
       

        <div className="flex flex-col"> 
            <h1 className="text-3xl">Add Course</h1>
            <Renderstep/>
            
        </div>
        
        
        <div>
           <h1 className="flex items-center text-lg"><BsLightningChargeFill className="text-yellow-200" />
             Course Upload Tips
            </h1> 
            <ul className=" bg-richblack-700 text-white w-[400px] h-[300px] flex flex-col gap-2"> 
                <li>
                   . Set the Course Price option or make it free.
                </li>
                <li>
                   . Standard size for the course thumbnail is 1024x576.
                </li>

                 <li>
                   . Video section controls the course overview video.
                </li>

                <li>
                   . Add Topics in the Course Builder section to create lessons, quizzes, and assignments.
                </li>

                <li>
                   . Information from the Additional Data section shows up on the course single page.
                </li>

                <li>
                   . Make Announcements to notify any important
                </li>

               
            




            </ul>
            

        </div>

        
      </div>
    )

}