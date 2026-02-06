import React from 'react'
import * as Icons from "react-icons/vsc";
import { matchPath, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Sidebarlink({item}) {
    const Icon=Icons[item.icon];
    const location=useLocation();



    function matchroute(route){
      return  matchPath({path:route},location.pathname)
    }
   

  return (

    
   <NavLink to={item?.path} >
    <div className={`relative flex flex-row items-center h-10 ${matchroute(item.path)? " bg-yellow-700 text-yellow-100 border-l-2 border-yellow-25" :" text-richblack-400"} gap-2 `} >
    
     <Icon className="text-lg ml-10"/>
     <p className='font-semibold'>{item?.name}</p>

    </div>
    
     </NavLink>
 
        

 


   
  )
}

export default Sidebarlink