import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import coreSkillRoutes from "./routes/coreSkillRoutes.js";
import techSkillRoutes from "./routes/techSkillRoutes.js";
import coreProjectRoutes from "./routes/coreProjectRoutes.js";
import techProjectRoutes from "./routes/techProjectRoutes.js";


dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/core-skills", coreSkillRoutes);
app.use("/api/tech-skills", techSkillRoutes);
app.use("/api/core-projects", coreProjectRoutes);
app.use("/api/tech-projects", techProjectRoutes);
app.use("/api/tech-skills", techSkillRoutes);
app.use("/api/core-skills", coreSkillRoutes);
app.use("/api/tech-projects", techProjectRoutes);




app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
