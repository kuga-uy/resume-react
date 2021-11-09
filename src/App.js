import React from 'react';
import '../src/pages/styles/home.css';
import '../src/pages/styles/contact.css';
import '../src/pages/styles/resume.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';




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
