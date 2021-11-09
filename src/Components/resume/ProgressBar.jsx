import React from 'react'

const ProgressBar = ({language, percentage}) => {
    return (
        <>
    <div className="language-text-container">
          <span className="language-text">{language}</span>
          <span className="spanish-percentage">{percentage}</span>
      </div>
      <div className="progress-bar-container">
          <div className="progress-bar bar" style={{width: percentage }}></div>
      </div> 
        </>
    )
}

export { ProgressBar }