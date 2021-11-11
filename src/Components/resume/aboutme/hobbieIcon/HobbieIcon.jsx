import React from 'react'

const HobbieIcon = ({name, img}) => {
    return (
        <>
        <div className="icon-container">
            <img src={img} className="hobbies-img" alt={name}/>
            <h5 className="hobbie-title">{name}</h5>
        </div>    
        </>
    )
}

export {HobbieIcon}
