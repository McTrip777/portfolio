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
            <header>
                <h1>Jacob McFaul</h1>
            </header>
            <div className="projectContainer">
                {state.map((proj) => (
                    <div className="project">
                        <img src={proj.img} alt="" />
                        <div className="projectFooter">
                            <a className="projectURL" href={proj.url}>View Site</a>
                            <Link to="/projects" className="allProjects">View Projects</Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home
