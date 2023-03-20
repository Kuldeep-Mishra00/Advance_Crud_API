import Express from "express"
import * as dotenv from 'dotenv'
import morgan from "morgan"
import cors from 'cors'
import router from './Routes/CrudRoute.js'
import connectDB from "./config/Dbconnect.js"

dotenv.config()

//database connecation
connectDB();

const app = Express();

//middleware
app.use(cors())
app.use(Express.json());
app.use(morgan("dev"));

//routes
app.use('/',router)

app.get('/',(res,resp)=>{
    resp.send('app is running bro');
})

const port = process.env.PORT || 5000
app.listen(port,()=>{ console.log(`app is running on ${port} `)});