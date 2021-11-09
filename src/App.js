import React from 'react';
import './App.css';
import './Contact.css';
import './Resume.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Resume } from './Components/Resume';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';




const App = () => {
  return (
    <>
<body className="body">
  <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,                                               
</body>
</>
);
}

export default App;
