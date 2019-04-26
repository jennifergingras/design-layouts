import React from 'react';
import "./header.css";
import "../App.css";

const Header = (props) => {
  return (
    <div className="wrapper">
      <div className="four-column-container">
        <div className="title">
          <h1>DESIGN LAYOUTS</h1>
        </div>
        <div className="sub-heading">
          <h5>An experimentation with grid systems and layouts in CSS Grid.</h5>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Header;

