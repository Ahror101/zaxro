import "./styles.scss";

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <img src={require("../../assets/logo.png")} />
      </a>
      <div className="links">
        <a href="#yangiliklar">Yangiliklar</a>
        <a href="#yangiliklar">Yangiliklar</a>
        <a href="#yangiliklar">Yangiliklar</a>
      </div>
      <button>000000000</button>
    </nav>
  );
}
