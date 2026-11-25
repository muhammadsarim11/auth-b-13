import { User } from "../models/user.models.js"
import bcrypt from 'bcrypt'



export const RegisterUser = async (req,res)=>{

          const {username , email, password} = req.body

          if(!username || !email || !password){
          return  res.status(400).json({
                message:"fill all the required fields!"
            })
          }

        const existedUser  = await User.findOne({
        email:email
           })

if(existedUser){
            return res.status(400).json({
                message:"account already existed!"
            })
        }

      const HashedPassword = await bcrypt.hash(password,10)

console.log(HashedPassword)

    const newUser  = await User.create({
        username:username,
        email:email,
        password:HashedPassword
       })

res.status(201).json({
    message:"success",
    newUser
})

}






export const LoginUser = async(req,res)=>{

    const {email , password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message:"fill all the required fields"
        })
    }

    const user = await User.findOne({
        email:email
     })

     if(!user){
        return res.status(404).json({
            message:"no user found!"
        })
     }
      const Ismatched = await bcrypt.compare(password,user.password)

      if(!Ismatched){
        return res.status(400).json({
            message:"invalid credentials"
        })
      }
      res.status(200).json({
        message:"successfully login",
        user
      })

}