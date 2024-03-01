import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import First from './JS/first';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='app'>
        
        <Routes>
         <Route path="/" element={<First />} /> 
         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
