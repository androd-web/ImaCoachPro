 import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoPro from "../assets/img/logo1.png";
import "../assets/style/Navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/formation", label: "Formations" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand text-capitalize" to="/">
          <img src={logoPro} alt="logo" />  
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {links.map(({ to, label }) => (
              <li className="nav-item" key={to} onClick={closeMenu}>
                <Link
                  to={to}
                  className={`nav-link ${location.pathname === to ? "active" : ""}`}
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}

            {!isLoggedIn ? (
              <>
                <li className="nav-item" onClick={closeMenu}>
                  <Link to="/login" className="nav-link">
                    <span>Se connecter</span>
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <a
                    href="https://wa.me/tonlienwhatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <span>Rejoignez-nous</span>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" onClick={closeMenu}>
                  <Link to="/dashboard" className="nav-link">
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <a
                    onClick={logout}
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    <span>Déconnexion</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
