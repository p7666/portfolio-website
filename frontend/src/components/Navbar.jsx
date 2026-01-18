import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isAdmin = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* BRAND */}
        <Link className="navbar-brand fw-bold" to="/">
          My Portfolio
        </Link>

        {/* TOGGLER (MOBILE) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE CONTENT */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            {isAdmin && (
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* RIGHT SIDE BUTTON */}
          {!isAdmin ? (
            <Link className="btn btn-outline-light" to="/admin-login">
              Admin Login
            </Link>
          ) : (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
