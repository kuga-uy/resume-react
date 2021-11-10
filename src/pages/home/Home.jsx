import React from 'react'
import { PersonalInfo } from '../../components/home/PersonalInfo'
import { PresentationTitle } from '../../components/home/PresentationTitle';
import './home.css';

const Home = () => {
  
    return (
        <>
    <section id="home" className="presentation__section">
        <div className="presentation__wrapper">
        <PresentationTitle />
        <PersonalInfo />

            <div className="social-network-container">
                <img className="icon linkedin-icon" src="assets/linkedin-vector.png" alt="linkedin"/>
                <img className="icon github-icon" src="assets/github-vector.png" alt="github"/>
                <img className="icon email-icon" src="assets/email-vector.png" alt="email"/>
            </div>
        </div>


    <div className="presentation__img-section">
        <img className="presentation__img" src="assets/Main-Profile-Pic.jpg" alt="main-profile"/>
    </div>       
  </section>
        </>
    )
}

export { Home }
