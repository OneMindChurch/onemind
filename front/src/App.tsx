import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound'
import Home from './components/Home'

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          시공의 폭풍은 정말 놀라워~!
        </a>
      </header>
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
>>>>>>> upstream/feature
  );
}

export default App;
