import mongoose from "mongoose";

const coreProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    components: {
      type: [String],
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    images: {
      type: [String], // Cloudinary URLs later
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("CoreProject", coreProjectSchema);
