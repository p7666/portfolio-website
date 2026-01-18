import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// PUBLIC PAGES
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

// ADMIN PAGES
import Dashboard from "./pages/Dashboard";
import TechSkills from "./pages/TechSkills";
import CoreSkills from "./pages/CoreSkills";
import AdminMessages from "./pages/AdminMessages";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ minHeight: "80vh" }}>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* ADMIN ROUTES */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/tech-skills"
            element={
              <ProtectedRoute>
                <TechSkills />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/core-skills"
            element={
              <ProtectedRoute>
                <CoreSkills />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/messages"
            element={
              <ProtectedRoute>
                <AdminMessages />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
