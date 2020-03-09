import React, { Component } from "react";
import { Link , Element} from 'react-scroll'
import "../components/Navigation";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar" style={{ background: "transparent" }}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
         <a href="">about</a>
        </Link>

        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
        <a href="">Skills</a>
        </Link>
      </div>
    );
  }
}

export default Navigation;