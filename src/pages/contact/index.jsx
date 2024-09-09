import React from "react";
import "./styles.scss";

export default function Contact() {
  return (
    <div id="contacts" className="contacts">
      <div className="text71">
        <h1 className="text77">+38 032 297 50 20</h1>
      </div>
      <div className="text71">
        <div className="text900">
          <h1>GET IN</h1>
        </div>
        <div className="text212">
          <h1 className="text221">
            <span>TOUCH</span>
          </h1>
        </div>
        <div className="foto91">
          <img
            className="foto92"
            src={require("../../assets/Star 5.png")}
            alt=""
          />
        </div>
        <div className="foto93">
          <img
            className="foto94"
            src={require("../../assets/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
