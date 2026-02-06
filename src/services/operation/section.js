import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { sectionapi } from "../apis";

export async function CreateSection(token,formdata){

   try{
        const result = await apiConnector("POST",sectionapi.createsectionapi,formdata,{
                Authorization: `Bearer ${token}`,
              })

              return result.data.updatedCourse;

   }  

   catch(err){
      
      console.log(err)

    
   }

   

}


export async function EditSection(token,formdata) {
   try{
      const updatedCourse=await apiConnector("POST",sectionapi.updatesectionapi,formdata,{ Authorization: `Bearer ${token}`})
      
    

      
      

      return(updatedCourse.data.data)

   }
   catch(err){
      
      console.log(err)

    
   }
   
}


export async function Deletesection(token,formdata) {
try{
   const result=await apiConnector("POST",sectionapi.deletesectionapi,formdata,{ Authorization: `Bearer ${token}`})
   toast.success(result.data.message);

   return(result.data.data)

}
catch(err){
    console.log(err)

}
   
}