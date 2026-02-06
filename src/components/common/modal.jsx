import React from 'react'
import { useNavigate } from 'react-router-dom';
import {logout} from "../../services/operation/auth"
import { useDispatch } from 'react-redux';
import { setToken } from '../../slices/authslice';
import { setuser } from '../../slices/proflieSlice';

function Modal(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const setmodal=props.setmodal;
    
  return (
   
    <div className='relative  z-50 backdrop-blur-sm ' 
        onClick={()=>setmodal(false)}>
              
              
               <div 
               className='w-full h-screen  bg-white opacity-10  flex justify-center items-center  '>
         
       
       
       
       
       
               </div>



                 <div 
                 className='w-[400px] z-10 h-[300px]  bg-transparent absolute top-[38%] left-[37%]  flex flex-col gap-10 rounded-2xl justify-center items-center shadow-2xl shadow-richblue-50 '>
                    <p className=' text-white font-extrabold text-center text-3xl'>{props.text? props.text : "Are you sure to logout ?"}</p>
            
           
           
          <div className=' gap-5 flex flex-row '>
              <button onClick={()=>{ if(props.handler){
                props.handler();
                setmodal(false);
                return
              }
                 dispatch(logout(navigate))}}
            className=' bg-yellow-50 w-36 h-10 rounded-md font-semibold'  >
               {props.text?"Delete":"Logout"}

            </button>

            <button onClick={()=> setmodal(false)  }
                className=' bg-white w-36 h-10 rounded-md font-semibold' >
                 
                Cancel
            </button>
          </div>
        </div>


    </div>
   


  )
}

export default Modal