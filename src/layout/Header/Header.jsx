import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <header className="header-container">
        <label className="burger" htmlFor="burger-check">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input type="checkbox" className="burger-check" id="burger-check" />
        <div className="header-left">
          <NavLink to="/">
            <img
              className="logo"
              src="/src/assets/images/logo empresa/logo.png"
              alt="Logo de la empresa"
            />
          </NavLink>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li className="nav-item">
                <NavLink to="/">Principal</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register">Registro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about">Acerca de nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/adminproducts">Admin Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <img className="user-logo" src="/src/assets/images/user logo.webp" alt="" />
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        </div>
      </header>
    </>
  );
}
