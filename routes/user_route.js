import express from "express";

import { getalluser, logine, usersignup } from "../controllers/usecontroller.js";

const userRoute = express.Router();

userRoute.get("/",getalluser);
userRoute.post("/signup",usersignup);
userRoute.post("/logine",logine);


export default userRoute;


