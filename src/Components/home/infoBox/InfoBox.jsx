import React from 'react'
import './infoBox.css'
const InfoBox = ({infoType, info}) => {
    return (
        <>
        <div className="info-container">
            <dt className="info-box">{infoType}</dt>
            <dd className="info">{info}</dd>
        </div> 
        </>
    )
}

export { InfoBox }