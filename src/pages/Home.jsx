import React from 'react'
import { useState, useEffect } from 'react';
import { PersonalInfo } from '../components/home/PersonalInfo';

const Home = () => {
   const [greetingsHours, setGreetingsHours] = useState(new Date().getHours());

   useEffect(()=> {
            if ( greetingsHours < 12 ) {
               setGreetingsHours("Good Morning! ");
            } else if ( greetingsHours >= 12 && greetingsHours < 18 ) {
                setGreetingsHours("Good Afternoon! ");
            } else if (greetingsHours > 18 && greetingsHours < 20) {
                setGreetingsHours("Good Evening! ");
            } else if ( greetingsHours > 20 ) {
                setGreetingsHours("Good Night! ");
            }       
  },[greetingsHours])
      

    return (
        <>
    <section id="home" className="presentation__section">
        <div className="presentation__wrapper">
            <div className="presentation__text-section">
                <h1 className="presentation__title"><span id="variable-greetings" >{greetingsHours}</span>Welcome to my <span className="different-color-text">Personal</span> Webpage</h1>
                <h6 className="presentation__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea minima vel totam et maiores numquam itaque alias quos animi, tenetur cum debitis</h6>
            </div>
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
