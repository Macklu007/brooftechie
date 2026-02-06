import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import { apiConnector } from '../../services/apiconnector';
import {categories } from '../../services/apis';
import {  matchPath, useLocation } from "react-router-dom"
import { BsChevronDown } from "react-icons/bs"

import { useNavigate } from 'react-router-dom';
import {logout} from "../../services/operation/auth"
import { useDispatch } from 'react-redux';
import { setToken } from '../../slices/authslice';
import { setuser } from '../../slices/proflieSlice';
import { FaPowerOff } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";







function Navbar({setmodal}) {
 
  const[isclick,setisclick]=useState(false);
   const [loading, setLoading] = useState(false)

  const navigate=useNavigate();
  const dispatch=useDispatch();

    const NavbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Catalog",
    path: '/catalog',
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const [subLinks, setSubLinks] = useState([])
const location = useLocation()

  

const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  

  




const{cart}=useSelector((state)=>state.cart);
const{token}=useSelector((state)=>state.auth);
const{user}=useSelector((state)=>state.profile);






let image;

if(user!==null){
  image=user.image;

}


function openmenu(){

  setisclick((prev)=>!prev);
  
} 




  return (
    <div className='w-full  bg-richblack-800 h-16 rounded-lg border-solid  border-b-2 border-gray-700 '>
        
        
        <div className=' w-11/12 h-16 flex flex-row items-center justify-between  mx-auto'>
         
        <Link to={"/"}>
        <div className='flex flex-row items-center text-3xl font-extrabold text-yellow-100 '>
             <FaCode />
       <p className='  text-white'>Broof<span className='text-yellow-100'>Techie</span></p>
        </div>
        
      
            </Link>
     

        <div className='w-[35%] '>
            <ul className=' flex flex-row text-richblack-300 gap-7 font-black'>
                {
                   NavbarLinks.map((sublink ,index)=>
                   {
                     return(
                        
                        
                           sublink.title ==="Catalog" ? 
                         
                         (
                          <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{sublink.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks?.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                           )

                           
                           :

                           (<li key={index}>
                            <NavLink to={sublink.path}>{sublink.title}</NavLink>
                           </li>)

                        
                           )   
                   } 
                
                    )
                        
                    
                  
                }
            </ul>
        </div>



                      <div className='flex flex-row gap-8 font-semibold  '>
                          { token==null &&
                              <div className =" w-20 h-8  bg-yellow-100 flex flex-row justify-center items-center rounded-md hover:scale-110 transition-all duration-200   ">

                              <Link to="/login">
                              Login
                            </Link>

                              </div>
                          
                          }

                          
                          { token==null &&
                              <div className =" w-20 h-8  bg-yellow-100 flex flex-row justify-center items-center  rounded-md  hover:scale-110 transition-all duration-200 ">
                              <Link
                                to="/signup">
                              
                              Signup
                            </Link>

                              </div>
                          
                          }

                         
                         
                          { token!==null &&
                            
                            <div className ="  w-24 h-8  bg-yellow-100 flex flex-row justify-center items-center rounded-md ">

                              <Link to="/dashboard/my-profile">
                            Dashboard
                            </Link>

                              </div>
                          
                          }

                          
                           
                         
                          { (token &&  user?.accountType !== "Instructor" ) &&
                          
                          <div className=' relative text-yellow-100 flex flex-row justify-center items-center w-16 h-8 text-3xl '>
                                <FiShoppingCart onClick={()=>{navigate("/dashboard/cart")}} />
                                { cart.length >0 &&
                                  <p className='absolute top-[-8px] left-11 text-white text-base '>{cart.length}</p>
                                }
                                
                          </div>

                          }



                          
                      
                      
                      






                      </div>



                     

                         
              
             
              {  token!==null &&
               
               <div className='bg-white rounded-full size-8 justify-center flex items-center relative ' onClick={openmenu}>

                <img 
                src={image} 
                alt='Profile'
                className='rounded-full size-7'
                 />

                  { isclick &&


                    <div className='absolute top-12 bg-richblack-700 font-bold text-richblack-300 flex flex-col gap-2 w-28 items-center pb-5 mt-1 h-30  z-20 '  >
                    
                     <Link to="/dashboard/my-profile">Dashboard</Link>

                     
                          
                      <button className= 'w-20 h-8  flex flex-row gap-1 items-center rounded-md mr-2'  onClick={()=>{setmodal((prev)=>!prev)
                       }}> < FaPowerOff className='text-red-600' />Logout</button>
                        
                     

                    
                    </div>
                    
                    
                    
                  } 
                
               </div>
              }




               
                       
            
            
            
         </div>

             
          

    </div>
  )
}

export default Navbar;