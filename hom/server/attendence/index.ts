import express, { Request, Response } from 'express'

export const AttendenceRouter = express.Router()

AttendenceRouter.get('/',(req:Request,res:Response)=>{
    res.send('Hello world')
})