import React from "react";
import "./styles.scss";

export default function Rooms(props) {
  return (
    <div id={"rooms"} className="rooms">
      <div className="yozuv1">
        <h1 data-aos="fade-right" className="yozuv2">
          Rooms & <br /> apartments
        </h1>
        <p data-aos="fade-left" className="yozuv3">
          All room decoration was made with ecological <br /> certified and safe
          materials.All room decoration was <br /> made with ecological
          certified and safe materials.
        </p>
      </div>
      <div className="rasmlar">
        <div className="rasm">
          <img
            data-aos="fade-left"
            src={require("../../assets/image (1).png")}
          />
        </div>
        <div className="rasm1">
          <img
            data-aos="fade-right"
            src={require("../../assets/image (2).png")}
            alt=""
          />
        </div>
        <div>
          <p data-aos="fade-down-up" className="yozuv4">
            The Superior twin is perfect for those who plan to stay <br /> long.
            The spacious and bright room is equipped with deluxe <br /> Italian
            furniture and has a beautiful view to the historical <br /> part of
            the city. Stylish interior design and comfortable beds <br /> will
            make your stay cozy and pleasant.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
