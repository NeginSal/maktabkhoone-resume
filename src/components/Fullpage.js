import React, { Component } from 'react';
import './Fullpage.css';
 
class Fullpage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const{ children }=this.props
        return(
            <div className={`fullpage ${this.props.className || '' } `} style={{
                background:this.props.background
    
}}>
                {children}
            </div>
        );
    }
}

export default Fullpage;