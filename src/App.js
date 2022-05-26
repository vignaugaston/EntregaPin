import './App.css';
import './Stylesheets/SCSS/index.scss';
import Home from "./Components/Home1/Home"; 
import About from './Components/About2/About';
import Products from './Components/Products3/Products';
import Services from './Components/Services4/Services';
import Contact from './Components/Contact5/Contact';
import Footer from './Components/Footer6/Footer';
import React from 'react';

import './Stylesheets/CSS/index.css'



function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Products/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
