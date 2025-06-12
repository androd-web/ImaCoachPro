 import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? 'sidebar-change' : '');
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      {/* Profil utilisateur */}
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="Image de profil" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <Link
                to={navigationLink.path}
                className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
                onClick={() => setActiveLinkIdx(navigationLink.id)}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
