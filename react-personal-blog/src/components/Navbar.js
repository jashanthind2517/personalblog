import React from "react";

const Navbar = ({ logo, links }) => {
  return (
    <header className="top-bar">
      <img
        src={logo}
        className="logo"
        width="80px"
        height="auto"
        alt="logo"
      />
      <nav className="nav-links">
        {links.map((link, index) => (
          <a href="#" key={index}>{link}</a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
