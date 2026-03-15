import React from "react";
import { FaPhone, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container  pe-0">

        <a className="navbar-brand fw-bold" href="#">
          Bricks&Keys
        </a>
        <div className="collapse navbar-collapse justify-content-center mx-auto" id="navbarMenu">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Listings</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Members</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Pages</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
            
          </ul>
        </div>

        <div className="d-flex align-items-center gap-3 ms-auto ">

          <span className="d-flex align-items-center gap-2">
            <FaPhone />
           +923286561587
          </span>

          <FaUser className=" User-icon" />

          <button className="btn btn-outline-dark rounded-pill px-4">
            Add Property
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
