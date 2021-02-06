import React from 'react'
import { ProjectData } from './ProjectData'

function Projects() {
    return (
        <div className="projectsContainer">
            <h1>Projects</h1>
            <div className="allProjects">
                {ProjectData.map((item) =>
                    <section className="project" key={item.name}>
                        <a href={item.url} className="imgLink"><img src={item.img} alt="" /></a>

                        <div className="projectLinks">
                            <a href={item.url} className="nameLink"><h3>{item.name}</h3></a>
                            <a href={item.github} className="nameLink"><i className="fab fa-github"></i></a>
                        </div>
                    </section>
                )}

            </div>
        </div>
    )
}

export default Projects
