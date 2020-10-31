import React, { Component } from 'react';
import '../main.css';
import '../styles/index.css';


export default class Index extends Component {
    render() {
        return (
            <div className="lp-container">
                <div className="lp-container-header">
                    <h1>Welcome to The Toolbox</h1>
                    <div id="header-split"></div>
                    <h3>We get it! Life can be difficult sometimes. Take control today with our free tools built for hard-working people like you.</h3>
                </div>
                <div className="undraw-laptop">
                    <img src="./laptop.png"></img>
                </div>
            </div>
        )
    }
}
