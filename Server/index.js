const express = require("express");
const app = express();
const userRoutes = require("./routers/user");
const profileRoutes=require("./routers/profile");
const dbconnect=require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const  cloudinaryConnect  = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const course=require("./routers/course");
const contact=require("../Server/routers/contact")
const paymentRoutes = require("./routers/payment");

// Loading environment variables from .env file
dotenv.config();

// Setting up port number
const PORT = process.env.PORT || 4000;



// Connecting to database
dbconnect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "https://brooftechie-acgo.vercel.app",
  "https://brooftechie-acgo-adfykyd3j-macklu007s-projects.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Connecting to cloudinary
cloudinaryConnect();


// Setting up routes
app.use(userRoutes);
app.use(course);
app.use(profileRoutes);
app.use(contact);
app.use("/payment",paymentRoutes);


// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.