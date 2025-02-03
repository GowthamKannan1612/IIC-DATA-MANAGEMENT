import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import SelfDriven from './SelfDriven';
import MICDriven from './MICDriven';
import Calendar from './Calendar';
import Celebration from './Celebration';
import EDC from './EDC';
import Startup from './Startup';
import TBI from './TBI';
import Login from './Login'; // Import the login page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route will redirect to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/self-driven" element={<SelfDriven />} />
        <Route path="/mic-driven" element={<MICDriven />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/edc" element={<EDC />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/tbi" element={<TBI />} />
      </Routes>
    </Router>
  );
}

export default App;
