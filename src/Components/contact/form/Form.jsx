import React, {Component} from 'react';
import './input/input.css';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    disabled: true,
}

class Form extends Component {
   
   constructor(props) {
       super(props)
   
   this.state = initialState;
   this.handleChange = this.handleChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
   
}

    handleChange = (e) => {
        if (e.target.value.length > 3){
            this.setState({disabled:false})
        }
        const {value, name} = e.target
        this.setState({
            [name] : value,
      
        });
    }

    formValidation = () => {
        const {name, email, subject, message} = this.state;
        let isValid = false;
        let errorName = '';
        let errorEmail = '';
        let errorSubject = '';
        let errorMessage = '';
        
        if(name.length < 3 ) {
            isValid = false;
            errorName = 'Minimum of 3 characters';
            this.setState({errorName})
            
        } else if (name.length > 10) {
            errorName = 'Maximum of 10 characters';
            this.setState({errorName})
        }else {
            isValid = true;
            errorName = '';
            this.setState({errorName})
            
        }

        if (email.includes('@') && email.includes('.com')) {
            isValid = true;
            errorEmail =''
            this.setState({errorEmail})
            
        } else {
            isValid = false;
            errorEmail = 'Please insert a correct email'
            this.setState({errorEmail})
            
            
        }
        
        if (subject.length < 3) {
            isValid = false;
            errorSubject = 'Minimum of 3 characters';
            this.setState({errorSubject})
        } else if (subject.length > 100) {
            errorSubject = 'Maximum of 100 characters';
            this.setState({errorSubject})
        }else {
            isValid = true;
            errorSubject = '';
            this.setState({errorSubject})
        }

        if (message.length < 10) {
            isValid = false;
            errorMessage = 'Minimum of 10 characters';
            this.setState({errorMessage})
        } else if (message.length > 200) {
            errorMessage = 'Maximum of 200 characters';
            this.setState({errorMessage})
        }else {
            isValid = true;
            errorMessage = '';
            this.setState({errorMessage})
        }
        
    
        return isValid;
    }
     
   

    onSubmit = (e) => {
        e.preventDefault()
        const isValid = this.formValidation();
        if (isValid){
            this.setState(initialState);
            
        }
    }

render (){

    
    return (
        <>
        <form onSubmit={this.onSubmit} className="form-container">
            <h5 className="form-title">Get in touch</h5>
            <label for='name'>Your full Name</label>
            <input onChange={this.handleChange} value={this.state.name} className="input name-input" type='text' id='name' name="name" maxlength="50" />
            <span className="error">{this.state.errorName}</span>
            <label for='email'>Your Email</label>
            <input  onChange={this.handleChange} value={this.state.email}  className="input name-input" type='text' id='email' name="email" maxlength="50" />
            <span className="error">{this.state.errorEmail}</span>
            <label for='email'>Your Subject</label>
            <input onChange={this.handleChange} value={this.state.subject} className="input name-input" type='text' id='subject' name="subject" maxlength="50" />
            <span className="error">{this.state.errorSubject}</span>
            <label for="name">Your Message</label>
            <textarea onChange={this.handleChange} value={this.state.message} className="input message-input" type="textarea" id="message" name="message" maxlength="1000" />
            <span className="error">{this.state.errorMessage}</span>
            <button disabled={this.state.disabled} type="submit" className="send-message-btn">SEND MESSAGE<img className="email-icon"src="assets/email-vector.png" alt="emai-icon"/>
            </button>
        </form>
        <div className="triangulo"></div>  
        </>
    )
}
}

export { Form };