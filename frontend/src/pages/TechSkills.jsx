import { useEffect, useState } from "react";
import API from "../services/api";

export default function TechSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Intermediate");
  const [editId, setEditId] = useState(null);
  const [confirmId, setConfirmId] = useState(null); // 👈 NEW

  const isAdmin = !!localStorage.getItem("token");

  // Fetch skills
  const fetchSkills = async () => {
    const res = await API.get("/tech-skills");
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Add or Update skill
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await API.put(`/tech-skills/${editId}`, {
        name,
        level,
        category: "tech",
      });
    } else {
      await API.post("/tech-skills", {
        name,
        level,
        category: "tech",
      });
    }

    setName("");
    setLevel("Intermediate");
    setEditId(null);
    fetchSkills();
  };

  // Edit skill
  const handleEdit = (skill) => {
    setEditId(skill._id);
    setName(skill.name);
    setLevel(skill.level);
    setConfirmId(null); // reset delete state
  };

  // Delete skill (CONFIRMED)
  const confirmDelete = async (id) => {
    await API.delete(`/tech-skills/${id}`);
    setConfirmId(null);
    fetchSkills();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Technical Skills</h2>

      {/* ADMIN FORM */}
      {isAdmin && (
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-5 mb-2">
              <input
                className="form-control"
                placeholder="Skill name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-4 mb-2">
              <select
                className="form-select"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="col-md-3 mb-2">
              <button className="btn btn-dark w-100">
                {editId ? "Update Skill" : "Add Skill"}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* SKILLS LIST */}
      <ul className="list-group">
        {skills.map((skill) => (
          <li
            key={skill._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {skill.name}{" "}
              <span className="text-muted">({skill.level})</span>
            </span>

            {isAdmin && (
              <div>
                {confirmId === skill._id ? (
                  <>
                    <span className="text-danger me-2">
                      Delete?
                    </span>

                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => confirmDelete(skill._id)}
                    >
                      Yes
                    </button>

                    <button
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
                      onClick={() => handleEdit(skill)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => setConfirmId(skill._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {skills.length === 0 && (
        <p className="text-muted mt-3">No skills added yet.</p>
      )}
    </div>
  );
}
