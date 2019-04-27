import React, { Component } from "react";
import Jess0 from "../../../img/wrap/jess0.png";
import "./wrap.css";

class Wrap extends Component {

  // functions go here

  // display the page content
  render() {
    return (
      <div className="wrap-container">
        <div >
          <img className="main-img" src={Jess0} alt="violin player" />
          <div className="text-wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus fringilla enim ligula,
              at placerat risus porta vitae. Maecenas feugiat justo purus, et consectetur ex blandit in.
              Duis ultrices eleifend elementum.Sed quis mi in est malesuada congue.Mauris vehicula venenatis
              lectus non porttitor.Nulla orci velit, vestibulum et lorem ac, elementum fermentum nunc.Nullam nec nisl libero.
              Curabitur condimentum metus ut mi feugiat mollis.Cras sapien risus, molestie et volutpat ut, fringilla id lacus.
              Vestibulum commodo magna ut purus commodo malesuada.
              </p>
            <p>
              Vivamus pulvinar porttitor lorem.Nulla molestie varius sapien, vitae condimentum nisl maximus ullamcorper.
              Maecenas leo orci, blandit congue placerat id, blandit quis quam.Phasellus vitae ex ac erat condimentum ultrices in
              ut ante.Vivamus gravida rutrum tortor, quis tincidunt velit tristique at.Fusce dapibus erat a sodales mattis. Morbi
              dignissim urna sed pulvinar consectetur.Nullam vel quam placerat, euismod leo auctor, maximus mauris.Praesent porta massa libero,
              vel porttitor mauris tempus a.Cras et luctus dolor.Morbi ultrices, diam et molestie rhoncus, nibh eros mattis purus, vel eleifend
              lectus neque non urna.Aliquam placerat massa fringilla est hendrerit, eu volutpat eros mollis.Duis a turpis nibh.Nam tristique vitae quam a congue.
              </p>
          </div>
        </div>
      </div>
    );
  };
};

export default Wrap;