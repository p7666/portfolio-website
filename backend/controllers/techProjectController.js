import TechProject from "../models/TechProject.js";

export const getTechProjects = async (req, res) => {
  const projects = await TechProject.find().sort({ createdAt: -1 });
  res.json(projects);
};

export const createTechProject = async (req, res) => {
  try {
    const { title, description, githubLink, liveLink } = req.body;

    const project = new TechProject({
      title,
      description,
      githubLink,
      liveLink: liveLink || "", // ✅ optional safe
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, description, githubLink, liveLink } = req.body;

    const project = new TechProject({
      title,
      description,
      githubLink,
      liveLink,
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTechProject = async (req, res) => {
  try {
    const { title, description, githubLink, liveLink } = req.body;

    const project = await TechProject.findByIdAndUpdate(
      req.params.id,
      { title, description, githubLink, liveLink },
      { new: true }
    );

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
