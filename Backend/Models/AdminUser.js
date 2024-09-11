import mongoose from "mongoose";
const Admin = new mongoose.Schema({
    Name:{
        type:String,
        requried:true
    },
    Email:{
        type:String,
        requried:true
    },
    Password:{
        type:String,
        requried:true
    },
},{timestamps:true})
export default mongoose.model('Admin',Admin);