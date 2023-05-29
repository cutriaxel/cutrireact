import React, { useState } from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '..//..//assets/react.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar({ cartCount }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <Navbar className='nav__container' expand="lg">
        <Container fluid>
          <div className='logo__container'>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleSidebar} />
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
                <Button variant="success">Buscar</Button>
              </Form>
            </div>
          </Navbar.Collapse>
          <div className='cart__container'>
            <div>
            <p>Mi Carrito</p>
            </div>
            <div className='cart-widget__count'>
            <CartWidget cartCount={cartCount} />
            </div>
          </div>
        </Container>
      </Navbar>

      <div className="sidebar__container">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className='hamburguer-button'>
            {showSidebar ? (
              <FaTimes color="white" onClick={toggleSidebar} size={24} />
            ) : (
              <FaBars color="white" onClick={toggleSidebar}  size={24} />
            )}
            <span className="sidebar__text">BÚSQUEDA POR CATEGORÍA</span>
          </div>
        </Navbar.Toggle>
        {showSidebar && (
          <div className="sidebar">
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <a href="#computadoras" className="sidebar__link">ARMA TU PC</a>
              </li>
              <li className="sidebar__item">
                <a href="#computadoras" className="sidebar__link">ARMA TU COMBO</a>
              </li>
              <hr style={{ color: 'white'}} />
              <li className="sidebar__item">
                <a href="#computadoras" className="sidebar__link">Notebooks</a>
              </li>
              <li className="sidebar__item">
                <a href="#procesadores" className="sidebar__link">Computadoras</a>
              </li>
              <li className="sidebar__item">
                <a href="#placa-videos" className="sidebar__link">Componentes de PC</a>
              </li>
              <li className="sidebar__item">
                <a href="#componentes" className="sidebar__link">Monitores</a>
              </li>
              <li className="sidebar__item">
                <a href="#perifericos" className="sidebar__link">Periféricos</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;








