import React, { Component } from 'react';
import {Link, Element} from "react-scroll";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import './AboutSection.css' 

import DownIcon from "../components/DownIcon.js";
 

 
class AboutSection extends Component {
  state = {};
    render() { 
        return (
          <div>
            <Fullpage className="second" background={this.props.background}>
      <h3 style={{ color: this.props.color }}>{data.sections[0].title} </h3>
       <div className="paragraphs" style={{ color: this.props.color }}>
         {
           data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
            
         })}
       </div>
      </Fullpage>
      <Element name="Skills" className="element" />
        </div>
        );
    }
}
export default AboutSection;