import { useEffect, useState } from "react";
import API from "../services/api";

export default function Skills() {
  const [techSkills, setTechSkills] = useState([]);
  const [coreSkills, setCoreSkills] = useState([]);

  useEffect(() => {
    fetchTechSkills();
    fetchCoreSkills();
  }, []);

  const fetchTechSkills = async () => {
    const res = await API.get("/tech-skills");
    setTechSkills(res.data);
  };

  const fetchCoreSkills = async () => {
    const res = await API.get("/core-skills");
    setCoreSkills(res.data);
  };

  return (
    <div className="container mt-5 mb-5">
      {/* PAGE HEADING */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Skills</h1>
        <p className="text-muted">
          A snapshot of my technical expertise and core engineering knowledge
        </p>
      </div>

      <div className="row g-4">
        {/* TECH SKILLS CARD */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 h-100 border-0">
            <h3 className="mb-3">💻 Technical Skills</h3>
            <p className="text-muted mb-4">
              Technologies I use for full-stack development
            </p>

            <div className="d-flex flex-wrap gap-3">
              {techSkills.length === 0 && (
                <span className="text-muted">No technical skills added</span>
              )}

              {techSkills.map((skill) => (
                <span
                  key={skill._id}
                  className="badge rounded-pill bg-dark px-4 py-2 fs-6"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CORE SKILLS CARD */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 h-100 border-0">
            <h3 className="mb-3">📡 Core Skills (E&TC)</h3>
            <p className="text-muted mb-4">
              Core electronics and communication engineering concepts
            </p>

            <div className="d-flex flex-wrap gap-3">
              {coreSkills.length === 0 && (
                <span className="text-muted">No core skills added</span>
              )}

              {coreSkills.map((skill) => (
                <span
                  key={skill._id}
                  className="badge rounded-pill border text-dark px-4 py-2 fs-6"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
