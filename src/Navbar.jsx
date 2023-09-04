import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <div className="container-fluid">
        <Navbar.Brand href="#" className="text-light-green">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light-green" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
                Features
              
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light-green"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
