import React from "react";
import { Link } from "react-router-dom";
import donQuijote from "./don-quijote.png";

export default function WelcomeHero() {
  return (
    <div className="container col-xxl-8 px-4">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={donQuijote}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            The <span className="text-primary">Ingenious</span> Quixote of{" "}
            <span className="text-primary">Full Stack</span>
          </h1>
          <p className="lead">
            Hello. My name is Erick Pacheco from Boston. I am learning to code
            with React and other frameworks. I consider myself a backend
            developer.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              className="btn btn-primary btn-lg px-4 me-md-2"
              to="/projects"
            >
              Erick's Projects
            </Link>
            <Link className="btn btn-outline-secondary btn-lg px-4" to="/about">
              About Erick
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
