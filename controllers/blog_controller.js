import mongoose from "mongoose";
import blog_model from "../modules/blog_model.js"
import mongoose from "mongoose";

export const blog = async( req , res, next)=> {
    let allblog;
    try{
         allblog= await blog_model.find();
    }catch(err){
        console.log(`---------------------> ${err}`);
    }
    return res.status(200).json({allblog});
}
export const addblog =async( req ,res, next )=>{
    const {titel, descreption, image,dateANdTime ,user} =req.body;

    let exesUser;
    try{
        exesuser =await user_model.findById(user);
    }catch(err){
        console.log(`===========> ${err}`);
    }
    if (!exesUser) {
        return res.status(400).json({ message: "You have no account yet, please sign up." });
    }

    const blog = new blog_model({ titel,descreption,image,dateANdTime,user});
    
     try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        exesUser.blog.push(blog);
        await exesUser.save({session});
        await session.commitTransaction();
        }catch(err){
        console.log(`---------------------> ${err}`);
     }
     res.status(200).json({message:"your blog is saved"});
}
export const getBlogbyID= async(req,res,next)=>{
    const blogID =req.params.id;
    let blog;
    try{
        blog = await blog_model.findById(blogID);
    }catch(err){
        return res.status(500).json({message:`---------------------> ${err}`});
    }
    return res.status(200).json({blog});
}
export const updateblog= async(req,res,next)=>{
    const blogID =req.params.id;
    const {titel, descreption, image,dateANdTime} =req.body;
    let blog;
    try{
         await blog_model.findByIdAndUpdate(blogID,{
            titel, 
            descreption, 
            image,
            dateANdTime,
         }
        );
    }catch(err){
        return res.status(500).json({message:`---------------------> ${err}`});
    }
    return res.status(200).json({message:`blog is updated`});
}

export const deleteBlog =async (req,res,next)=>{
    const blogID =req.params.id;

    try{
        await blog_model.findByIdAndDelete(blogID);
    }catch(err){
        return res.status(500).json({message:`---------------------> ${err}`});
    }
    return res.status(200).json({message:`deleted succelfuly`});
}