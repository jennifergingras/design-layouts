import React from "react";
import { Link } from "react-router-dom";
import "./navtabs.css";
import "../App.css";

function NavTabs() {
  return (
    <div className="wrapper">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tiles"
            className={window.location.pathname === "/tiles" ? "nav-link active" : "nav-link"}
          >
            Tiles
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/wrap"
            className={window.location.pathname === "/wrap" ? "nav-link active" : "nav-link"}
          >
            Wrap
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/overlay"
            className={window.location.pathname === "/overlay" ? "nav-link active" : "nav-link"}
          >
            Overlay
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/asymmetry"
            className={window.location.pathname === "/asymmetry" ? "nav-link active" : "nav-link"}
          >
            Asymmetry
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/side"
            className={window.location.pathname === "/side" ? "nav-link active" : "nav-link"}
          >
            Side
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/postmodern"
            className={window.location.pathname === "/postmodern" ? "nav-link active" : "nav-link"}
          >
            Postmodern
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;