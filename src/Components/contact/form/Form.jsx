import React from 'react'
import {Input} from './input/Input'
import './input/input.css';

const Form = () => {


    return (
        <>
        <form className="form-container">
            <h5 className="form-title">Get in touch</h5>
            <Input label={'Your full Name'} id={'name'} type={'text'}/>
            <Input label={'Your Email'} id={'email'} type={'email'}/>
            <Input label={'Subject'} id={'subject'} type={'text'}/>
            <label for="name">Your Message</label>
            <input className="input message-input" type="textarea" id="message" maxlength="1000" />
            <button type="submit" className="send-message-btn">SEND MESSAGE<img className="email-icon"src="assets/email-vector.png" alt="emai-icon"/>
            </button>
        </form>
  <div className="triangulo"></div>  
        </>
    )
}

export { Form };