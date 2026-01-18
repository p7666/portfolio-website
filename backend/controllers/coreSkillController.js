import CoreSkill from "../models/CoreSkill.js";

/* GET all core skills */
export const getCoreSkills = async (req, res) => {
  try {
    const skills = await CoreSkill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* CREATE core skill */
export const createCoreSkill = async (req, res) => {
  try {
    const { name, level } = req.body;

    if (!name || !level) {
      return res.status(400).json({ message: "All fields required" });
    }

    const skill = await CoreSkill.create({ name, level });
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE core skill */
export const updateCoreSkill = async (req, res) => {
  try {
    const skill = await CoreSkill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE core skill */
export const deleteCoreSkill = async (req, res) => {
  try {
    await CoreSkill.findByIdAndDelete(req.params.id);
    res.json({ message: "Core skill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
