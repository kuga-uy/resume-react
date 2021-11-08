import React from 'react'
import profile from '../assets/Main-Profile-Pic.jpg'


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
                        <li className="navlist item--home"><a href="#home">Home</a></li>
                        <li className="navlist item--resume"> <a href="#resume">Resume</a></li>
                        <li className="navlist item--contact"><a href="#contact">Contact</a></li>
                    </ul>
            </nav>
        </header>
       </>
    )
}

export { Header }

