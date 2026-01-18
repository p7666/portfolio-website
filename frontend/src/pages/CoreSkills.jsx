import { useEffect, useState } from "react";
import API from "../services/api";

export default function CoreSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [editId, setEditId] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  const isAdmin = !!localStorage.getItem("token");

  const fetchSkills = async () => {
    const res = await API.get("/core-skills");
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, level };

    if (editId) {
      await API.put(`/core-skills/${editId}`, data);
    } else {
      await API.post("/core-skills", data);
    }

    setName("");
    setLevel("Beginner");
    setEditId(null);
    setConfirmId(null);
    fetchSkills();
  };

  const handleEdit = (skill) => {
    setEditId(skill._id);
    setName(skill.name);
    setLevel(skill.level);
    setConfirmId(null);
  };

  const confirmDelete = async (id) => {
    await API.delete(`/core-skills/${id}`);
    setConfirmId(null);
    fetchSkills();
  };

  return (
    <div className="container mt-4">
      <h2>Core Skills (E&TC)</h2>

      {isAdmin && (
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Skill name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="form-select mb-2"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button className="btn btn-success">
            {editId ? "Update Skill" : "Add Skill"}
          </button>
        </form>
      )}

      {skills.map((skill) => (
        <div key={skill._id} className="card p-3 mb-2">
          <strong>{skill.name}</strong>
          <span className="text-muted"> ({skill.level})</span>

          {isAdmin && (
            <div className="mt-2">
              {confirmId === skill._id ? (
                <>
                  <span className="text-danger me-2">Delete?</span>

                  <button
                    type="button"
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => confirmDelete(skill._id)}
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
                    type="button"
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(skill)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setConfirmId(skill._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}

      {skills.length === 0 && (
        <p className="text-muted">No core skills added yet.</p>
      )}
    </div>
  );
}
