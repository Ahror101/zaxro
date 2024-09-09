import React from "react";
import "./styles.scss";

export default function Conference() {
  return (
    <div id="conference_hall" className="holl">
      <div className="img10">
        <img
          className="foto10"
          src={require("../../assets/label.png")}
          alt=""
        />
        <h1 data-aos="fade-down-up" className="text20">OUR GALLERY</h1>
        <p data-aos="fade-up-down" className="text21">
          Explore our spacious rooms with the gorgeous view to the historical{" "}
          <br />
          part of the city. Each room has an exclusive interior design decorated{" "}
          <br />
          with modern art pieces that will make your stay unforgettable.
        </p>
        <div>
          <img data-aos="fade-right"
            className="foto11"
            src={require("../../assets/image (6).png")}
            alt=""
          />
          <img data-aos="fade-left"
            className="foto12"
            src={require("../../assets/image (7).png")}
            alt=""
          />
        </div>
        <div className="img12">
          <img
            className="foto13"
            src={require("../../assets/image (4).png")}
            alt=""
          />
        </div>
        <div>
          <img data-aos="fade-left"
            className="foto14"
            src={require("../../assets/image (2).png")}
            alt=""
          />
        </div>
        <img data-aos="fade-right"
          className="foto15"
          src={require("../../assets/image (3).png")}
          alt=""
        />
      </div>
      <br />
    </div>
  );
}
