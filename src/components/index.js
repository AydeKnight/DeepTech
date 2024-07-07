import React from 'react';
import "../styles/style.css";
import Navbar from './navbar';
import IntialPage from './inttial-page';
function Main() {
  return (
    <div className="App">
     <Navbar/>
     <div className='pading'>
     <IntialPage/>
     </div>
    </div>
  );
}

export default Main;
