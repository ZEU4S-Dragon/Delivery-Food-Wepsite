import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config
const app=express();
const port=8011

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//db connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))

app.get('/',(req,res)=>{
    res.send("API working")
});

 

app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
})



//mongodb+srv://Z3abdalla:325253725@cluster0.yyi4bbu.mongodb.net/?