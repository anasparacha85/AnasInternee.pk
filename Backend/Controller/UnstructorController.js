const Instructor=require('../Model/InstructorModal')
const User=require('../Model/UserModal')
const BecomeInsrtuctor=async(req,res)=>{
    try {
       const {name,email,address,phone,message}=req.body;
       console.log(req.file);
       
       console.log(name," ",email," ",address," ",phone," ",message);
       const finddata=await Instructor.findOne({email:email})
       if(finddata){
        return res.status(200).json({FailureMessage:"You have Already Applied to become a instructor"})
       }
       const savedata=await Instructor.create({name,email,address,phone,message,document:req.file.path,status:'pending'})

       const userdata=await User.updateOne({email:savedata.email},{$set:{InstructorStatus:"pending"}})
       res.status(200).json({SuccessMessage:"Application Delivered SuccessFully"})
       
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({FailureMessage:"Internal server error"})
        
    }
}

const getAppliedInstructors=async(req,res)=>{
    try {
        const finddata=await Instructor.find({email:req.user.email});
        if(!finddata){
            return res.status(200).json({FailureMessage:"No applications there"})
        }
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error);
        res.status(500).json({FailureMessage:"Internal server error"})
        
        
    }
}

module.exports={BecomeInsrtuctor,getAppliedInstructors}
