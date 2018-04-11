import React, { Component } from 'react';
import '../.././App.css';
class SingeProject extends Component {
    render() {
        return (
            <div id="single-project" style={{visibility:"hidden"}}>
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
