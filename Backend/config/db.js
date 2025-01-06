const mongoose = require("mongoose"); //cjs

// import mongoose from "mongoose";

require("dotenv").config();

const connectDB = () =>{
    mongoose.connect(process.env.mongoURI,{
        userNewUrlParcer: true,
        userUnifiedTopology :true,

    })
    .then(()=>console.log("mongoDB connected..."))
    .catch((err)=>{
        console.error(err);
        process.exit(1);
    });
};

module.exports= connectDB;
