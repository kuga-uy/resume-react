import React from 'react'
import background from "../assets/background.png"
import stack1 from "../assets/image 1.png";
import stack3 from "../assets/image 3.png";
import stack4 from "../assets/image 4.png";
import stack5 from "../assets/image 5.png";

const Experience = () => {
    return (
        <>
           
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
        </>
    )
}

export {Experience}
