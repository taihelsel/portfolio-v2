import React, { Component } from 'react';
import '../.././App.css';
class SingeProject extends Component {
    statusBanner = () =>{
        if(this.props.status !== null){
            return(<h1 className="project-status">Project is currently being built</h1>);
        }
    }
    render() {
        return (
            <div id="single-project" style={{visibility:"hidden"}}>
                <h1 id="project-name">{this.props.name}</h1>
                <h2 id="project-role">{this.props.role}</h2>
                <ul className="project-links-wrapper">
                    {this.props.links.split(",").map((link)=>{
                        let label = "";
                        if(link.indexOf("github.io")!==-1||link.indexOf("herokuapp")!==-1){
                            label="Live Site";
                        }else if(link.indexOf("trello")!==-1){
                            label="Trello";
                        }else if(link.indexOf("github.com")!==-1){
                            label="GitHub";
                        }
                        return(
                            <li className="project-link">
                                <a href={link} target="_blank">
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <img id="project-preview" src={this.props.preview} alt=""/>
                <ul className="project-skills-wrapper">
                    {this.props.skills.split(",").map((skill)=>{
                        return(<li className="project-skill">{skill}</li>)
                    })}
                </ul>
                <p id="project-desc">{this.props.desc}</p>
                {this.statusBanner()}
            </div>
        );
    }
}

export default SingeProject;
