import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Floor from '../img/floor-installation.jpg'
import Pizza from '../img/pizza.jpg'

function Home() {

    const [state, setstate] = useState([
        { img: Floor, url: "https://floorsplus.netlify.app/" },
        { img: Pizza, url: "https://jacobspizzasite.netlify.app/" }
    ])

    return (
        <div className="homeContainer">
            <header className="section">
                <h1>Jacob McFaul</h1>
            </header>
            {state.map((proj) => (
                <div className="project section">
                    <img src={proj.img} alt="" />
                    <div className="projectFooter">
                        <a className="projectURL" href={proj.url}>View Site</a>
                        <div className="allProjectsContainer">
                            <Link to="/projects" className="allProjects">View Projects</Link>
                            <div className="line" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
