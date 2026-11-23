import mongoose from "mongoose";



  const todoSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  {
    timestamps:true
  }


)


   export const Todo= mongoose.model("Todo",todoSchema)