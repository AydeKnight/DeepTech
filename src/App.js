import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Main from './components/index';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DeepTec" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
