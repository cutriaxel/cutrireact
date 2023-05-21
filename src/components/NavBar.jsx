import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contactos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 justify-content-center">
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
