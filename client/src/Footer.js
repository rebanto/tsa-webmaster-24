import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">The Green Platter</h5>
            <p>
              Bringing the finest plant-based meals to your table. Join us in
              promoting sustainable and healthy living!
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
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
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> 123 Green Street,
              Plantville
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> info@greenplatter.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> +1 (555) 123-4567
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; 2025 The Green Platter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
