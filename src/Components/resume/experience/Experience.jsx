import React from 'react'
import { Reference } from './reference/Reference';
import { StackCard } from './stackCard/StackCard';
import './experience.css';
import './stackCard/stackCard.css';

const Experience = () => {
    return (
        <>
           
  <section className="experience-container">
  <img className='experience-background-img' src="assets/background.png" alt="background"/>
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




  <StackCard />

    

  <div className="reference-title-container">
    <h4 className="reference-title">References:</h4>
  </div>

  
 <Reference />

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
