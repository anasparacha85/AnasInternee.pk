require('dotenv').config()
const express=require('express');
const cors=require('cors')
const bodyparser=require('body-parser')
const AuthRouter=require('./Router/AuthRouter')
const JobRouter=require('./Router/JobRouter')
const passport=require('passport')
const errormiddleware=require('./Middleware/ErrorMiddleware')
const UserRouter=require('./Router/UserRouter')
const AdminRouter=require('./Router/AdminRouter')
const CourseRouter=require('./Router/CourseRouter')
const InstructorRouter=require('./Router/InstructorRouter')

require('./Config/passport')
require('./Middleware/MulterMiddleware')
const server=express()

server.use(cors())
server.use(bodyparser.json())
server.use(passport.initialize())
server.use(express.urlencoded({ extended: true }));

server.use('/api/courses',CourseRouter)
server.use('/Api/Auth',AuthRouter)
server.use('/api/jobs',JobRouter)
server.use('/api/user',UserRouter)
server.use('/api/admin',AdminRouter)
server.use('/api/instructor',InstructorRouter)

server.use(errormiddleware)

const connectdb=require('./utils/db')
const PORT=process.env.PORT||5000

 
 date=new Date()
 console.log(date.toDateString());
 
 
connectdb().then(()=>{
    server.listen(PORT,()=>{
        console.log('server started');
        
    })
})