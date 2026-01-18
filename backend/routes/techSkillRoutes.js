import express from "express";
import TechSkill from "../models/TechSkill.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import { createTechSkill, getTechSkills } from "../controllers/techSkillController.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTechSkills);
router.post("/",protectAdmin, createTechSkill); // 👈 IMPORTANT

// PUBLIC – get all tech skills
router.get("/", async (req, res) => {
  const skills = await TechSkill.find().sort({ category: 1 });
  res.json(skills);
});

// ADMIN – add skill
router.post("/", protectAdmin, async (req, res) => {
  const skill = await TechSkill.create(req.body);
  res.json(skill);
});

// ADMIN – update skill
router.put("/:id", protectAdmin, async (req, res) => {
  try {
    const updatedSkill = await TechSkill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ message: "Tech skill not found" });
    }

    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ADMIN – delete skill
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const deletedSkill = await TechSkill.findByIdAndDelete(req.params.id);

    if (!deletedSkill) {
      return res.status(404).json({ message: "Tech skill not found" });
    }

    res.json({
      message: "Tech skill deleted successfully",
      deletedSkill,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
