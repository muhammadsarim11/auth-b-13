import express from 'express'
import { DbConnect } from './config/db.js'


const app = express()


DbConnect()


app.listen(3000,()=>{
    console.log("running")
})