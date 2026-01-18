import express from "express";
import TechProject from "../models/TechProject.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadImage } from "../controllers/uploadController.js";import {
  getTechProjects,
  createTechProject,
} from "../controllers/techProjectController.js";


const router = express.Router();


router.get("/", getTechProjects);
router.post("/", protectAdmin, createTechProject);

// PUBLIC – get all tech projects
router.get("/", async (req, res) => {
  const projects = await TechProject.find().sort({ createdAt: -1 });
  res.json(projects);
});

// ADMIN – add tech project
router.post(
  "/",
  protectAdmin,
  upload.array("images", 5),
  async (req, res) => {
    try {
      const imageUrls = [];

      if (req.files) {
        for (const file of req.files) {
          const url = await uploadImage(file.buffer, "tech-projects");
          imageUrls.push(url);
        }
      }

      const project = await TechProject.create({
        ...req.body,
        images: imageUrls,
      });

      res.json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);


// ADMIN – update tech project
router.put("/:id", protectAdmin, async (req, res) => {
  try {
    const updatedProject = await TechProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Tech project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// ADMIN – delete tech project
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const deletedProject = await TechProject.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Tech project not found" });
    }

    res.json({
      message: "Tech project deleted successfully",
      deletedProject,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
