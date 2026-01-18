import mongoose from "mongoose";

const techProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: false, // 👈 OPTIONAL
    },
  },
  { timestamps: true }
);

export default mongoose.model("TechProject", techProjectSchema);
