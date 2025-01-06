const mongoose = require("mongoose");
 //schema

 const AddcourseSchema = mongoose.Schema({
    coursename:String,
 });

 module.exports = mongoose.model("Addcourse",AddcourseSchema);