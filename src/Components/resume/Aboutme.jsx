import React from 'react'
import { ProgressBar } from './ProgressBar';

const Aboutme = () => {
    return (
        <>
        <div id="resume" className="aboutme__wrapper">
  <h3 className="aboutme__title">My Resume</h3>
  <div className="aboutme__card">
  <h3  className="aboutme__subtitle">About Me & languages</h3>
  <h5 className="aboutme__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat illum ipsam ut doloremque quia alias laborum aspernatur error quis id, iste ipsum voluptates</h5>
  <div className="languages-hobbies-container">
  <div className="languages-container">
      <h4 className="languages-title">languages</h4>
      <ProgressBar language={'Spanish'} percentage={'100%'}/>
      <ProgressBar language={'English'} percentage={'80%'}/>
      <ProgressBar language={'French'} percentage={'60%'}/>
  </div>
  <div className="hobbies-container">
      <h3 className="hobbies-title">Hobbies</h3>
      <div className="icons-container">
          <div className="icon-container">
              <img src="assets/game-development@2x.png" className="hobbies-img" alt="gaming-icon"/>
              <h5 className="hobbie-title">Gaming</h5>
          </div>
          <div className="icon-container">
              <img src="assets/Photographer@2x.png" className="hobbies-img" alt="photography-icon"/>
              <h5 className="hobbie-title">Photography</h5>
          </div>
          <div className="icon-container">
              <img className="hobbies-img" src="assets/Group@2x.png" alt="blogging-icon"/>
              <h5 className="hobbie-title">Blogging</h5>
          </div>
      </div>
      <div className="more-aboutme-container">
          <h6>Know More About Me</h6>
          <img className="network-icon" src="assets/Icons-twitter.png" alt="twitter" />
          <img className="network-icon" src="assets/Icons-instagram.png" alt="instagram" />
          <img className="network-icon" src="assets/Icons-Youtube.png" alt="youtube" />

      </div>

  </div>
  </div>
  </div>
  </div> 
        </>
    )
}

export {Aboutme}
