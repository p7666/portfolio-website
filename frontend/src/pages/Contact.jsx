export default function Contact() {
  return (
    <div className="container mt-5 mb-5">
      {/* PAGE HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="text-muted">
          Let’s connect and build something meaningful together
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* LEFT INFO SECTION */}
        <div className="col-lg-5">
          <div className="card h-100 p-4 shadow-sm border-0">
            <h4 className="mb-3">📍 Get in Touch</h4>

            <p className="text-muted">
              I’m open to internships, full-time roles, freelance work, and
              exciting project collaborations.
            </p>

            <hr />

            <div className="mb-3">
              <strong>Email</strong>
              <p className="mb-1">
                <a
                  href="mailto:priyankasonawane2064@gmail.com"
                  className="text-decoration-none text-primary"
                >
                  priyankasonawane2064@gmail.com
                </a>
              </p>
            </div>

            <div className="mb-3">
              <strong>Phone</strong>
              <p className="mb-1">
                <a
                  href="tel:+917666101428"
                  className="text-decoration-none text-primary"
                >
                  +91 76661 01428
                </a>
              </p>
            </div>

            <div>
              <strong>Location</strong>
              <p className="mb-0 text-muted">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONNECT SECTION */}
        <div className="col-lg-7">
          <div className="card h-100 p-5 shadow-sm border-0">
            <h4 className="mb-3">🤝 Connect With Me</h4>

            <p className="text-muted mb-4">
              You can reach out through any of the platforms below.
            </p>

            <div className="d-grid gap-3">
              <a
                href="mailto:priyankasonawane2064@gmail.com"
                className="btn btn-dark btn-lg"
              >
                📧 Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/priyanka-sonawane-35a71b257"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                🔗 LinkedIn Profile
              </a>

              <a
                href="https://github.com/p7666"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-lg"
              >
                💻 GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
