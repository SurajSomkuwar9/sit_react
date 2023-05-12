import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './Routes';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const collegeName = "SIT pune";

  return (
    <Router>
      <div>
        <Navbar collegeName={collegeName} />
        <RoutesConfig collegeName={collegeName} />
      </div>
    </Router>
  );
};

export default App;
