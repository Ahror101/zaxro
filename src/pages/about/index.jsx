import React from "react";
import "./styles.scss";
import Foto2 from "../../assets/space-copenhagen-the-stratford-architonic-jw-25-12-arcit18 1.png";
import Foto3 from "../../assets/space-copenhagen-the-stratford-architonic-jw-26-11-arcit18 1.png";

export default function About(props) {
  return (
    <div id={"about"} className="container">
      <div className="text3">
        <p data-aos="fade-left" className="text5">+38 032 297 50 20</p>
        <p data-aos="fade-right" className="text6">Art & Congress hall</p>
      </div>
      <div className="foto">
        <img data-aos="fade-right" className="foto23" style={{padding:"0px 30px"}} src={Foto2} alt="" />
        <p data-aos="fade-right" className="yozuv">
          The five-star Bank Hotel was reopened to visitors in 2016. The <br />
          building was renovated and modernized to <br /> meet the expectations
          of the most demanding guests. We offer <br /> luxurious rooms,
          numerous facilities, and exceptional service.
        </p>
        <h1 data-aos="fade-down-up" className="text10">
          <span className="text7">About</span>
          <span className="text8">US</span>
        </h1>
        <img data-aos="fade-left" className="foto3" style={{height:"400px"}} src={Foto3} alt="" />
      </div>
      <div>
      </div>
      <br />
    </div>
  );
}
