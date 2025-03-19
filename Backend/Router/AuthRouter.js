const express=require('express')
const Router=express.Router()
const AuthController=require('../Controller/AuthController')
const validate=require('../Middleware/ValidatorMiddleware')
const {loginvalidate,signupvalidate}=require('../Validation/Validator')

const passport=require('passport')
require('../Config/passport')
Router.route('/register').post(validate(signupvalidate),AuthController.UserRegister)
Router.route('/Admin/Register').post(validate(signupvalidate),AuthController.AdminRegister)
Router.route('/Login').post(validate(loginvalidate),AuthController.Login)
Router.route('/google').get(passport.authenticate("google",{scope:["profile","email"]}))
Router.route('/google/callback').get(passport.authenticate("google",{session:false}),AuthController.GoogleLogin)

module.exports=Router