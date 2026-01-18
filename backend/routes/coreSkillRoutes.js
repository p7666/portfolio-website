import express from "express";
import {
  getCoreSkills,
  createCoreSkill,
  updateCoreSkill,
  deleteCoreSkill,
} from "../controllers/coreSkillController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCoreSkills);
router.post("/", protectAdmin, createCoreSkill);
router.put("/:id", protectAdmin, updateCoreSkill);
router.delete("/:id", protectAdmin, deleteCoreSkill);

export default router;
