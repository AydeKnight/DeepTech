import React, { useRef } from 'react';
import "../styles/style.css";
import Navbar from './navbar';
import IntialPage from './inttial-page';
import Home from "../view/Home/index";
import Pricing from "../view/Pricing/index";
import About from "../view/About/index";

function Main() {

  const modelsRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToModels = () => {
    if (modelsRef.current) {
      modelsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
     <Navbar 
      scrollToModels={scrollToModels} 
      scrollToPricing={scrollToPricing} 
      scrollToAbout={scrollToAbout} 
     />
     <div className='pading'>
        <IntialPage/>
     </div>
     <div >
        <Home refProp={modelsRef} />
     </div>
     <div>
        <Pricing refProp={pricingRef} />
     </div>
     <div >
        <About refProp={aboutRef}/>
     </div>
    </div>
  );
}

export default Main;
