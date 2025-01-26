import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <header className="layout-header">
      <div className="logo">
        <Link to="/">
          <img src="../src/assets/logo.png" alt="logo" />
        </Link>
      </div>
      <nav className="navigation">
        <Link to="/" className="nav-button">
          Home
        </Link>{" "}
        |
        <Link to="/about" className="nav-button">
          About
        </Link>{" "}
        |{" "}
        <Link to="/education" className="nav-button">
          Education
        </Link>{" "}
        |{" "}
        <Link to="/project" className="nav-button">
          Porject
        </Link>{" "}
        |
        <Link to="/contact" className="nav-button">
          Contact Me
        </Link>
      </nav>
      <br />
      <hr />
    </header>
  );
}
