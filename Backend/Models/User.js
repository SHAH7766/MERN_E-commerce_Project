import mongoose from "mongoose";
const Users = new mongoose.Schema({
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
    Address:{
        type:String,
        requried:true
    },
    Phone:{
        type:String,
        requried:true
    },
},{timestamps:true})
export default mongoose.model('Users',Users);