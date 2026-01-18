import TechSkill from "../models/TechSkill.js";

/**
 * @desc    Get all tech skills
 * @route   GET /api/tech-skills
 * @access  Public
 */
export const getTechSkills = async (req, res) => {
  try {
    const skills = await TechSkill.find({ category: "tech" }).sort({
      createdAt: -1,
    });

    res.status(200).json(skills);
  } catch (error) {
    console.error("Get Tech Skills Error:", error);
    res.status(500).json({ message: "Failed to fetch tech skills" });
  }
};

/**
 * @desc    Create a new tech skill
 * @route   POST /api/tech-skills
 * @access  Admin
 */
export const createTechSkill = async (req, res) => {
  try {
    const { name, level } = req.body;

    if (!name || !level) {
      return res.status(400).json({ message: "Name and level are required" });
    }

    const skill = await TechSkill.create({
      name,
      level,
      category: "tech", // ✅ auto-set
    });

    res.status(201).json(skill);
  } catch (error) {
    console.error("Create Tech Skill Error:", error);
    res.status(500).json({ message: error.message });
  }
};
