import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Layout.css';
import gImage from './assets/g.png';
import searchIcon from './assets/search.png';
import bellIcon from './assets/bell.png';  // Import the bell notification icon
import helpIcon from './assets/help.png';   // Import the help icon

function Layout({ children }) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const goToEDC = () => {
    navigate('/edc');
  };

  const goToStartup = () => {
    navigate('/startup');
  };

  const goToTBI = () => {
    navigate('/tbi');
  };

  const goToSelfDriven = () => {
    navigate('/self-driven');
  };

  const goToMICDriven = () => {
    navigate('/mic-driven');
  };

  const goToCalendar = () => {
    navigate('/calendar');
  };

  const goToCelebration = () => {
    navigate('/celebration');
  };

  return (
    <div className="layout-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="navbar-left">
          <h2>IIC Information Portal</h2>

          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </div>
        </div>

        <div className="navbar-right">
          <img src={bellIcon} alt="Notification Icon" className="notification-icon" />
          <img src={gImage} alt="Gowtham K" className="profile-image" />
          <span className="user-info">GOWTHAM K</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className="main-menu-item" onClick={goToHome}><b>Main</b></li>
            <li><b>Resources</b></li>
            <li className="submenu"><b>IIC Events</b>
              <ul>
                <li onClick={goToSelfDriven}>Self-Driven</li>
                <li onClick={goToMICDriven}>MIC Driven</li>
                <li onClick={goToCalendar}>Calendar</li>
                <li onClick={goToCelebration}>Celebration</li>
              </ul>
            </li>
            <li className="menu-item" onClick={goToEDC}><b>EDC</b></li>
            <li className="menu-item" onClick={goToStartup}><b>Startup</b></li>
            <li className="menu-item" onClick={goToTBI}><b>TBI</b></li>
          </ul>
          {/* Help at the bottom */}
          <div className="help-item" onClick={() => alert('Help clicked!')}>
            <img src={helpIcon} alt="Help Icon" />
            <span>Help</span>
          </div>
        </aside>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
