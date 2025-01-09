import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Images/digitalMart.png';
import '../../Styles/Navigation.css'; 

function HeaderNav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  };

  return (
    <>
      <Navbar expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='logo' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="basic-navbar-nav" className={`menu ${navOpen ? 'show' : ''}`}>
            <Nav className="mx-auto align-middle">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contact</Nav.Link>
            </Nav>
            <Nav class="button ms-auto">
              <Link to="/about" className='btn btn-light btn-xs animation rounded-pill  '>Free Trial</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default HeaderNav;
