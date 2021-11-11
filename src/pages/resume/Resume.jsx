import React from 'react'
import { Experience } from '../../components/resume/experience/Experience';
import { Aboutme } from '../../components/resume/aboutme/Aboutme';

const Resume = () => {
    return (
        <>
<main className="aboutme__container">
  <Aboutme />
    <div className="inspirational-quote-wrapper">
      <h2 className="inspirational-quote">Super Pretty <span className="different-color-text"><br/>Inspirational</span> Quote</h2>
      <img className="logo" src="assets/Group 2.png" alt="logo"/>
    </div>
</main>
  <Experience />
        </>
    )
}

export { Resume };
