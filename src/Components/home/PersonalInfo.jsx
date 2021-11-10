import React from 'react'
import {InfoBox} from './InfoBox';

const PersonalInfo = () => {
    return (
        <>
        <dl className="presentation__personal-info-container">
            <InfoBox infoType={'Nationality'} info={'Uruguayan'}/>
            <InfoBox infoType={'DOB'} info={'25/01/1996'}/>
            <InfoBox infoType={'Adress'} info={'Av Siempre Viva 742, Springfield'}/>
            <div className="info-container download-cv__btn">DOWNLOAD MY FULL CV<img className="download-icon" src="assets/Frame.png" alt="cv-icon"/>
            </div>
        </dl>  
        </>
    )
}

export { PersonalInfo } ;
