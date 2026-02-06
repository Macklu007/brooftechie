import React, { useState } from 'react'
import Navbar from '../components/common/navbar'
import Modal from '../components/common/modal';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/sidebar';

function Dashboard() {
  const[openmodal,setmodal]=useState(false);

  return (
    <div className={`relative ${openmodal ? "w-[100vw] h-[100vh] " : "overflow-x-auto"} `}>
     
     
      <Navbar setmodal={setmodal}></Navbar>
      
      
      <div className={`absolute top-0 w-full  `} >
          
      { openmodal &&
        <Modal setmodal={setmodal}/>
      }
     </div>

      <div className='flex flex-row w-full justify-around '>

    <Sidebar setmodal={setmodal}/>



      <div className='flex  w-[70%]  pt-10 mx-auto '>
         <Outlet/>
      </div>
      

</div>
      
      
      
      
      </div>
  )
}

export default Dashboard