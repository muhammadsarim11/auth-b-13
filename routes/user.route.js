import express from 'express'
import { LoginUser, RegisterUser } from '../controllers/user.controller.js'


const router = express.Router()

router.post("/create",RegisterUser)

router.post("/login",LoginUser)


export default router