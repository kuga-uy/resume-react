import React from 'react';
import '../src/pages/contact/contact.css';
import '../src/pages/resume/resume.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/general/header/Header';
import { Home } from './pages/home/Home';
import { Resume } from './pages/resume/Resume';
import { Contact } from './pages/contact/Contact';
import { Footer } from './components/general/footer/Footer';




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
