import React from "react";
import { selectors, useStateValue } from "../data";

export default function Card({ project }) {
  const [{ theme }] = useStateValue();
  return (
    <>
      <div
        className="card my-3 animate__animated animate__fadeInLeft"
        style={{ width: "18rem" }}
      >
        <img src={project?.img} className="card-img-top" alt="..." />
        <div className={`card-body ${selectors.bgColor(theme)}`}>
          <h5 className={selectors.textColor(theme, "card-title")}>
            {project?.name}
          </h5>

          <p className={`card-text ${selectors.textColor(theme)}`}>
            {project?.short_description}
          </p>
          <a href={project?.url} className="btn btn-primary">
            See Live
          </a>
        </div>
      </div>
    </>
  );
}
