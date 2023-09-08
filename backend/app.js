const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/error");
const cookieparser=require("cookie-parser");
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload");
const dotenv=require("dotenv");


//config
dotenv.config({path:"backend/config/config.env"});

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());


//Route Imports
const product=require("./routes/productroute");
const user=require("./routes/userroute");
const order=require("./routes/orderroute");
const payment=require("./routes/paymentRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);




//MIddleware for Errors
app.use(errorMiddleware);
// app.listen(process.env.PORT)
// {
//     console.log("hi")
// }

module.exports=app