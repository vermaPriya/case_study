import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';

const NavBar = ({ location: { pathname } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="danger" dark expand="sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          To do list
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${
                pathname.startsWith('/home') ? 'active' : ''
              }`}
            >
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname.startsWith('/about') ? 'active' : ''
              }`}
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname.startsWith('/users') ? 'active' : ''
              }`}
            >
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default withRouter(NavBar);
