import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the external CSS file
import Home from './components/Home/Home';
import AboutUs from './components/Home/AboutUs';
import Company from './components/Company/Company';
import OrganizationsDetails from './components/Company/OrganizationsDetails';
import Education from './components/PlayerDetails/Education';
import Languages from './components/PlayerDetails/Languages';
import Licenses from './components/PlayerDetails/Licenses';
import Player from './components/PlayerDetails/Player';
import Qualifications from './components/PlayerDetails/Qualifications';
import Skills from './components/PlayerDetails/Skills';
import UserJobsList from './components/PlayerDetails/Job/JobList';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar } from 'react-bootstrap';
import Login from './components/Login/Login'; // Import the Login component

function App() {
  return (
    <div className="App">
              <div className="background-image"></div>
      <Router>
        <Navbar bg="#8E44AD" expand="lg">
          <Navbar.Brand href="/" className="nav-link-white" style={{ paddingLeft: '20px' }}>Player Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/findplayer" className="nav-link-white">
                Find a Player
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus" className="nav-link-white">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="ml-auto" href="#login">
                <Link to="/login" style={{ paddingRight: '20px' }}>
                  <Button variant="primary">Log in</Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/company" element={<Company />} />
          <Route
            path="/company/organizationsdetails"
            element={<OrganizationsDetails />}
          />
          <Route path="/player/education" element={<Education />} />
          <Route path="/player/languages" element={<Languages />} />
          <Route path="/player/licenses" element={<Licenses />} />
          <Route path="/findplayer" element={<Player />} />
          <Route path="/player/qualifications" element={<Qualifications />} />
          <Route path="/player/skills" element={<Skills />} />
          <Route path="/player/jobs" element={<UserJobsList />} />
          <Route path="/login" element={<Login />} /> {/* Route for the login page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  <div class="width-100 footer-background">
    <div class="container">
 
    <div className="footer-background">
        <div className="container">
          <div className="footer-section">
            <div className="footer-column">
              <h4>RESOURCES</h4>
              <ul className="footer-list">
                <li> Home </li>
                <li>Post Free Job</li>
                <li>Recruiter Login</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>GET IN TOUCH</h4>
              <ul class="get-in-touch">
          <li>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>E-MAIL: mohdmnmsaif@gmail.com</p>
          </li>
          <li>
            <i class="fa fa-headphones" aria-hidden="true"></i>
            <p>WHATS-APP: +91 -9074211853</p>
          </li>
          <li>
            <i class="fa fa-fax" aria-hidden="true"></i>
            <p>CONTACT NO.: +91 -9074211853</p>
          </li>
          <li>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <p>WEBSITE: "Under maintenance"</p>
          </li>
        </ul>
            </div>
          </div>
        </div>
        <div
        className="footer" aria-hidden="true">
                      <p>&copy; 2023 Player Finder</p>
        </div>
      </div>

    </div>
    </div>
    </div>
  );
}

export default App;
