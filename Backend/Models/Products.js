import mongoose from "mongoose";
const Products = new mongoose.Schema({
    Name:{
        type:String,
        requried:true
    },
    Price:{
        type:String,
        requried:true
    },
    Image:{
        type:String,
        requried:false
    },
    Category:{
        type:String,
        requried:true
    },
    Instock:{
        type:String,
        requried:true
    },
    
},{timestamps:true})
export default mongoose.model('products',Products);