
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector"
import { authapis } from "../apis";
import { setloading } from "../../slices/authslice";
import { setToken } from "../../slices/authslice";
import{setuser} from"../../slices/proflieSlice"
import { useSelector } from "react-redux";



export function Sendotp(email,navigate) {
  
  const { otpapi } = authapis;

  return async (dispatch) => {
    
    const toastId = toast.loading("Sending OTP...");

    try {
      const response = await apiConnector("POST", otpapi, { email });

      console.log("OTP response:", response);

      if (!response.data.success) {
        throw new Error();
      }

      toast.success("OTP sent!");
      navigate(`/verifyemail/${email}`);


    } catch (err) {
      console.log("Error sending OTP:", err);

       const errorMessage =
     err?.response?.data?.message || "Failed to send OTP";

      
      toast.error(errorMessage);
            
    }

    toast.dismiss(toastId);
   
  };
}



export function signup(signupdata,navigate){
          
    const{
       firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
      countrycode}=signupdata;
      
      




    
    return async(dispatch)=>{

        const toastid=toast.loading("loading");

        dispatch(setloading(true));
        try{
            const response =await apiConnector("Post",authapis.signupapi,{
               firstName,
                lastName,
                email,
                password,
                confirmPassword,
                accountType,
                otp,
                contactNumber,
                countrycode
                });

               
                      
             if(!response.data.success){
              toast.error("Cannot signup user");

             }
            
            
             

             toast.success(response.data.message);

             
               navigate("/login");

            
             
           
        }
        catch(err){
            console.log("error in signup ",err);

            const errorMessage =err?.response?.data?.message ;

            toast.error(errorMessage);

        }

       
        dispatch(setloading(false));
        toast.dismiss(toastid);
       
    }
}


 export function login(body,navigate){
   
  const{email,password}=body;
  
  return async(dispatch)=>{
    const id=toast.loading("Loading");
    dispatch(setloading(true));

    try{
      const response=await apiConnector("Post",authapis.loginapi,{email,password})
      
      

      if(!response?.data?.success){
        const message=response?.data?.message || "Login fail"
        toast.error(message);
        return
      }
      
      const message=`Welcome ${response.data.user.firstName} ${response.data.user.lastName} `

      toast.success(message);


      const token=response.data.token ;

      

      dispatch(setToken(token));

      localStorage.setItem("token",JSON.stringify(token));
      

      
      const userimage= response?.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

     
      dispatch(setuser({...response.data.user,image:userimage}));
      
       
      const user={...response.data.user,image:userimage};
     
      localStorage.setItem("user",JSON.stringify(user))




      
      




      

      
      navigate("/dashboard/my-profile")
    }
     
    catch (err){
      console.log(err);
        
      
      const errorMessage =err?.response?.data?.message ;

            toast.error(errorMessage);

      

     }
     dispatch(setloading(false));
     toast.dismiss(id)

  }

 }


  export function logout(navigate){
  return  (dispatch)=>{
    const toastid=toast.loading("loading");
    dispatch(setloading(true));


    try{

      localStorage.removeItem("token");
      localStorage.removeItem("user");
     
     
      dispatch(setToken(null));
      dispatch(setuser(null));
      
      

      toast.success("Logged out")
      navigate("/");

      



    }
    catch(err){

      toast.error("error in logout");
    }
    toast.dismiss(toastid);
     dispatch(setloading(false));
  }
 }

 
  export function resetpassword(email,setemailsent){
  
  
  return async(dispatch)=>{
    dispatch(setloading(true));
   
    const toastid= toast.loading("Loading")

    try{
     
      const response =await apiConnector('Post',authapis.resetapi,{email})
      console.log(response);

      if(!response.data.success){
        toast.error(response.data.message);
        throw new Error();
      }

      toast.success(response.data.message);
      setemailsent(true);






    }
    
    catch (err){
      
      toast.error("Cannot send email please retry");

    }

      toast.dismiss(toastid);
     dispatch(setloading(false));

  }
 }


 export function updatepassword(setemail,formdata,setresetpass ,token,navigate){

  const{password,confirmPassword}=formdata;

  return async(dispatch)=>{
    const id=toast.loading("Loading");
    dispatch(setloading(true))

    try{

      const response=await apiConnector('Post',authapis.updateapi,{password,confirmPassword,token});
        
       


      if(!response.data.success){
        
        console.log(response);
        
        // toast.error(response?.data?.message);
        
       
        throw  new Error(response.data.message)
      }
       

      const email=response.data.data;
      

      

        

      toast.success(response.data.message);
      
      setemail(email);
      setresetpass(true);
      navigate("/login");




    }
    catch(err){

     const message= err.message ||"failed in reset password try again"

      toast.error(message);
      

    }

    toast.dismiss(id);
   dispatch ( setloading(false));
  }

 }