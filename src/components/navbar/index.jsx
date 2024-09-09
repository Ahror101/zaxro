import { useEffect, useRef, useState } from "react";
import "./styles.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef();

  useEffect(() => {
    if (window.innerWidth <= 480) {
      if (isOpen) {
        nav.current.style.top = 0;
      } else {
        nav.current.style.top = "-100%";
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={nav}>
      <div className="logo">
        <a href="#" onClick={toggleMenu}>
          Bank Hotel
        </a>
      </div>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a onClick={toggleMenu} href="#home">
          Home
        </a>
        <a onClick={toggleMenu} href="#about">
          About
        </a>
        <a onClick={toggleMenu} href="#rooms">
          Rooms
        </a>
        <a onClick={toggleMenu} href="#restaurant">
          Restaurant
        </a>
        <a onClick={toggleMenu} href="#conference_hall">
          Conference hall
        </a>
        <a onClick={toggleMenu} href="#contacts">
          Contacts
        </a>
        <a onClick={toggleMenu} href="#footer">
          Footer
        </a>
      </div>
      <button onClick={toggleMenu} className="menu-btn">
        menu
      </button>
    </nav>
  );
}
