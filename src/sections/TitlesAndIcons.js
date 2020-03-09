import React, { Component } from 'react';
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import './TitlesAndIcons.css' ;
import { findByLabelText } from '@testing-library/react';
import DownIcon from '../components/DownIcon';
import { Link , Element} from 'react-scroll'
import { Transform } from "stream";


class TitlesAndIcons extends Component {
  constructor(){
    super()
    this.state = {
      color:'white'
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor () {
    this.setState({
      color:this.state.color ==='white' ? 'yellow' :'white'
    });
  }
    render() { 
        return (
          <div> 
      <Fullpage className="first" background={this.props.background}>  
      <h1 className="title"
      style={{
        color:this.state.color
      }  
    }

      onMouseOver={
        this.changeColor
      }

      onMouseleave={ ()=>{
        this.changeColor();
      }}

      >{data.title} </h1>
      <div>
        <h2 style={{ color: this.props.color }}> {data.subtitle} </h2>
      </div>
      <div className="icons-wrapper">
        {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
               <SocialIcon url={data.links[key]} />
               </div>
            );
          })}
       </div>
      </Fullpage>
      <Link 
      activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      delay={0}>
       <DownIcon
       icon={data.icons.down}
       />
       </Link>
       <Element name="about" className="element"/>
        </div>

        ); 
    }
}
export default TitlesAndIcons;