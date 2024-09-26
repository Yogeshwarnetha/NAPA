import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import MainLogo from "../../Images/napalogo.png";
import "./index.css";

const NavItems = [
  { name: "Home", path: "/", dropdown: [] },
  { name: "Pages", path: "/pages", dropdown: [] },
  { name: "Blog", path: "/blog", dropdown: [] },
  { name: "Donations", path: "/donations", dropdown: [] },
  { name: "Shop", path: "/shop", dropdown: [] },
  { name: "Contacts", path: "/contacts", dropdown: [] },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar-banner-container">
      <nav className="navbar-main">
        <div className="logo-main-container">
          <img src={MainLogo} alt="Logo" className="logo-container" />
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <AiOutlineClose className="close-button-icon" />
          ) : (
            <GiHamburgerMenu className="close-button-icon" />
          )}
        </div>

        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            {NavItems.map((item) => (
              <li key={item.name} className="list-type-content">
                <NavLink to={item.path} className="nav-link">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Search Icon */}
        <div className="search-icon">
          <AiOutlineSearch />
        </div>

        {/* Let's Talk Button */}
        <button className="navbar-get-quote">LET'S TALK</button>
      </nav>
    </div>
  );
};

export default Navbar;
