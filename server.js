import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import jeweleyRouter from "./routes/jewelryRoute.js";



// app config
const app = express()
const port = 4001

// middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use("/api/jewelry",jeweleyRouter)
app.use("/images",express.static('uploads'))


// db connect
connectDB();

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://nghialmpi00200:<db_password>@thoitrang1.0sfs0.mongodb.net/?