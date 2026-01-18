import mongoose from "mongoose";

const techSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      default: "Intermediate",
    },
  },
  { timestamps: true }
);

export default mongoose.model("TechSkill", techSkillSchema);
