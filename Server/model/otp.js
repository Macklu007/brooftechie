const mongoose=require("mongoose");
const mailsender=require("../utils/nodemailer");
const otpTemplate=require("../mail/templates/emailverification");


const otpSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    otp:{
        type:String,
        required:true,

    },
  
	createdAt:{
         type:Date,
         default:Date.now(),
         expireAfter: 300,
    


    }
	
});


async function sendVerificationEmail(email, otp) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse = await mailsender(
			email,
			"Verification Email",

			otpTemplate(otp),
			
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}


// Define a post-save hook to send email after the document has been saved
otpSchema.pre("save", function (next){
	
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
	 sendVerificationEmail(this.email, this.otp);
	}
	next();
});




    





 
    
 

 

module.exports=mongoose.model("Otp",otpSchema);
