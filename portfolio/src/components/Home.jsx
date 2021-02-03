import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Floor from '../img/floor-installation.jpg'
import Pizza from '../img/pizza.jpg'

function Home() {

    const [state, setstate] = useState([
        { img: Floor, url: "https://floorsplus.netlify.app/" },
        { img: Pizza, url: "https://jacobspizzasite.netlify.app/" }
    ])

    const PlaneTrail = () => {
        let pieces = []
        for (let i = 0; i < 5; i++) {
            pieces.push(<div className="trail" style={{ animationDelay: `${.4 * i + .3}s` }} />)
        }
        return pieces
    }

    return (
        <div className="homeContainer">
            <section className="section header">
                <h1>Jacob McFaul</h1>
                <p>Front-End Developer</p>
            </section>
            {state.map((proj) => (
                <section className="project section">
                    <img src={proj.img} alt="" />
                    <div className="projectFooter">
                        <a className="projectURL" href={proj.url}>View Site</a>
                        <div className="allProjectsContainer">
                            <Link to="/projects" className="allProjects">View Projects</Link>
                            <div className="line" />
                        </div>
                    </div>
                </section>
            ))}
            <section className="section homeAbout">
                <h3>Hey! I am Jacob, a young, driven and hardworking individual, seeking to make a career as a Front-End Developer</h3>
                <div className="aboutLink">
                    <Link to="/about">About </Link><i class="fas fa-location-arrow"></i>
                    <PlaneTrail />
                </div>
            </section>
            <section className="section homeContact">
                <h3>Need a Website?</h3>
                <Link to="/contact">Get in Contact</Link>
                <div className="info">
                    <a href="tel:1-805-390-6653">(805) 390-6653</a>
                    <a href="mailto:jacob.m.mcfaul@gmail.com">Jacob.M.McFaul@gmail.com</a>
                </div>
            </section>
        </div>
    )
}

export default Home
