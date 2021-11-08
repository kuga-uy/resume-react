import React from 'react'
import email from "../assets/email-vector.png";
import map from "../assets/map-img.png";

const Contact = () => {
    return (
        <>
<section className="contact-section" id="contact">
  <img className="contact-bg-img" alt="map" src={map} />
  <h2 className="contact__quote">Get In Touch <br/><span className="different-color-text">Inspirational</span> Quote </h2>
  <form className="form-container">
    <h5 className="form-title">Gei in touch</h5>
    <label for="name">Your Full Name</label>
    <input className="input name-input" type="text" id="name" maxlength="50" required/>
    <label for="email">Your Email</label>
    <input className="input email-input" type="text" id="email" maxlength="50" required />
    <label for="subject">Subject</label>
    <input className="input subject-input" type="text" id="subject" maxlength="50" required />
    <label for="name">Your Message</label>
    <input className="input message-input" type="textarea" id="message" maxlength="1000" required />
    <button type="submit" className="send-message-btn">SEND MESSAGE<img className="email-icon"src={email} alt="emai-icon"/>
    </button>
  </form>
  <div className="triangulo"></div>

</section>   
        </>
    )
}

export { Contact }
