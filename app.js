import express from 'express'
import { config } from 'dotenv';
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser';
import infoRouter from './routes/empInfo.js'
import teamsRouter from './routes/teams.js'
import cors from 'cors'
export const app=express();
config({
    path:"./data/config.env"
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use('/users', userRouter)
app.use('/empInfo', infoRouter);
app.use('/teams', teamsRouter);
app.get('/',(req,res)=>{
    res.send("it working")
})


