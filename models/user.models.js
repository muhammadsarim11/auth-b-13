import mongoose from "mongoose";



// todo application
// id


 const userSchema = mongoose.Schema({

  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true

  }

 })


  export const User = mongoose.model("User",userSchema)