import React from 'react';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
    return (
        <div >
            <Nav className='nav-back'>
      <Nav.Link as={Link} to="/">Login</Nav.Link>
      <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/Register">Register</Nav.Link>
    </Nav>
        </div>
    );
};

export default Navbar;