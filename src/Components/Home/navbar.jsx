// src/Navigation.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Navigation.css'; 
import logo from '../../Images/digitalMart.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      {/* Start Navigation */}
      <Navbar expand="lg" className="navbar-sticky bg-body-tertiary">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand href="index.html">
            <img src={logo} className="logo" alt="Logo" />
          </Navbar.Brand>
          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* Navbar Collapse */}
          <Navbar.Collapse id="basic-navbar-nav" className='row'>
            <Nav className="align-middle col-lg-6 col-xl-6">
              <Nav.Link href="contact-us.html">Home</Nav.Link>
              <Nav.Link href="contact-us.html">About</Nav.Link>
              <Nav.Link href="contact-us.html">Contact</Nav.Link>
            </Nav>
            <Nav class="button ml-auto col-lg-4 col-xl-4">
              <Link to="/about" className='btn btn-md btn-theme animation border-none rounded-pill'>Get in touch</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="overlay-screen"></div>
      </Navbar>
    </header>
  );
}

export default Navigation;
