import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Cart from '../../components/Cart/Cart';
const API = import.meta.env.VITE_API_URL;

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(`user`));

  const isAdmin = user?.role === 'admin';

  function logout() {
    const confirmLogout = confirm('Esta por cerrar su sesion');
    if (!confirmLogout) return;
    localStorage.clear();
    navigate('/login');
  }
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
                <NavLink to="/product/:id">Productos</NavLink>
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
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <NavLink to="/adminproducts">Admin Products</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/adminusers">Admin Users</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <div className="header-right">
          {user ? (
            <div className="user-login">
              <div className="separator">
                <span>Bienvenido {user.name}!</span>
              </div>
              <button onClick={logout} style={{ cursor: 'pointer', marginRight: '8px' }}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <li className="nav-item">
              <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
          )}
          {user && user.image ? (
            <img
              className="user-logo"
              src={`${API}/uploads/users/${user.image}`}
              alt="Foto de usuario"
            />
          ) : (
            <img
              className="user-logo"
              src="/src/assets/images/user logo.webp"
              alt="Imagen por defecto"
            />
          )}

          <Cart />
        </div>
      </header>
    </>
  );
}
