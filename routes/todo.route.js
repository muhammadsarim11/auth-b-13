import express from 'express'
import { CreateTodo } from '../controllers/todo.controller.js'

const router = express.Router()



router.post("/create-todo/:id", CreateTodo)


export default router