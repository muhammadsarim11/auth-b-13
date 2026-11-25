import express from 'express'
import { DbConnect } from './config/db.js'
import userRoutes from './routes/user.route.js'


const app = express()

app.use(express.json())
DbConnect()


app.use("/user",userRoutes)

app.listen(3000,()=>{
    console.log("running")
})