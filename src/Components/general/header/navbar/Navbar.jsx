import React from 'react'
import { Link } from "react-router-dom";
import { WeatherStatus } from './weatherStatus/WeatherStatus';
import './navbar.css';

const Navbar = () => {
    return (
        <>
          <nav className="nav__container">
                <WeatherStatus />
                    <ul className="nav__menu">
                        <li className="navlist item--home"><Link to="/">Home</Link> </li>
                        <li className="navlist item--resume"> <Link to="/resume">Resume</Link></li>
                        <li className="navlist item--contact"><Link to="/contact">Contact</Link></li> 
                    </ul>
            </nav>  
        </>
    )
}

export { Navbar } 