import React from 'react'
// import Selfie from '../img/profilePic.jpg'
import Logo from '../img/logo.png'

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <section className="aboutText section">
                    <img src={Logo} alt="" />
                    <h1>ABOUT ME</h1>
                    <p>Motivated developer with experience creating custom websites using React/JS, HTML and CSS. Strong collaboration and leadership skills. </p>
                </section>
                <section className="aboutSkills section">
                    <h1>DEVELOPMENT SKILLS</h1>
                    <p>JavaScript
                        <i className="fas fa-dot-circle" />
                        REACT.js
                        <i className="fas fa-dot-circle" />
                        HTML
                        <i className="fas fa-dot-circle" />
                        CSS
                        <i className="fas fa-dot-circle" />
                        Node-SASS
                        <i className="fas fa-dot-circle" />
                        Node.js
                        <i className="fas fa-dot-circle" />
                        Express
                        <i className="fas fa-dot-circle" />
                        Python
                    </p>
                </section>
                <section className="about section">
                    <h1>OTHER SKILLS</h1>
                    <p>
                        Leadership
                        <i className="fas fa-dot-circle" />
                        Hard Working
                        <i className="fas fa-dot-circle" />
                        Respectful
                        <i className="fas fa-dot-circle" />
                        Considerate
                        <i className="fas fa-dot-circle" />
                        Motivated
                        <i className="fas fa-dot-circle" />
                        Problem Solving
                        {/* <i className="fas fa-dot-circle" /> */}

                    </p>
                </section>
                <section className="socials section">
                    <a href="https://github.com/McTrip777"><i className="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/McTrippin777"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/jake_mcfaul/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/jacob-mcfaul-a96b10180/"><i className="fab fa-linkedin-in"></i></a>
                </section>
            </div>
        </div>
    )
}

export default About
