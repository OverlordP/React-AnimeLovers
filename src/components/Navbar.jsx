import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid align-bottom">
          <NavLink to="/">
            <h2
              className="text-bottom"
              style={{ fontFamily: '"Bebas Neue", cursive' }}
            >
              ANIME LOVERS
            </h2>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarColor01"
          >
            <div className="px-1">
              <a
                className="btn btn-warning"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Login
              </a>
            </div>

            <div className="px-1">
              <a
                className="btn btn-secondary"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
