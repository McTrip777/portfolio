import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav.scss"

function Navigation() {

    const [popup, setPopup] = useState(false)


    const ShowPopup = () => {
        return <div className="popupContainer">
            <Link onClick={() => setPopup(false)} to="/"><h1>HOME</h1></Link>
            <Link onClick={() => setPopup(false)} to="/projects"><h1>PORJECTS</h1></Link>
            <Link onClick={() => setPopup(false)} to="/about"><h1>ABOUT</h1></Link>
            <Link onClick={() => setPopup(false)} to="/contact"><h1>CONTACT</h1></Link>
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
