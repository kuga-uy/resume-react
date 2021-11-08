import React from 'react';
import './App.css';
import './Contact.css';
import './Resume.css';
import profile from './assets/Main-Profile-Pic.jpg'
import cvIcon from "./assets/Frame.png";
import linkedin from "./assets/linkedin-vector.png";
import github from "./assets/github-vector.png";
import email from "./assets/email-vector.png";
import gamingIcon from "./assets/game-development@2x.png";
import photographyIcon from "./assets/Photographer@2x.png";
import bloggingIcon from "./assets/Group@2x.png";
import twitter from "./assets/Icons-twitter.png";
import instagram from "./assets/Icons-instagram.png";
import youtube from "./assets/Icons-Youtube.png";
import logo from "./assets/Group 2.png";
import background from "./assets/background.png"
import stack1 from "./assets/image 1.png";
import stack3 from "./assets/image 3.png";
import stack4 from "./assets/image 4.png";
import stack5 from "./assets/image 5.png";
import map from "./assets/map-img.png";

function App() {
  return (
    <>
<body className="body">
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
  <div className="info-container download-cv__btn">DOWNLOAD MY       FULL CV<img className="download-icon" src={cvIcon} alt="cv-icon"/>
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

    

  <section className="experience-container">
  <img className='experience-background-img' src={background} alt="background"/>
  <div className="experience-text-container">
  <h3  className="experience-title">Experience & Things I Have Learned</h3>
  <h4 className="experience-subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, cumque. Illum nostrum pariatur cum aspernatur dolore amet dolorem, blanditiis quam nam iure quibusdam</h4>
  </div>
  <div  className="certificates-card-grid">
  <div className="item-1">
  <h5 className="school-title">Lorem Ipsum</h5>
  </div>
  <div className="item-2">
  <h5 className="degree-title">Computer Science Degree</h5> 
  </div>
  <div className="item-3">
  <h5 className="student-text">Student</h5>
  <h5 className="course-date">Jan 2016 Dec 2021</h5>
  </div>
  <div className="item-4">
  <ul>
  <h5 className="list-text">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>
  <li className="list-point"><h6 className="list-item-text">List item 1 Lorem Ipsum sit Amet</h6></li>
  <li className="list-point"><h6 className="list-item-text">List item 1 Lorem Ipsum sit Amet</h6></li>
  <li className="list-point"><h6 className="list-item-text">List item 1 Lorem Ipsum sit Amet</h6></li>
  <li className="list-point"><h6 className="list-item-text">List item 1 Lorem Ipsum sit Amet</h6></li>
  </ul>
  </div>
  <div className="item-5">
  <h5 className="school-title">Lorem Ipsum</h5>
  </div>
  <div className="item-6">
  <h5 className="degree-title">Certificate Of Backend Dev</h5> 
  </div>
  <div className="item-7">
  <h5 className="student-text">Student</h5>
  <h5 className="course-date">Jan 2016 Dec 2021</h5>
  </div>
  <div className="item-8">
  <h5 className="certificate-description">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.
  </h5>
  </div>
  <div className="item-9">
  <h5 className="school-title">Lorem Ipsum</h5>
  </div>
  <div className="item-10">
  <h5 className="degree-title">Certificate of Frontend Dev</h5> 
  </div>
  <div className="item-11">
  <h5 className="student-text">Student</h5>
  <h5 className="course-date">Jan 2016 Dec 2021</h5>
  </div>
  <div className="item-12">
  <h5 className="certificate-description">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.
  </h5>
  </div>
  </div>




  <div className="tech-stack-card">
  <h5 className="tech-stack-title">My Tech Stack:</h5>
  <div className="tech-stack-wrapper">
  <img src={stack5} className="stack-icon logo-5" alt="tech-stack"/>
  <img src={stack1} className="stack-icon logo-1" alt="tech-stack"/>
  <img src={stack3} className="stack-icon logo-3" alt="tech-stack"/>
  <img src={stack4} className="stack-icon logo-4" alt="tech-stack"/>
  <img src={stack5} className="stack-icon logo-5" alt="tech-stack"/>
  <img src={stack1} className="stack-icon logo-1" alt="tech-stack"/>
  <img src={stack3} className="stack-icon logo-3" alt="tech-stack"/>
  </div>
  <div className="stack-point-container">
  <div className="stack-point">

  </div>
  <div className="stack-point">
  <div className="stack-intern-point"></div>
  </div>
  <div className="stack-point">

  </div>
  </div>
  </div>

    

  <div className="reference-title-container">
  <h4 className="reference-title">References:</h4>
  </div>

  <div className="reference-section">
  <div className="reference-container">

  <div className="reference-card rc-1">
  <h5 className="reference-card-title">A Breathtaking Person!</h5>
  <h6 className="reference-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsam at quasi repellendus quod maiores voluptates. Ipsam ipsa quas numquam impedit eum molestias possimus autem laborum repudiandae consequatur. Voluptates, ratione!</h6>
  <div className="reference-profile-container">
      <img className="reference-img" src="./assets/Mask Group.png" alt="keanu-reeves"/>
      <div className="reference-name-container">
          <h5 className="reference-name">Keanu Reeves</h5>
          <h6 className="reference-description">A Cyberpunk</h6>
      </div>
  </div>
  </div>
  <div className="reference-card rc2" >
  <h5 className="reference-card-title">took an arrow in the knee!</h5>
  <h6 className="reference-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsam at quasi repellendus quod maiores voluptates. Ipsam ipsa quas numquam impedit eum molestias possimus autem laborum repudiandae consequatur. Voluptates, ratione!</h6>
  <div className="reference-profile-container">
      <img className="reference-img" src="./assets/Mask Group-1.png" alt="keanu-reeves"/>
      <div className="reference-name-container">
          <h5 className="reference-name">Skyrim Guard</h5>
          <h6 className="reference-description">Used to be an adventurer</h6>
      </div>
  </div>
  </div>
  <div  className="reference-card rc3">
  <h5 className="reference-card-title">오징어 게임</h5>
  <h6 className="reference-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsam at quasi repellendus quod maiores voluptates. Ipsam ipsa quas numquam impedit eum molestias possimus autem laborum repudiandae consequatur. Voluptates, ratione!</h6>
  <div className="reference-profile-container">
      <img className="reference-img" src="./assets/Mask Group-2.png" alt="keanu-reeves"/>
      <div className="reference-name-container">
          <h5 className="reference-name">Seong Gi-hun</h5>
          <h6 className="reference-description">Play games</h6>
      </div>
  </div>
  </div>
  </div>
  </div>

  <div className="reference-point-container">
  <div className="reference-point">
  <div className="reference-intern-point"></div>
  </div>
  <div className="reference-point">

  </div>
  <div className="reference-point">

  </div>
  </div>

  </section>
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
  <footer className="footer">
  <ul>
  <li><a className="footer-link" href="#email">email@endava.com</a></li>
  <li><a className="footer-link" href="#linkedin">Linkedin</a></li>
  <li><a className="footer-link" href="github">github</a></li>
  </ul>   
  </footer>                                                           
</body>
</>
);
}

export default App;
