import React from "react";
import "./styles.scss";
import Foto1 from "../../assets/image.png";

export default function Home() {
  return (
    <div id="home" className="container">
      <div className="logo">
        <h1 data-aos="fade-right" className="text1">
          <span style={{ color: "dark" }}>Bank</span>
          <span style={{ color: "yellow" }}>Hotel</span>
        </h1>
        <p data-aos="fade-left" className="text2">
          The luxurious hotel in the most beautiful European city <br /> with an
          exclusive restaurant, conference-hall, and art-bar.
        </p>
      </div>
      <div className="img">
        <img style={{width:"100%", padding:"3px 30px"}} src={Foto1} alt="" />
      </div>
    </div>
  );
}
