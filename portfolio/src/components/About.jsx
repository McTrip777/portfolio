import React from 'react'
import Selfie from '../img/profilePic.jpg'

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <img src={Selfie} alt="" />
                <div className="aboutText">
                    <h1>ABOUT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Ex ipsa est corporis
                    nesciunt non assumenda ratione quia officia
                    repellat voluptatem quo dolores facere
                    repudiandae, natus animi fugiat quaerat
                    culpa! Modi.<br /><br /> Lorem ipsum
                    dolor sit amet consectetur adipisicing
                    elit. Dolor enim eveniet, incidunt aspernatur
                    nobis alias, porro voluptatibus illo ratione
                    possimus eos. Unde adipisci, laudantium
                    consequuntur cumque temporibus quasi
                    dignissimos quam.<br /><br /> Lorem ipsum
                    dolor, sit amet consectetur adipisicing
                    elit. Consequuntur accusantium magni quae
                    quis quidem nesciunt suscipit ea mollitia
                    velit officia! Perspiciatis, quam quas.
                    Non ipsum molestias, sapiente repudiandae
                    amet dolorum?</p>
                </div>
            </div>
            <div className="socials">
                <a href="https://github.com/McTrip777"><i className="fab fa-github"></i></a>
                <a href="https://www.facebook.com/McTrippin777"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/jake_mcfaul/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/jacob-mcfaul-a96b10180/"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}

export default About
