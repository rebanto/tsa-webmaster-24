import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import AdminPage from "./pages/AdminPage";
import Reviews from "./pages/Reviews";
import References from "./pages/References";
import Sources from "./pages/Sources";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const location = useLocation();
  const showFooter = ["/", "/about", "/menu"].includes(location.pathname);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="logo">
          <img src="images/web_logo.png" alt="Logo" className="img-fluid" style={{ height: "50px" }} />
          <span className="text-light">The Green Platter</span>
        </div>

        {isMobile && (
          <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        )}

        <div className={`links ${isMobile ? (menuOpen ? "open" : "closed") : ""}`}>
          <ul className="navbar-nav d-flex flex-column flex-lg-row gap-4">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/order" onClick={() => setMenuOpen(false)}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/sources" onClick={() => setMenuOpen(false)}>Sources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/references" onClick={() => setMenuOpen(false)}>References</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;