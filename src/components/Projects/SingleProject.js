import React, { Component } from 'react';
import '../.././App.css';
class SingeProject extends Component {
    handleCloseClick = (e) =>{
        const x = document.getElementsByClassName("projects-item");
        x[0].classList.remove("animation-leftout");
        x[1].classList.remove("animation-rightout");
        x[2].classList.remove("animation-leftout");
        x[3].classList.remove("animation-rightout");
        x[0].classList.add("animation-leftin");
        x[1].classList.add("animation-rightin");
        x[2].classList.add("animation-leftin");
        x[3].classList.add("animation-rightin");
        document.getElementById("single-project").setAttribute("style","visibility:hidden;opacity:0;");
    }
    render() {
        return (
            <div id="single-project" style={{visibility:"hidden"}}>
                <h1 onClick={this.handleCloseClick} className="close-btn">X</h1>
                {this.props.name}
                <br />
                {this.props.role}
                <br />
                {this.props.desc}
                <br />
                {this.props.skills}
            </div>
        );
    }
}

export default SingeProject;
