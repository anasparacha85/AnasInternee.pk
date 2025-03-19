const express=require('express')
const router=express.Router();
const passport=require('passport')

const InsrtuctorCOntroller=require('../Controller/UnstructorController');
const upload = require('../Middleware/MulterMiddleware');

router.route('/apply').post(passport.authenticate('jwt',{session:false}),upload.single('document'),InsrtuctorCOntroller.BecomeInsrtuctor)
router.route('/getApplies').get(passport.authenticate('jwt',{session:false}),InsrtuctorCOntroller.getAppliedInstructors)

module.exports=router;