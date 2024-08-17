import React from "react";
import "./styles.scss";
export default function Yangiliklar() {
  return (
    <div id="yangiliklar">
      <div className="first">
        <h1>
          Bugun buyurtma qiling va <span className="text">70% gacha</span>
          tejang
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
          dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu,
          et auctor mi.
        </p>
        <div className="rasm">
          <img src={require("../../assets/Image (2).png")} alt="" />
          <img src={require("../../assets/Image (3).png")} alt="" />
          <img src={require("../../assets/Image (4).png")} alt="" />
        </div>
      </div>
    </div>
  );
}
