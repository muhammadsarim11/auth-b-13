import mongoose from "mongoose";


export const DbConnect = async()=>{

    try {
        
   await mongoose.connect("mongodb://localhost:27017/ecom-store") 
   console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}