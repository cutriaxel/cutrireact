import React, { useContext, useState } from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Home, Email } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext';
import { FaMicrochip, FaKeyboard } from 'react-icons/fa';
import { MdDesktopMac } from 'react-icons/md';

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
          <Navbar.Collapse id="navbarNav">
          <div className='cutritech-title'>
  <h2>cutri<span className="logo-highlight">Tech</span></h2>
</div>
            <Nav className="nav__link">
              <Link className='nav__link' to={"/"} >
                <Home className='iconos-nav' /> Inicio
              </Link>
              <Link className='nav__link' to={"/productos"} >
                <ShoppingCartIcon className='iconos-nav' /> Productos
              </Link>
              <Link className='nav__link' to={"/Contacto"} >
                <Email className='iconos-nav' /> Contacto
              </Link>
              <Link className='nav__link' to={"/Cart"} >
                <ShoppingCartIcon className='iconos-nav' /> Mi carrito
              </Link>
            </Nav>
            <div>
              <p style={{ color: 'green', fontSize: '20px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif' }}>Bienvenido: {user.email}</p>
              <div className='cart-widget__count' onClick={handleOpenModal}>
                <CartWidget cartCount={cart.length} />
                <div>
                <button className='btn cerrar_sesion' onClick={logout}>
  <span style={{ color: 'white' }}>Cerrar sesión</span>
  <ExitToAppIcon style={{ color: 'green', marginLeft: '5px' }} />
</button>
                </div>
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
              <li>
                <Link className='nav__link' to={"/productos/Computadoras"} >
                  <MdDesktopMac className='iconos-sidebar' />
                  ARMA TU PC
                </Link>
              </li>
              <li>
                <Link className='nav__link' to={"/"} >
                  <FaMicrochip className='iconos-sidebar' />
                  ARMA TU COMBO
                </Link>
              </li>
              <hr style={{ color: 'white' }} />
              <li>
                <Link className='nav__link' to={"/productos/Monitores"} >
                  <MdDesktopMac className='iconos-sidebar' />
                  Monitores
                </Link>
              </li>
              <li>
                <Link className='nav__link' to={"/productos/Procesadores"} >
                  <FaMicrochip className='iconos-sidebar' />
                  Procesadores
                </Link>
              </li>
              <li>
                <Link className='nav__link' to={"/productos/Perifericos"} >
                  <FaKeyboard className='iconos-sidebar' />
                  Periféricos
                </Link>
              </li>
              <li>
                <Link className='nav__link' to={"/productos/Computadoras"} >
                  <MdDesktopMac className='iconos-sidebar' />
                  Computadoras
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;









