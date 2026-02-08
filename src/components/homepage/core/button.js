import React from 'react'
import { Link } from 'react-router-dom'

function CTAbutton ({children,active,linkto}) {
  return (
   
    <Link to={linkto}>
        
        <div className={`text-center text-[13px] py-1 px-1 md:py-3    md:px-6 rounded-md font-bold transition-all duration-100 hover:scale-95 w-fit 
            
            ${active?"bg-yellow-100 ":"bg-richblack-700 text-white"}`}>
            {children}
        </div>
    </Link>
  )
}

export default CTAbutton;