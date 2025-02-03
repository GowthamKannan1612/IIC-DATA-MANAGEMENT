import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import gImage from './assets/g.png';
import searchIcon from './assets/search.png';
import bellIcon from './assets/bell.png';  // Import the bell notification icon
import helpIcon from './assets/help.png';   // Import the help icon

function Home() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');  // Redirect to home page
  };

  const goToEDC = () => {
    navigate('/edc');  // Redirect to EDC component
  };

  const goToStartup = () => {
    navigate('/startup');  // Redirect to Startup component
  };

  const goToTBI = () => {
    navigate('/tbi');  // Redirect to TBI component
  };

  const goToSelfDriven = () => {
    navigate('/self-driven');  // Redirect to Self-Driven component
  };

  const goToMICDriven = () => {
    navigate('/mic-driven');  // Redirect to MIC Driven component
  };

  const goToCalendar = () => {
    navigate('/calendar');  // Redirect to Calendar component
  };

  const goToCelebration = () => {
    navigate('/celebration');  // Redirect to Celebration component
  };

  return (
    <div className="home-container">
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
            <li><b>Resources</b></li> {/* Resources will not redirect */}
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
            <li className="help-item">
              <img src={helpIcon} alt="Help Icon" />
              <span>Help</span>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          <div className="dashboard-card">
            <h3>Welcome back, GOWTHAM K</h3>
          </div>
          <div className="dashboard-card">
            <h3>Student Dashboard</h3>
            <p>Login: <a href="#">Student dashboard</a> to view your individual performance.</p>
          </div>
          <div className="dashboard-card">
            <h3>For Any Support</h3>
            <p>Login: <a href="#">Support Desk</a> for Academic/Non-Academic/Personal assistance.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
