import React from 'react'
import { Form } from '../../components/contact/form/Form'
import '../../components/contact/form/form.css'



const Contact = () => {
    return (
        <>
<section className="contact-section" id="contact">
  <img className="contact-bg-img" alt="map" src="assets/map-img.png" />
  <h2 className="contact__quote">Get In Touch <br/><span className="different-color-text">Inspirational</span> Quote </h2>
  <Form />

</section>   
        </>
    )
}

export { Contact }
