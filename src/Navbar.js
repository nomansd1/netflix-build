import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false);

    const transitionNavbar= () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar); 
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img className="nav__logo" 
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />

                <img className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt="" />
            </div>
        </div>
    )
}

export default Navbar