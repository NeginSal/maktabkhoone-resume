import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";
import './SkillSection.css' 

 

 
class SkillSection extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
    render() { 
        return (
          <div>
            <Fullpage className="third" background={this.props.background}>
      <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {
            data.sections[1].items.map(eachskill => {
              return(
                <SkillCard skill ={eachskill}/>
              );
            })
          }
        </div>
      </Fullpage>
      </div>
        );
    }
}
export default SkillSection;