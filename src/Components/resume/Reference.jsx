import React from 'react'
import { references } from '../../references.json';


const Reference = () => {

    const referenceCard = references.map(({title, subtitle, name, img, description, id}) => {
        return (
        <div key={id} className="reference-card rc-1">
        <h5 className="reference-card-title">{title}</h5>
        <h6 className="reference-card-subtitle">{subtitle}</h6>
        <div className="reference-profile-container">
            <img className="reference-img" src={img} alt={name}/>
            <div className="reference-name-container">
              <h5 className="reference-name">{name}</h5>
              <h6 className="reference-description">{description}</h6>
            </div>
        </div>
    </div> 
        )
        
    })


    return (
        <>
        <div className="reference-section">
            <div className="reference-container">
                { referenceCard }
            </div>
        </div>
        </>
    )
}

export {Reference}
