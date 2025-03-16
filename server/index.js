import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root Route for Testing
app.get("/", (req, res) => {
    res.send("Server is running! 🚀 Use /api for API requests.");
});

// API Routes
app.use("/api", route);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(URL)
    .then(() => console.log("DB connected successfully"))
    .catch(error => console.log("MongoDB connection error:", error));
