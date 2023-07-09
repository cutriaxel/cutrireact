import React, { useContext, useState } from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext'


function NavBar({ handleOpenModal, variant = false }) {
  const { user, logout } = useContext(AuthContext)
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const { cart } = useContext(CartContext);

  return (
    <header>
      <Navbar bg="dark" expand="lg" className="navbar__container">

        <Container style={{ display: 'contents' }}>

          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav" >
            <div className='cutritech-title'>
              <h2>cutri<spam  className="logo-highlight">Tech</spam></h2>
            </div>
            <Nav className="nav__link">
              <Link className='nav__link' to={"/"} >Inicio</Link>
              <Link className='nav__link' to={"/productos"} >Productos</Link>
              <Link className='nav__link' to={"/Contacto"} >Contacto</Link>
              <Link className='nav__link' to={"/Cart"} >Mi carrito</Link>
            </Nav>
            <div>
              <p style={{color: '#01f603', fontSize: '20px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>Bienvenido: {user.email}</p>
              <div className='cart-widget__count' onClick={handleOpenModal}>
                <CartWidget cartCount={cart.length} />
                <button className='btn cerrar_sesion' onClick={logout}>
                  <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} />
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="sidebar__container">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className='hamburguer-button'>
            {showSidebar ? (
              <FaTimes color="white" onClick={toggleSidebar} size={24} />
            ) : (
              <FaBars color="white" onClick={toggleSidebar} size={24} />
            )}
            <span className="sidebar__text">BÚSQUEDA POR CATEGORÍA</span>
          </div>
        </Navbar.Toggle>
        {showSidebar && (
          <div className="sidebar">
            <ul className="sidebar__list">
              <li><Link className='nav__link' to={"/productos/Computadoras"} >ARMA TU PC</Link></li>
              <li><Link className='nav__link' to={"/"} >ARMA TU COMBO</Link></li>
              <hr style={{ color: 'white' }} />
              <li><Link className='nav__link' to={"/productos/Monitores"} >Monitores</Link></li>
              <li> <Link className='nav__link' to={"/productos/Procesadores"} >Procesadores</Link></li>
              <li><Link className='nav__link' to={"/productos/Perifericos"} >Perifericos</Link></li>
              <li><Link className='nav__link' to={"/productos/Computadoras"} >Computadoras</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;









