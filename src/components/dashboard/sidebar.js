import React from 'react'
import { useSelector } from 'react-redux';
import Sidebarlink from './sidebarlink';
import { IoIosLogOut } from "react-icons/io";
import { logout } from '../../services/operation/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Sidebar({setmodal}) {

    const dispatch=useDispatch();
    const navigate=useNavigate();


    function clickhandler(){
       
        setmodal((prev)=>!prev);
    }

 const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: "Instructor",
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: "Instructor",
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: "Instructor",
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: "Student",
    icon: "VscMortarBoard",
  },
  {
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: "Student",
    icon: "VscArchive",
  },


   
]

const setting= {
    id: 8,
    name: "Settings",
    path: "/dashboard/settings",
    
    icon: "VscSettingsGear",
  }

 

 const{user}=useSelector((state)=>state.profile);
   

  return (
   
   
   <div className='flex flex-col gap-5 min-h-[calc(100vh-3.5rem)]  w-[270px] bg-richblack-800 pt-10  '>
   
   
   
   
    {
         
    
      


        sidebarLinks.map((item)=>{
          if(item?.type && user?.accountType && user.accountType !== item.type){


             return null
          }
         
          return(
             
           
            <Sidebarlink item={item}  key={item.id}/>
            
        )
        
        })

       
           
    }


      <hr className='w-[80%] mx-auto  opacity-50'/>


      <div className=' flex flex-col gap-3 '>
        <Sidebarlink item={setting}/>

        <div className='flex flex-row  items-center font-semibold text-richblack-400 pl-10  gap-2' onClick={clickhandler}>
            <IoIosLogOut  className='text-xl' /> 
            <span>Logout</span>
        </div>
        
      </div>


      

    </div>
  )
}

export default Sidebar