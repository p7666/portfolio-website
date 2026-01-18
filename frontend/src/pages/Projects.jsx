import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [editId, setEditId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  const isAdmin = !!localStorage.getItem("token");

  const fetchProjects = async () => {
    const res = await API.get("/tech-projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, description, githubLink, liveLink };

    if (editId) {
      await API.put(`/tech-projects/${editId}`, data);
    } else {
      await API.post("/tech-projects", data);
    }

    setTitle("");
    setDescription("");
    setGithubLink("");
    setLiveLink("");
    setEditId(null);
    setConfirmId(null);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setEditId(project._id);
    setTitle(project.title);
    setDescription(project.description);
    setGithubLink(project.githubLink);
    setLiveLink(project.liveLink || "");
  };

  const confirmDelete = async (id) => {
    await API.delete(`/tech-projects/${id}`);
    setConfirmId(null);
    fetchProjects();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Projects</h2>

      {/* ADMIN FORM */}
      {isAdmin && (
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Project Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control mb-2"
            placeholder="Project Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="GitHub Repository Link"
            value={githubLink}
            required
            onChange={(e) => setGithubLink(e.target.value)}
          />

          <input
            className="form-control mb-2"
            placeholder="Live Project Link (Optional)"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
          />

          <button className="btn btn-dark">
            {editId ? "Update Project" : "Add Project"}
          </button>
        </form>
      )}

      {/* PROJECT LIST */}
      {projects.map((project) => (
        <div key={project._id} className="card p-4 mb-3 shadow-sm">
          <h5>{project.title}</h5>
          <p className="text-muted">{project.description}</p>

          <div className="mb-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="me-3 text-primary fw-semibold text-decoration-none"
            >
              🔗 GitHub Repository
            </a>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary fw-semibold text-decoration-none"
              >
                🌐 Live Project
              </a>
            )}
          </div>

          {isAdmin && (
            <div>
              {confirmId === project._id ? (
                <>
                  <span className="text-danger me-2">Delete?</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => confirmDelete(project._id)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() => setConfirmId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setConfirmId(project._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
