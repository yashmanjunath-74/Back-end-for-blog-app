import express from "express";
import mongoose from "mongoose"; // Corrected the package name from "mangoose" to "mongoose"
import blogRoute from "./routes/blog_route.js";
import userRoute from "./routes/user_route.js";

const app = express();
const port = 5000 || process.env.PORT ; // Ensure the fallback value is 5000

app.use(express.json());

// API endpoint
app.get('/api', (req, res) => {
  res.status(200).json({ message: "I am Yash running" });
});


 app.use("/blog", blogRoute);
 app.use("/user",userRoute);


// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://yash:chVgNCVNyIsKXTdB@cluster0.qopad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  // Add proper options for MongoDB connection
)
  .then(() => {
    app.listen(port, () => {
        
      console.log(`Server connected on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
