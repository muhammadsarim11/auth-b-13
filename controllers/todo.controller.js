import { Todo } from "../models/todo.models.js"


export const CreateTodo = async(req,res)=>{
     const {id} = req.params
     const {title , description} = req.body 

             if(!title || !description){
          return  res.status(400).json({
                message:"fill all the required fields!"
            })
          }

          const todos= await Todo.create({
           title,
            description,
           UserId:id
          })

          res.status(201).json({
            message:"created!",
            todos
          })
}