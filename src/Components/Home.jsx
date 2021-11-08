import React from 'react'
import cvIcon from "../assets/Frame.png";
import linkedin from "../assets/linkedin-vector.png";
import github from "../assets/github-vector.png";
import profile from '../assets/Main-Profile-Pic.jpg'
import email from "../assets/email-vector.png";

const Home = () => {
    return (
        <>
    <section id="home" className="presentation__section">
        <div className="presentation__wrapper">
            <div className="presentation__text-section">
                <h1 className="presentation__title"><span id="variable-greetings"></span>Welcome to my <span className="different-color-text">Personal</span> Webpage</h1>
                <h6 className="presentation__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea minima vel totam et maiores numquam itaque alias quos animi, tenetur cum debitis</h6>
            </div>
        <dl className="presentation__personal-info-container">
            <div className="info-container info--nacionality">
                <dt className="info-box">Nacionality:</dt>
                <dd className="info">Uruguayan</dd>
            </div>
            <div className="info-container info--dob">
                <dt className="info-box">DOB:</dt>
                 <dd className="info">25/01/1996</dd>
            </div>
            <div className="info-container info--address">
                <dt className="info-box">Adress:</dt>
                <dd className="info">Av Siempre Viva 742, Springfield</dd>
            </div>
            <div className="info-container download-cv__btn">DOWNLOAD MY FULL CV<img className="download-icon" src={cvIcon} alt="cv-icon"/>
            </div>
        </dl>

        <div className="social-network-container">
            <img className="icon linkedin-icon" src={linkedin} alt="linkedin"/>
            <img className="icon github-icon" src={github} alt="github"/>
            <img className="icon email-icon" src={email} alt="email"/>
        </div>
    </div>


    <div className="presentation__img-section">
        <img className="presentation__img" src={profile} alt="main-profile"/>
    </div>       
  </section>
        </>
    )
}

export { Home }
