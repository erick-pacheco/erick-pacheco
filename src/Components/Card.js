import React from "react";
import { selectors, useStateValue } from "../data";

export default function Card() {
  const [{ theme }] = useStateValue();
  return (
    <>
      <div className="card my-3 animate__animated animate__fadeInLeft" style={{ width: "18rem" }}>
        <img
          src="https://miro.medium.com/max/1400/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body ${selectors.bgColor(theme)}`}>
          <h5 className={`card-title ${selectors.textColor(theme)}`}>
            Card title
          </h5>
          <p className={`card-text ${selectors.textColor(theme)}`}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
