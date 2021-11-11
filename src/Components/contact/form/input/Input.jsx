import React from 'react'

const Input = ({label, id, type}) => {
    return (
        <>
          <label for={id}>{label}</label>
            <input className="input name-input" type={type} id={id} maxlength="50" />  
        </>
    )
}

export {Input}