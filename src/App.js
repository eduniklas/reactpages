import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {NavbarComp} from './components/Navbar.js';
import {HomeComp} from './components/Home.js';
import {CvComp} from './components/Cv.js';
import {PortfolioComp} from './components/Portfolio.jsx';
import {BrowserRouter as HashRouter, Route, Routes} from "react-router-dom";
import {SecretComponent} from './components/Secrets.js';
import {Footer} from './components/Footer.js';
import {AboutComp} from './components/About.js';
import {ContactComp} from './components/Contact.js';
import {Header} from './components/Header.js';


function App() {
  return (
    <>
      <HashRouter>
        <NavbarComp/>
        <Header/>
        <Routes>
          <Route path="/" element={<HomeComp/>}/>
          <Route path="/cv" element={<CvComp/>}/>
          <Route path="/portfolio" element={<PortfolioComp/>}/>
          <Route path="/about" element={<AboutComp/>}/>
          <Route path="/contact" element={<ContactComp/>}/>
        </Routes>
        <SecretComponent/>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App;
