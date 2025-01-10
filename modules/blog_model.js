
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const blogSchema= new Schema({
    titel:{
        type:String,
        required: true,
    },
    descreption:{
        type: String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    dateANdTime:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"Blog",
        required:true,
    }
}) 

export default mongoose.model("Blog",blogSchema);