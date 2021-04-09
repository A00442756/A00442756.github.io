import React, { Component } from 'react'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="About">
                <img className="somtoImg" src='somto.jpg' alt="Somto's picture"/>
                <h2>Hi, I am Somto</h2>
                <div className="intro"><p className="introPara">I am from Lagos, Nigeria and I like reading, playing chess and taking long walks </p> </div>
                <div className="intro"><p className="introPara">I have always been fascinated with the data and as I grew it became even more relevant. I enrolled in the MCDA programme at SMU because it perfectly combines computing as well as data analytics as required in the industry.</p> </div>
            </div >

        );
    }
}

export default About;