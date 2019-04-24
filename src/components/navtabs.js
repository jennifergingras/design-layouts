import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/home"
          className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/albers"
          className={window.location.pathname === "/albers" ? "nav-link active" : "nav-link"}
        >
          Joseph Albers
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/brodovich"
          className={window.location.pathname === "/brodovich" ? "nav-link active" : "nav-link"}
        >
          Alexey Brodovich
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/miles"
          className={window.location.pathname === "/miles" ? "nav-link active" : "nav-link"}
        >
          Reid Miles
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/destijl"
          className={window.location.pathname === "/destijl" ? "nav-link active" : "nav-link"}
        >
          De Stijl
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/constructivism"
          className={window.location.pathname === "/constructivism" ? "nav-link active" : "nav-link"}
        >
          Constructivism
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/postmodern"
          className={window.location.pathname === "/postmodern" ? "nav-link active" : "nav-link"}
        >
          Postmodernism
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;