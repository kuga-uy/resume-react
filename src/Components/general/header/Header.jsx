import React from 'react'
import { Navbar } from './navbar/Navbar';
import './header.css';


const Header = () => {

    return (
       <>
        <header className="header">
            <div className="header__profile-container">
                <div className="header__profile-wrapper">
                    <div className="header__img-container">
                    <img className="header__avatar-img" src="assets/Main-Profile-Pic.jpg" alt="profile"/ >
                    <div className="header__status-circle"></div>
                </div>
            </div>    
            <div className="header__text-container">
            <h4 className="text developer__name">New Endavan</h4>
            <h4 className="text developer__position">Software Developer</h4>
            </div>
            </div>

            <Navbar />
        </header>
       </>
    )
}

export { Header }

