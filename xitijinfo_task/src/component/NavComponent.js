import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavComponent = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" variant="tabs">
            <Nav.Link
              as={NavLink}
              to="/"
              active={isActive('/')}
              style={{ color: isActive('/') ? 'blue' : '' }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              active={isActive('/login')}
              style={{ color: isActive('/login') ? 'blue' : '' }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/signup"
              active={isActive('/signup')}
              style={{ color: isActive('/signup') ? 'blue' : '' }}
            >
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavComponent;