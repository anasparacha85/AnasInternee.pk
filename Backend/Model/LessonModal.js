const mongoose=require('mongoose')
const LessonSchema=new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, 
  title: { type: String, required: true },
  videoUrl: { type: String, required: true }, 
 },{timestamps:true})
  // Video Hosting Link (Cloudinary, AWS, etc.)

  const LessonModal=new mongoose.model('Lesson',LessonSchema)

  module.exports=LessonModal

  