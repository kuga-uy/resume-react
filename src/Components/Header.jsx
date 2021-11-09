import React from 'react'
import profile from '../assets/Main-Profile-Pic.jpg'
import { Link } from "react-router-dom";


const Header = () => {
    return (
       <>
        <header className="header">
            <div className="header__profile-container">
                <div className="header__profile-wrapper">
                    <div className="header__img-container">
                    <img className="header__avatar-img" src={profile} alt="profile"/ >
                    <div className="header__status-circle"></div>
                </div>
            </div>    
            <div className="header__text-container">
            <h4 className="text developer__name">New Endavan</h4>
            <h4 className="text developer__position">Software Developer</h4>
            </div>
            </div>

            <nav className="nav__container">
                <div className="weather__status-container">Weather today:
                    <span className="weather-forecast">Sunny</span>Tomorrow: <span className="weather-tomorrow-forecast">Clear</span></div>
                    <ul className="nav__menu">
                        <li className="navlist item--home"><Link to="/">Home</Link> </li>
                        <li className="navlist item--resume"> <Link to="/resume">Resume</Link></li>
                        <li className="navlist item--contact"><Link to="/contact">Contact</Link></li> 
                    </ul>
            </nav>
        </header>
       </>
    )
}

export { Header }

