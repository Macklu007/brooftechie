  import toast from "react-hot-toast";
import { profileapi } from "../apis";
import { apiConnector } from "../apiconnector";


 export async  function fecthenrollcourse(token){

    const id=toast.loading("Getting enrolled course...");

    let result;



  

         
        
                try{
                      const response=await apiConnector("GET",profileapi.getenrollcourse,null, {
                Authorization: `Bearer ${token}`,
              });
                 
              if(!response.data.success){
                throw new Error(response.data.message);
        
              }

               result= response.data.data;



              
                    
                }
        
               
                catch(err){
                    console.log(err,"Error in fecthing enrollcourse");
                    toast.error(err.message);
                    
                }


                toast.dismiss(id);

                return result;
              
        
        
        
            
        
        

    }

      



    

