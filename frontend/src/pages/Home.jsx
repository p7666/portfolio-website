import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-5 mb-5">
      {/* HERO SECTION */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold display-4">
            Hi, I’m <span className="text-primary">Priyanka</span> 👋
          </h1>

          <h4 className="mt-3 text-muted">
            E&TC Engineer | MERN Stack Developer
          </h4>

          <p className="mt-4">
            I am an Electronics & Telecommunication Engineering student
            with a strong interest in full-stack web development.
            I enjoy building scalable, real-world applications using
            modern technologies.
          </p>

          {/* SKILL BADGES */}
          <div className="mb-4">
            <span className="badge bg-dark me-2">React</span>
            <span className="badge bg-dark me-2">Node.js</span>
            <span className="badge bg-dark me-2">MongoDB</span>
            <span className="badge bg-dark me-2">Express</span>
            <span className="badge bg-dark me-2">JavaScript</span>
          </div>

          {/* ✅ CTA BUTTONS (FIXED FOR HashRouter) */}
          <Link to="/projects" className="btn btn-dark btn-lg me-2">
            View Projects
          </Link>

          <Link to="/contact" className="btn btn-outline-dark btn-lg">
            Contact Me
          </Link>
        </div>

        {/* IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
            alt="Developer"
            className="img-fluid"
            style={{ maxWidth: "75%" }}
          />
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="container mt-5 mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Education</h2>
          <p className="text-muted">
            My academic background and qualifications
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm border-0">
              <h5 className="fw-bold mb-1">
                Bachelor of Engineering (B.E.)
              </h5>

              <p className="mb-1">
                <strong>Branch:</strong> Electronics & Telecommunication Engineering
              </p>

              <p className="mb-1">
                <strong>College:</strong> Zeal College of Engineering, Pune
              </p>

              <p className="mb-1">
                <strong>University:</strong> Savitribai Phule Pune University (SPPU)
              </p>

              <p className="mb-0 text-muted">
                <strong>Graduation Year:</strong> 2026 (Pursuing)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h2 className="fw-bold text-primary">10+</h2>
            <p className="mb-0">Projects Built</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h2 className="fw-bold text-primary">MERN</h2>
            <p className="mb-0">Full Stack Focus</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h2 className="fw-bold text-primary">Final Year</h2>
            <p className="mb-0">E&TC Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}
