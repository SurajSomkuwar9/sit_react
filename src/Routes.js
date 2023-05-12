import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Contact from './components/Contact/Contact';

const RoutesConfig = ({ collegeName }) => {
  return (
    <Routes>
      <Route path="/" element={<Home collegeName={collegeName} />} />
      <Route path="/about" element={<About collegeName={collegeName} />} />
      <Route path="/programs" element={<Programs collegeName={collegeName} />} />
      <Route path="/contact" element={<Contact collegeName={collegeName} />} />
    </Routes>
  );
};

export default RoutesConfig;
