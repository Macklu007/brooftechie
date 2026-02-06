
const bcrypt = require("bcrypt")
const User = require("../model/user")
const OTP = require("../model/otp")
const jwt = require("jsonwebtoken")
const otpGenerator = require("otp-generator")
const mailSender = require("../utils/nodemailer")
const { passwordUpdated } = require("../mail/templates/emailverification")
const Profile = require("../model/profile")
require("dotenv").config();


exports.signup = async (req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
            countrycode
          } = req.body
   
   
   
   
     if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !confirmPassword ||
        !otp 
      ) {
        return res.status(403).send({
          success: false,
          message: "All Fields are required",
        })
      }
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message:
            "Password and Confirm Password do not match. Please try again.",
        })
      }

      try{
        const userDetails=await User.findOne({email});

        console.log(userDetails);

        if(userDetails){
            return res.status(401).json({
                success:false,
                message:"User already exists. Please sign in to continue.",
            })
        }


        //most RECENT OTP
             
        let response=await OTP.find({email}).sort({createdAt:-1}).limit(1);

        console.log(response);

       if(response.length===0){
        return res.status(400).json({
            success: false,
            message: "The OTP is not valid",
          })
       }

       else if(otp!== response[0].otp)
       {
        return res.status(400).json({
            success: false,
            message: "The OTP not match",
          });
    

       }


       try{
        const hashedPassword = await bcrypt.hash(password, 10);
       
        let approved = ""
        approved === "Instructor" ? (approved = false) : (approved = true)
    
        // Create the Additional Profile For User
        const profileDetails = await Profile.create({
          gender: null,
          dateOfBirth: null,
          about: null,
          contactNumber:contactNumber,
        })
        const user = await User.create({
          firstName,
          lastName,
          email,
          contactNumber,
          countrycode,
          password: hashedPassword,
          accountType: accountType,
          approved: approved,
          additionalDetails: profileDetails._id,
          image: "",
        })
    
        return res.status(200).json({
          success: true,
          user,
          message: "User registered successfully",
        })




       }

       catch(err){
        console.log(err,"error in hashing password");


       }









      }
       catch(err){
        console.error(err)
    return res.status(500).json({
      success: false,
      message: "Error in find User detail.",
    })

       }
   
   
   
    }

    catch (error){

        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be registered. Please try again.",
        })


    }


   
}



exports.login= async(req,res)=>{
    try{
        const { email, password } = req.body

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
              })
        }

        const user = await User.findOne({ email }).populate("additionalDetails");


         if (!user) {
            // Return 401 Unauthorized status code with error message
            return res.status(401).json({
              success: false,
              message: `User is not Registered with Us Please SignUp to Continue`,
            })
          }


          if (await bcrypt.compare(password, user.password))
            {
            
             const token = jwt.sign(
              { email: user.email, id: user._id, accountType : user. accountType },
              process.env.JWT_SECRET,
              {
                expiresIn: "24h",
              } 
             )
              user.token=token;
               user.password=undefined;

               const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
              }
              res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
              })
           
            }

            else {
                return res.status(401).json({
                  success: false,
                  message: `Password is incorrect`,
                })
              }

        



    }
   
    catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Login Failure Please Try Again`,
        })
    }
}



exports.sendotp=async(req,res)=>{
    try{
        const { email } = req.body;
          
        const checkUserPresent = await User.findOne({ email });
        
        if(checkUserPresent){
            return res.status(401).json({
                success: false,
                message: `User is Already Registered`,
              })
        }

        
        let otp =otpGenerator.generate(6,{
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
      
        })
        console.log(otp,"printing otp");
         

        let response=await OTP.findOne({otp:otp});
        console.log(response);

        while(response){

            otp=otpGenerator.generate(6,{
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
          
            })

            response=await OTP.findOne({otp:otp});
        }


        console.log("save the otp");



        const saveotp =await OTP.create({
           email,otp
        });
        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
          })
        
    }


    catch(error){
      console.log(error.message)
    return res.status(400).json({ success: false, error: error.message })
    }
}



exports.changepassword= async(req,res)=>{
    try{
        const userDetails = await User.findById(req.user.id);

        const { oldPassword, newPassword } = req.body;

         
         

        const isPasswordMatch = await bcrypt.compare(
            oldPassword,
            userDetails.password
          )

          if(!isPasswordMatch){
            return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" }); 


          }

          const newPasswordvalidation=await bcrypt.compare(newPassword,userDetails.password);

          if(newPasswordvalidation){
              return res
        .status(401)
        .json({ success: false, message: "The password is same" })
          }


          const hashedPassword=await bcrypt.hash(newPassword,10);

          const updatedUserDetails = await User.findByIdAndUpdate(
            req.user.id,
            { password: hashedPassword },
            { new: true }
          )


          try{
            const emailResponse = await mailSender(
                updatedUserDetails.email,
                "Password for your account has been updated",
                
                  `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
                
              )
              console.log("Email sent successfully:", emailResponse.response);



              return res.status(200).json({
                sucess:true,
                message:"password update",
                data:updatedUserDetails
              })
              
          }

            catch(error){
                console.error("Error occurred while sending email:", error)
            return res.status(500).json({
            success: false,
            message: "Error occurred while sending email",
            error: error.message,
              })
            }


    }
    catch(error)
    {
        console.error("Error occurred while updating password:", error)
    
        return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
    }
}

