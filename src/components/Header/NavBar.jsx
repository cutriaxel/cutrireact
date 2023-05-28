// NavBar.jsx

import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '..//..//assets/react.svg';

function NavBar({ cartCount }) {
  return (
    <header>
      <Navbar className='nav__container' expand="lg">
        <Container fluid>
          <div className='logo__container'>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="link my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='nav__link' href="#action1" style={{ color: 'white'}}>Inicio</Nav.Link>
              <Nav.Link className='nav__link' href="#action2" style={{ color: 'white' }}>Productos</Nav.Link>
              <Nav.Link className='nav__link' href="#action1" style={{ color: 'white' }}>Contacto</Nav.Link>
            </Nav>

            <div className='form__container'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-4"
                  aria-label="Search"
                />
                <Button variant="primary">Buscar</Button>
              </Form>
            </div>
          </Navbar.Collapse>
          <CartWidget cartCount={cartCount} />
        </Container>
      </Navbar>
    </header>
    
  );
}

export default NavBar;



