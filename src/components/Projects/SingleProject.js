import React, { Component } from 'react';
import '../.././App.css';
class SingeProject extends Component {
    render() {
        return (
            <div id="single-project" style={{visibility:"hidden"}}>
                <h1 id="project-name">{this.props.name}</h1>
                <h2 id="project-role">{this.props.role}</h2>
                <img id="project-preview" src={this.props.preview} alt=""/>
                <ul className="project-skills-wrapper">
                    {this.props.skills.split(",").map((skill)=>{
                        return(<li className="project-skill">{skill}</li>)
                    })}
                </ul>
                <p id="project-desc">{this.props.desc}</p>
            </div>
        );
    }
}

export default SingeProject;
