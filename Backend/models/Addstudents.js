const mongoose = require("mongoose");
 //schema

 const AddstudentsSchema = mongoose.connect({
    name:String,
    email:String,
    password:String,
    grade:String,
    areaofStudy:String,
    skills:Array,
    language:String,
    qualification:String,
    specialization:String,
    teachingExp:String,
    type:String,
    addDate:String,
    timing:Array,
    videoLink:String,
    profilePhoto:String,


});

 module.exports = mongoose.model("AddStudents",AddstudentsSchema);