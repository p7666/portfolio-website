import express from "express";
import CoreProject from "../models/CoreProject.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadImage } from "../controllers/uploadController.js";


const router = express.Router();

// PUBLIC – get all core projects
router.get("/", async (req, res) => {
  const projects = await CoreProject.find().sort({ createdAt: -1 });
  res.json(projects);
});

// ADMIN – add core project
router.post(
  "/",
  protectAdmin,
  upload.array("images", 5),
  async (req, res) => {
    try {
      const imageUrls = [];

      if (req.files) {
        for (const file of req.files) {
          const url = await uploadImage(file.buffer, "core-projects");
          imageUrls.push(url);
        }
      }

      const project = await CoreProject.create({
        ...req.body,
        images: imageUrls,
      });

      res.json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);


// ADMIN – update core project
router.put("/:id", protectAdmin, async (req, res) => {
  try {
    const updatedProject = await CoreProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Core project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ADMIN – delete core project
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const deletedProject = await CoreProject.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Core project not found" });
    }

    res.json({
      message: "Core project deleted successfully",
      deletedProject,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
