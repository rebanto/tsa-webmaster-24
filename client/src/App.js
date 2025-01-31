import React from "react";
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

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg">
        <div className="logo">
          <img src="images/web_logo.png" alt="Logo" className="img-fluid" style={{ height: "50px" }} />
          <span className="text-light">The Green Platter</span>
        </div>
        <div className="links">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/order">Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/sources">Sources</Link></li>
                <li><Link className="dropdown-item" to="/references">References</Link></li>
              </ul>
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