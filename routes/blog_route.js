import express from "express";
import { addblog, 
        blog,
        deleteBlog,
         getBlogbyID,  
         updateblog } from "../controllers/blog_controller.js";

const blogRoute = express.Router();

blogRoute.get("/allblog",blog);
blogRoute.post("/addblog",addblog);
blogRoute.get("/:id",getBlogbyID);
blogRoute.put("/update/:id",updateblog);
blogRoute.delete("/delete/:id",deleteBlog);


export default blogRoute;
