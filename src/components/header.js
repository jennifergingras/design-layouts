import React from 'react';
import "./header.css";

const Header = (props) => {
  return (
    <div class="wrapper">
      <div class="four-column-container">
        <div class="title">
          <h1>Coding</h1>
          <h1>Design</h1>
          <h1>History</h1>
        </div>
        <div class="sub-heading">
          <h3>20th century design</h3>
          <hr></hr>
          <h3>21st century technology</h3>
          <hr></hr>
          <h5>An experimentation with grid systems and layouts.</h5>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Header;

