import "./styles.scss";

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <img src={require("../../assets/logo.png")} />
      </a>
      <div className="links">
        <a href="#yangiliklar">Yangiliklar</a>
        <a href="#mahsulotlar">Mahsulotlar</a>
        <a href="#biz-haqimizda">Biz haqimida</a>
      </div>
      <button>+998883390355</button>
    </nav>
  );
}
