import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styling
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar z-20">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <NavItem title="Solutions">
          <Dropdown>
            <DropdownItem title="AV Solutions" />
            <DropdownItem title="Security Systems" />
            <DropdownItem title="ELV Solutions" />
            <DropdownItem title="IT services" />
          </Dropdown>
        </NavItem>
        <NavItem title="Verticals">
          <Dropdown>
            <DropdownItem title="Corporate" />
            <DropdownItem title="Education" />
            <DropdownItem title="IT Services" />
            <DropdownItem title="Government" />
            <DropdownItem title="Hospitality & Entertainment" />
            <DropdownItem title="Retail" />
          </Dropdown>
        </NavItem>
        <NavItem title="Projects">
          <Dropdown>
            <DropdownItem title="Project Profiles" />
            <DropdownItem title="Case Studies" />
          </Dropdown>
        </NavItem>
        <NavItem title="Company">
          <Dropdown>
            <DropdownItem title="About Us" />
            <DropdownItem title="Our people and culture" />
            <DropdownItem title="Careers" />
            <DropdownItem title="Locations" />
            <DropdownItem title="Request Support" />
          </Dropdown>
        </NavItem>
      </div>
    </div>
  );
};

const NavItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-item">
      <div className="nav-item-title" onClick={handleToggle}>
        {title}
        <div className="arrow">
          <svg
            width="24"
            height="24"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`arrow ${isOpen ? "open" : ""}`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && children}
    </div>
  );
};

const Dropdown = ({ children }) => {
  return <div className="dropdown-menu">{children}</div>;
};

const DropdownItem = ({ title }) => {
  return <div className="dropdown-item">{title}</div>;
};

export default Navbar;
