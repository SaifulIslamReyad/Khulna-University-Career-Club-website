  import React from "react";
  import "bootstrap/dist/css/bootstrap.min.css";

  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="src/assets/images/logo.jpg"
              alt="KU Career Club Logo"
              className="me-2" 
              style={{ width: "50px" }} 
            />
            <div>
              <div className="h5 mb-0">Khulna University Career Club</div>
              <small className="text-muted">Unveil Your Prospects</small>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="events.html">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gallery.html">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="segments.html">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact and FAQ
                </a>
              </li>
            </ul>
            <div className="d-flex ms-3 flex-nowrap">
              <a
                href="join.html"
                className="btn btn-outline-light me-2"
                style={{ backgroundColor: '#105369', color: '#ffffff', whiteSpace: 'nowrap' }}
              >
                Join Us
              </a>
              <a
                href="login.html"
                className="btn btn-outline-light"
                style={{ backgroundColor: '#105369', color: '#ffffff', whiteSpace: 'nowrap' }}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
