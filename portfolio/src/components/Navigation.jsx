import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav.scss"

function Navigation() {

    const [popup, setPopup] = useState(false)


    const ShowPopup = () => {
        return <div onClick={() => setPopup(false)} className="popupContainer">
            <i className="fas fa-times" />
            <Link className="one" to="/"><h1>HOME</h1></Link>
            <Link className="two" to="/projects"><h1>PROJECTS</h1></Link>
            <Link className="three" to="/about"><h1>ABOUT</h1></Link>
            <Link className="four" to="/contact"><h1>CONTACT</h1></Link>
            <div className="centerBlock" />
        </div>
    }

    return (
        <div className="navContainer">
            <button onClick={() => setPopup(true)} className="button"><i className="fas fa-bars"></i></button>
            {popup ? <ShowPopup /> : null}
        </div>
    )
}

export default Navigation
