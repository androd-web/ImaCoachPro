 import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={toggleSidebar}  // pas besoin de ()=> ici
          aria-label="Toggle sidebar"
        >
          <img src={iconsImgs.menu} alt="Menu" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>

      <div className="content-top-btns">
        <button
          type="button"
          className="search-btn content-top-btn"
          aria-label="Search"
        >
          <img src={iconsImgs.search} alt="Search icon" />
        </button>

        <button
          type="button"
          className="notification-btn content-top-btn"
          aria-label="Notifications"
        >
          <img src={iconsImgs.bell} alt="Notification bell" />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
