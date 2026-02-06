const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../model/user");
require("dotenv").config();



exports.auth=async (req,res,next)=>{
   try{
 const token =
      req.cookies.token ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.body.token;

    console.log(token);
   
    if(!token){
        return res.status(500).json({
            sucess:false,
            message:`Token Missing`
        })
    }

    try{

      

        const decode =  jwt.verify(token,process.env.JWT_SECRET);
        
        

        req.user=decode;

    }
    catch(err){
       
     return  res.status(401).json({
     sucess:false,
     message:"token is invalid"

    })
    }
    next();

   }

   catch(err){

    return  res.status(401).json({
        sucess:false,
        message:"Something Went Wrong While Validating the Token `"
   
       })
   }
   
   
   
}




exports.isstudent=async (req,res,next)=>{
    try{

 const userDetails=await User.findOne({email:req.user.email});
   
   if(userDetails.accountType!=="Student"){
    return res.status(401).json({
        sucess:false,
        message:"This is a Protected Route for Students"

    })

   }





    } 

    catch(err){
        return res.status(401).json({
            sucess:false,
            message:"error in finding usertype"
    
        })
    

    }
  

   next();







}




exports.issAdmin=async (req,res,next)=>{
    try{

 const userDetails=await User.findOne({email:req.user.email});
   
   if(userDetails.accountType!=="Admin"){
    return res.status(401).json({
        sucess:false,
        message:"This is a Protected Route for Admin"

    })

   }





    } 

    catch(err){
        return res.status(401).json({
            sucess:false,
            message:"error in finding usertype"
    
        })
    

    }
  

   next();







}


exports.isInstructor=async (req,res,next)=>{
    try{

 const userDetails=await User.findOne({email:req.user.email});
   
   if(userDetails.accountType!=="Instructor"){
    return res.status(401).json({
        sucess:false,
        message:"This is a Protected Route for Instructor"

    })

   }





    } 

    catch(err){
        return res.status(401).json({
            sucess:false,
            message:"error in finding usertype"
    
        })
    

    }
  

   next();







}

