const nodemailer=require("nodemailer");
require("dotenv").config();

async function mailsender(email,title,body)
    
    {


    try{

      console.log(email);
       
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
            secure: false,



           
            
            

        });

        let info= await transporter.sendMail({
            from:`"Bro of techie"  <${process.env.MAIL_USER}>`,
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
        });

        console.log(info.response,"nodemailer mei aagye");

        return info;
            

    }
    
  catch(err){

    console.log(err.message)
    return err.message
  }
  

}


module.exports=mailsender;