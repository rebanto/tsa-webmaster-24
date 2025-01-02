import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import AdminPage from "./pages/AdminPage";
import Reviews from "./pages/Reviews";
import References from "./pages/References";
import Sources from "./pages/Sources";
import "./index.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="images/placeholder.jpg" alt="Logo" />
          <span>Vegan Restaurant or Something</span>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/order">Order</Link>
          <div className="dropdown">
            <span className="dropdown-toggle">More</span>
            <div className="dropdown-menu">
              <Link to="/admin">Admin</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/sources">Sources</Link>
              <Link to="/references">References</Link>
            </div>
          </div>
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
    </div>
  );
}

export default App;
