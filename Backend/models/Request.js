const mongoose = require("mongoose");


const RequestSchema =mongoose.Schema({
    to:String,
    from: String,
    status:String,
    mode:String,
    ambiance:String,
    course:String,
});
module.exports =mongoose.model("Request",RequestSchema);