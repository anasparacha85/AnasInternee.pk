const express=require('express')
const multer=require('multer')
const JobController=require('../Controller/JobController')
const passport=require('passport')
const Router=express.Router()
const upload=require('../Middleware/MulterMiddleware')
const RoleAccess=require('../Middleware/RoleMiddleware')
const {ApplyEmplooyee}=require('../Controller/EmployeeController')

Router.route('/post-a-job').post(passport.authenticate('jwt',{session:false}),RoleAccess('Admin'),upload.fields([{name:"CategoryImage"},{name:"JobImage"}]),JobController.PostJob)
Router.route('/Internships').get(JobController.getJobsCategories)
Router.route('/jobsbycategories/:Category').get(JobController.getjobsbycategories)
Router.route('/jobsbyid/:id').get(passport.authenticate('jwt',{session:false}),JobController.getjobsbyid)
Router.route('/Apply').post(passport.authenticate('jwt',{session:false}),upload.single('cv'),ApplyEmplooyee)
Router.route('/findjobs').get(JobController.findjobs)

module.exports=Router