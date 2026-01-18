import mongoose from "mongoose";

const coreSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    category: {
      type: String,
      default: "E&TC",
    },
  },
  { timestamps: true }
);

export default mongoose.model("CoreSkill", coreSkillSchema);
