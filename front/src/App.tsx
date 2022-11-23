import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound'
import Home from './components/Home'
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
