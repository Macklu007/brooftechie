
const cloudinary = require("cloudinary").v2; 



function cloudinaryConnect() {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});

		console.log("cloudinary connected");
	} catch (error) {
		
		console.log(error,"error aaya hai");
	}
};


module.exports=cloudinaryConnect;