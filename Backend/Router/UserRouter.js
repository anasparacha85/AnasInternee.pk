const express=require('express');
const passport=require('passport')
const Router=express.Router()
const usercontroller=require('../Controller/UserController')
const upload=require('../Middleware/MulterMiddleware')
Router.route('/userprofile').get(passport.authenticate('jwt',{session:false}),usercontroller.getUserProfile)
Router.route('/UpdateUserProfile').post(passport.authenticate('jwt',{session:false}),usercontroller.updateUserProfile)
Router.route('/UpdateUserPassword').post(passport.authenticate('jwt',{session:false}),usercontroller.UpdateUserpassword)
Router.route('/UploadProfilePicture').post(passport.authenticate('jwt',{session:false}),upload.single('image'),usercontroller.UpdateProfilePicture)

module.exports=Router