import React from 'react'
import { useEffect, useState } from 'react';

const PresentationTitle = () => {

    const [greetingsHours, setGreetingsHours] = useState(new Date().getHours());

    useEffect(()=> {
             if ( greetingsHours < 12 ) {
                setGreetingsHours("Good Morning! ");
             } else if ( greetingsHours >= 12 && greetingsHours < 18 ) {
                 setGreetingsHours("Good Afternoon! ");
             } else if (greetingsHours >= 18 && greetingsHours < 20) {
                 setGreetingsHours("Good Evening! ");
             } else if ( greetingsHours > 20 ) {
                 setGreetingsHours("Good Night! ");
             }       
   },[greetingsHours])
   
    return (
        <>
            <div className="presentation__text-section">
                <h1 className="presentation__title"><span id="variable-greetings" >{greetingsHours}</span>Welcome to my <span className="different-color-text">Personal</span> Webpage</h1>
                <h6 className="presentation__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea minima vel totam et maiores numquam itaque alias quos animi, tenetur cum debitis</h6>
            </div>  
        </>
    )
}

export { PresentationTitle }
