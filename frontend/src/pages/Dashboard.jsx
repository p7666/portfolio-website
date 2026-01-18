import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>

      <p className="text-muted mb-4">
        Manage your skills and projects from here. Only admins can access this
        panel.
      </p>

      <div className="row">
        {/* Tech Skills Card */}
        <div className="col-md-4 mb-3">
          <Link to="/dashboard/tech-skills" className="text-decoration-none">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Tech Skills</h5>
                <p className="card-text text-muted">
                  Add, edit, or delete your technical skills.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Core Skills Card */}
        <div className="col-md-4 mb-3">
          <Link to="/dashboard/core-skills" className="text-decoration-none">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Core Skills (E&TC)</h5>
                <p className="card-text text-muted">
                  Manage your electronics & communication skills.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Projects Card (Future Ready) */}
        <div className="col-md-4 mb-3">
          <Link to="/projects" className="text-decoration-none">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Projects</h5>
                <p className="card-text text-muted">
                  View and manage your portfolio projects.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
