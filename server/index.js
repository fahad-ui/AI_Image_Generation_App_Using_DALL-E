import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

//The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code.
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }))


app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)

app.get('/',async (req,res)=>{
    res.send('Hello from DALL-E')
})

//we have base of application ready, but we need a way to run it...

const startServer = async () => {
   
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=> console.log('server has started running on http://localhost:8080'))

    }
    catch(error){
       console.log(error)   
    }

}

startServer()