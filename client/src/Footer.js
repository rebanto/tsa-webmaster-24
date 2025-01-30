import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light p-4 mt-auto">
      <div className="container">
        <div className="row align-self-center">
          <div className="col-md">
            <h5 className="fw-bold">The Green Platter</h5>
            <p>
            Offering a sustainable, cruelty-free dining experience in a warm and welcoming space.
            </p>
          </div>
          <div className="col-md">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-light text-decoration-none">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-light text-decoration-none">
                  Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <h5 className="fw-bold">Follow Us</h5>
            <a
              href="https://www.instagram.com/the_green_platter_restaurant/?igsh=MXc5cnR4aWg4YThoaQ%3D%3D&utm_source=qr#"
              target="_blank"
              className="text-light">
              <i className="fab fa-instagram fa-2x"></i>
              </a>
          </div>
        </div>
        <hr className="m-4" />
        <div className="text-center">
          <p>
            &copy; 2025 The Green Platter.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
