require('dotenv').config()
const mongoose=require('mongoose')
const router=require('./router/index')
const cookieParser=require('cookie-parser')
const errorMiddleware = require('./middlewares/error-middleware');
const express=require('express')
const cors=require('cors')

const port=process.env.PORT || 8000
const app=express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: [process.env.CLIENT_URL]
}));
app.use('/api',router)
app.use(errorMiddleware);



const start=async()=> {
    try{
        await mongoose.connect(process.env.DB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        app.listen(port,()=>console.log(`Server listen on port ${port}`))
    }catch (e) {
        console.log(e)
    }
}
start()