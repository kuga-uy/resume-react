import React from 'react'
import gamingIcon from "../assets/game-development@2x.png";
import photographyIcon from "../assets/Photographer@2x.png";
import bloggingIcon from "../assets/Group@2x.png";
import twitter from "../assets/Icons-twitter.png";
import instagram from "../assets/Icons-instagram.png";
import youtube from "../assets/Icons-Youtube.png";
import logo from "../assets/Group 2.png";
import { Experience } from './Experience';

const Resume = () => {
    return (
        <>
<main className="aboutme__container">
  <div id="resume" className="aboutme__wrapper">
  <h3 className="aboutme__title">My Resume</h3>
  <div className="aboutme__card">
  <h3  className="aboutme__subtitle">About Me & Lenguages</h3>
  <h5 className="aboutme__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat illum ipsam ut doloremque quia alias laborum aspernatur error quis id, iste ipsum voluptates</h5>
  <div className="lenguages-hobbies-container">
  <div className="lenguages-container">
      <h4 className="lenguages-title">Lenguages</h4>

      <div className="lenguage-text-container">
          <span className="spanish-text">Spanish</span>
          <span className="spanish-percentage">100%</span>
      </div>
      <div className="progress-bar-container">
          <div className="progress-bar spanish-bar"></div>
      </div>

      <div className="lenguage-text-container">
          <span className="spanish-text">English</span>
          <span className="spanish-percentage">80%</span>
      </div>
      <div className="progress-bar-container">
          <div className="progress-bar english-bar"></div>
      </div>



      <div className="lenguage-text-container">
          <span className="spanish-text">French</span>
          <span className="spanish-percentage">60%</span>
      </div>
      <div className="progress-bar-container">
          <div className="progress-bar french-bar"></div>
      </div>

  </div>
  <div className="hobbies-container">
      <h3 className="hobbies-title">Hobbies</h3>
      <div className="icons-container">
          <div className="icon-container">
              <img src={gamingIcon} className="hobbies-img" alt="gaming-icon"/>
              <h5 className="hobbie-title">Gaming</h5>
          </div>
          <div className="icon-container">
              <img src={photographyIcon} className="hobbies-img" alt="photography-icon"/>
              <h5 className="hobbie-title">Photography</h5>
          </div>
          <div className="icon-container">
              <img className="hobbies-img" src={bloggingIcon} alt="blogging-icon"/>
              <h5 className="hobbie-title">Blogging</h5>
          </div>
      </div>
      <div className="more-aboutme-container">
          <h6>Know More About Me</h6>
          <img className="network-icon" src={twitter} alt="twitter" />
          <img className="network-icon" src={instagram} alt="instagram" />
          <img className="network-icon" src={youtube} alt="youtube" />

      </div>

  </div>
  </div>
  </div>
  </div>

    <div className="inspirational-quote-wrapper">
      <h2 className="inspirational-quote">Super Pretty <span className="different-color-text"><br/>Inspirational</span> Quote</h2>
      <img className="logo" src={logo} alt="logo"/>
    </div>
</main>
<Experience />
        </>
    )
}

export { Resume };
