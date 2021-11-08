import React from 'react';
import './App.css';
import './Contact.css';
import './Resume.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Resume } from './Components/Resume';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';




const App = () => {
  return (
    <>
<body className="body">
    <Header />
    <Home />
    <Resume />
    <Contact />   
    <Footer />                                                       
</body>
</>
);
}

export default App;
