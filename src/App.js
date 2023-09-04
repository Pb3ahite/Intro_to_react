import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import Newspage from './Newspage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspage" element={<Newspage />} />
      </Routes>
    </Router>
  );
}

export default App;
