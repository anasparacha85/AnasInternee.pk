const EmployeeModal=require('../Model/AppliedEmlpoyeesModel')
const jobmodal=require('../Model/JobModal')

const InstructorModal = require('../Model/InstructorModal');
const User = require('../Model/UserModal');
const  transporter  = require('../Middleware/transporter');

const ViewJobApplications=async(req,res)=>{
    try {
        const FindData=await EmployeeModal.find();
        if(!FindData){
return res.status(400).json({FailureMessage:"No Users Applied"})
        }
        res.status(200).json(FindData)
    } catch (error) {
        console.log("Internal Server Error jobapplictionvew",error);
        res.status(500).json({FailureMessage:"Internal Server Error " ,error})
        
        
    }

}

const deletejob=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletedjob=await jobmodal.deleteOne({_id:id})
        if(!deletedjob){
return res.status(400).json({FailureMessage:"Job not Deleted"})
        }
        res.status(200).json({SuccessMessage:'Job Deleted Successfully'})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({FailureMessage:"Internal Server Error"})
    }
}
const AppliedInstructors=async(req,res)=>{
    try {
        const finddta=await InstructorModal.find();
        if(!finddta){
            return res.status(400).json({FailureMessage:"No Instructors Application Available"})

        }
        res.status(200).json(finddta)
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({FailureMessage:"Internal Server Error"})
        
    }
}

const alljobs=async(req,res)=>{
    try {
        const jobsdta=await jobmodal.find()
        if(!jobsdta){
            return re.status(400).json({FailureMessage:"No Jobs Found"})
        }
        console.log(jobsdta);
        
        res.status(200).json(jobsdta)
    } catch (error) {
        console.log(error);
        
        res.status(500).json({FailureMessage:"Internal Server Error"})
        
    }
}

const makeInstructor=async(req,res)=>{
    try {
        const email=req.params.email;
        console.log(email);
        const finduser=await User.findOne({email:email})
        if(finduser.Instructor && finduser.InstructorStatus=='active'){
         return res.status(400).json({FailureMessage:'The User is Already a Instructor'})
        }
        const updateuser=await User.updateOne({email:email},{$set:{Instructor:true,InstructorStatus:'active'}})
       
        const findupdateduser=await User.findOne({email:email})
        
        if(!findupdateduser){
            return res.status(401).json({FailureMessage:"No user found"})
        }
        const updateInstructor=await InstructorModal.updateOne({email:findupdateduser.email},{$set:{status:'active'}})
        if(!updateuser || !updateInstructor){
            return res.status(401).json({FailureMessage:"Instructor status not updated"})
        }
          const info=await transporter.sendMail({
                    from:"'AnasInternee.pk' <amiranas761@gmail.com>",
                    to:email,
                    subject:`Instructor Application Accepted`,
                    html:`<p>Dear ${findupdateduser.name}, <br>We hope you are doing well. We are pleased to inform you that  We have Accepted Your Application and now Your Are The instructor of AnasInternee.pk You Can visit the Website to Upload Courses</p>`
                    
                  })
                  if(info.messageId){
        const findinstructor=await InstructorModal.find();
        res.status(200).json({SuccessMessage:"Instructor status updated successfully",findinstructor})
                  }

    } catch (error) {
        console.log(error);
        
        res.status(500).json({FailureMessage:"Internal Server Error"})
        
    }

}

const removeinstructor=async(req,res)=>{
    try {
        const email=req.params.email;
        console.log(email);
        const finduser=await User.findOne({email:email})
        if(finduser.Instructor && finduser.InstructorStatus=='pending'){
            return res.status(400).json({FailureMessage:'The User is not a Instructor'})

        }
        const updateuser=await User.updateOne({email:email},{$set:{Instructor:false,InstructorStatus:'pending'}})
        
        const findupdateduser=await User.findOne({email:email})
        
        if(!findupdateduser){
            return res.status(401).json({FailureMessage:"No user found"})
        }
        const updateInstructor=await InstructorModal.updateOne({email:findupdateduser.email},{$set:{status:'pending'}})
        if(!updateuser || !updateInstructor){
            return res.status(401).json({FailureMessage:"Instructor status not updated"})
        }
        const findinstructor=await InstructorModal.find();
        res.status(200).json({SuccessMessage:"Instructor status updated successfully",findinstructor})

    } catch (error) {
        console.log(error);
        
        res.status(500).json({FailureMessage:"Internal Server Error"})
        
    }
}
module.exports={ViewJobApplications,deletejob,AppliedInstructors,alljobs,makeInstructor,removeinstructor}