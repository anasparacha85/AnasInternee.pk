const User=require('../Model/UserModal')
require('dotenv').config()
const passport=require('passport')
const UserRegister=async (req,res)=>{
    try{
    const {name,email,password,ConfirmPassword}=req.body;
    const finduser=await User.findOne({email});
    console.log(finduser);
    
    if(finduser){
        return res.status(401).json({FailureMessage:'User Already Exists'})
    }
    if(password!=ConfirmPassword){
        return res.status(401).json({FailureMessage:'Please ReWrite the Confrim password'})
    }
    const data=await User.create({name,email,password,ConfirmPassword})
    res.status(200).json({SuccessMessage:'User Registered Syccessfully',token:await data.generateToken()})  
    }
    catch(error){
        console.log('internal server error',error);
        
res.status(500).json({FailureMessage:'Internal server error'})
    }
}
const AdminRegister=async (req,res)=>{
    try {
        const {name,email,password,ConfirmPassword,AdminKey}=req.body;
        console.log(process.env.ADMIN_SECRET_KEY);
        const user=await User.findOne({email:email})
        
        if(user){
            return res.status(401).json({FailureMessage:'User Already Registered!'})
        }
        if(password!=ConfirmPassword){
            return res.status(401).json({FailureMessage:'Please Rewrite The Same Password!'})
        }
       if(AdminKey!=process.env.ADMIN_SECRET_KEY){
        return res.status(403).json({FailureMessage:"Not Applicable Admin Key..You Can't Register as an Admin!"})
       }
       const resgiter=await User.create({name,email,password,ConfirmPassword,role:'Admin'})
       res.status(200).json({SuccessMessage:'You have Registered as an Admin Successfully!',token:await resgiter.generateToken()})
        
    } catch (error) {
        res.status(500).json({FailureMessage:'Internal Server error from AdminSignup '})
        console.log("Admin sign up error",error);
        
        
    }
}

const Login=async (req,res,next)=>{
    passport.authenticate('local',{session:false},async(err,user,info)=>{
        if(err||!user){
            console.log();
            
            return res.status(400).json({FailureMessage:info.message || 'Login Failed'});
        }

        if(user.role=='Admin'){
            res.status(200).json({SuccessMessage:'Login Successfull',token:await user.generateToken(),AdminKey:process.env.ADMIN_SECRET_KEY})
        }
        if(user.role=='User'){
            res.status(200).json({SuccessMessage:'Login Successfull',token:await user.generateToken()})

        }
    })(req,res,next)

  
}

const GoogleLogin=async(req,res)=>{
    const token=await req.user.generateToken()
   const SuccessMessage='Login Successfull'
    res.redirect(`http://localhost:5173/google-auth-success?token=${token}&SuccessMessage=${SuccessMessage}`)

    
}


const sendoptp = async (req, res) => {
    try {
        const otp = Math.floor(10000 + Math.random() * 90000); // Generate OTP
        console.log('Generated OTP:', otp);

        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Generate a temporary token valid for OTP verification
        const token = jwt.sign({ id: user._id, email: user.email,otp:optp }, "TEMP_SECRET", { expiresIn: "15m" });

        // Send email
        const info = await transporter.sendMail({
            from: '"NodeMailer" <amiranas761@gmail.com>', // Sender info
            to: email,                                    // Recipient email
            subject: 'Password Reset Code',
            text: `Your OTP is: ${otp}`,
            html: `<p>Hi ${user.name},</p><p>Your OTP for password reset is: <strong>${otp}</strong></p>`,
        });

        console.log('Email sent:', info.messageId);

        if (info.messageId) {
            // Save OTP in the database
            await User.updateOne({ email }, { $set: { otp } });

            // Send response with token
            res.status(200).json({
                message: 'Password reset email sent',
                token, // Include token in response
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred', error });
    }
};

const verifyotp = async (req, res) => {
    try {
        const { otp } = req.body;
        const decodedtoken = req.token;

        // Validate OTP
        const user = await register.findOne({ email: decodedtoken.email, optp: parseInt(otp) });
        if (!user) {
            return res.status(404).json({ msg: "Invalid OTP" });
        }

        // Clear OTP after successful verification
        await register.updateOne({ email: decodedtoken.email }, { $unset: { optp: "" } });

        res.status(200).json({ msg: "OTP matched" });
    } catch (error) {
        res.status(500).json({ msg: "Error verifying OTP", error });
    }
};

const updatepassword = async (req, res) => {
    try {
        const { password } = req.body;
        const decodedtoken = req.token;

        // Ensure OTP is cleared before updating password
        const user = await User.findOne({ email: decodedtoken.email });
        if (!user || user.optp) {
            return res.status(401).json({ msg: "OTP verification required before resetting password" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password
        await User.updateOne({ email: decodedtoken.email }, { $set: { password: hashedPassword } });

        res.status(200).json({ msg: "Password has been updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error updating password", error });
    }
};


module.exports={UserRegister,AdminRegister,Login,GoogleLogin}