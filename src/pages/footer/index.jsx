import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <div id={"footer"}>
      <div className="foter">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro{" "}
            <br />
            voluptatem nobis amet ea iure, quae neque explicabo exercitationem{" "}
            <br />
            labore vitae atque alias placeat perspiciatis sapiente. Est nesciunt{" "}
            <br />
            doloremque minima adipisci.
          </p>
        </div>
        <div>
          <h1>News</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <br />
            voluptatem nobis amet ea iure, quae neque
            <br />
            labore vitae atque alias placeat perspiciatis
            <br />
            doloremque minima adipisci.
          </p>
        </div>
        <div>
          <h1>Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            voluptatem nobis amet ea iure, quae neque explicabo
          </p>
        </div>
      </div>
    </div>
  );
}
