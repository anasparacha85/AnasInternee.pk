const {z}=require('zod')
const loginvalidate=z.object({
    email:z.string({required_error:"Email is Required"}).trim().email({message:'invalid Email Address'}).min(10,{message:'Email should be atleast 10 character'}).max(40,{message:'Email should be not more than 40 characters long'}),
    password:z.string({required_error:'password is required'}).trim().min(7,{message:'password should be atleast 7 characters long '}).max(55,{message:'password should not exceed 55 characters'})
})

const signupvalidate=loginvalidate.extend({
    name:z.string({required_error:'name is required'}).trim().min(3,{message:'name should be atleast 3 characters long '}).max(155,{message:'name should not exceed 55 characters'}),
    ConfirmPassword:z.string({required_error:'password is required'}).trim().min(7,{message:'password should be atleast 7 characters long '}).max(55,{message:'password should not exceed 55 characters'})
})

module.exports={loginvalidate,signupvalidate}