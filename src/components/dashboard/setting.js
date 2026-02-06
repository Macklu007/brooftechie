import { useSelector } from "react-redux"
import { MdFileUpload } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Updateprofile_picture } from "../../services/operation/setting";
import Spinner from"../../components/common/spinner";
import toast from "react-hot-toast";
import { setuser } from "../../slices/proflieSlice";
import Profileinfosettings from "./Settingcomponets/profileinfosettings";
import Updatepassword from "./Settingcomponets/updatepassword";

export function Setting(){

     const dispatch=useDispatch();
    
    const{user}=useSelector((state)=>state.profile);

    const[profilepic,setpic]=useState(null);
    
    const[preview,setpreview]=useState(null);

    const[loading,setloading]=useState(false);

    const{token}=useSelector((state)=>state.auth);

    const[showpreview,setshowpreview]=useState(false)

    



    function previewfile(file){
       
        const render=new FileReader();

        render.readAsDataURL(file);
       
        render.onloadend=()=>{
            setpreview(render.result);
        }

        
    }
  
   



 
   
    
 

function changehandle(event){
 const file= event.target.files[0];

 if(file){
    
    setpic(file);
    setshowpreview(true);
   
 }


}
    
   
function clickhandle(){
 
  
    

    try{   
        setshowpreview(false);

        if(profilepic==null){
        toast.error("Please select file");
        throw  new Error("Please select file")
    }


        

         setloading(true);
 
    
       
     const form =new FormData();
     

     form.append("displayPicture",profilepic);

      
    
      dispatch(Updateprofile_picture(token,form)).then(()=>{
         setloading(false);

         previewfile(profilepic);

        dispatch(setuser({...user,image:preview}));
        console.log(user);
      });
        
    

     

     }
     
     catch(err){
        console.log(err.message);


    }

   








   
    
}

  useEffect(()=>{ 
    if(profilepic){
       previewfile(profilepic); 
    }
    

},[profilepic])



    if(loading){
    return(<Spinner/>)
     }


     
    
    return (


       
    <div className="text-white  relative ">

         { showpreview &&
                    <div className=" absolute top-56 right-20 z-40 w-10/12 h-[60vh] flex flex-col gap-2 bg-richblack-800 justify-center items-center" >
                        <img src={preview} className="h-[50vh] w-[30vw] rounded-full  "/>
                        <button 
                        onClick={()=>setshowpreview(false)}
                        className="bg-yellow-100 text-richblack-800 font-semibold h-8 w-[70%]  rounded-xl "> Done</button>
                        </div>
                   
                }

            <h1 className="text-3xl text-white font-bold mb-10 ">Edit profile</h1>

        <div className="flex flex-row gap-5 bg-richblack-800 h-32 rounded-md items-center w-[70vw] ">
              
                <img src={`${  user?.image }` } alt="profilepic" className="size-24 rounded-full ml-10"/>

               
                
            <div className="flex flex-col gap-3 ">
                    <p className="text-base text-white font-bold">Change Profile Picture</p>
                
                <div className="flex flex-row gap-5 ">
            
                                

                                 <label htmlFor="profile-photo" ><div className={`w-28 bg-richblack-600 h-10 ${profilepic!==null && "overflow-x-scroll"} rounded-md flex items-center justify-center text-base font-semibold text-richblack-200` }>
                                    <p className={`text-white ${profilepic!==null && "text-sm"}`}> {
                                       profilepic!==null ?
                                      
                                       `${profilepic.name}`
                                       : `Select`

                                    } 
                                    </p>
                                    
                                    </div>  </label>
                                    <input 
                                    type="file"
                                     id="profile-photo" 
                                      accept="image/*"  
                                   
                                       className="hidden" 
                                     
                                       onChange={changehandle}/>
                                   


                                    <button className="flex flex-row items-center justify-center h-10 w-28 bg-yellow-100 rounded-md text-richblack-800 font-semibold gap-1"  onClick={clickhandle}>Upload <MdFileUpload /></button>

        
                </div>



                

            </div>
                
        </div>

        <Profileinfosettings setloading={setloading}/>

        <Updatepassword setloading={setloading}/>




    </div>

    )
}