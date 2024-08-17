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
      <a onClick={toggleMenu} href="#">
        <img src={require("../../assets/logo.png")} />
      </a>
      <div className="links">
        <a onClick={toggleMenu} href="#yangiliklar">Yangiliklar</a>
        <a onClick={toggleMenu} href="#mahsulotlar">Mahsulotlar</a>
        <a onClick={toggleMenu} href="#biz-haqimizda">Biz haqimida</a>
      </div>
      <button>+998883390355</button>
      <button onClick={toggleMenu} className="menu-btn">
        menu
      </button>
    </nav>
  );
}
