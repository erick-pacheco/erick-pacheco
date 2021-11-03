import React from "react";
import { Link } from "react-router-dom";
import { useStateValue, selectors } from "../data";
import Themer from "../theme/Themer";
import donQuijote from "./don-quijote.png";
import Header from "./Header";
import View from "./View";

export default function WelcomeHero() {
  const [{ theme }] = useStateValue();

  return (
    <View>
      <Header />
      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={donQuijote}
              className="d-block mx-lg-auto img-fluid bg bg-light animate__animated animate__fadeInRight"
              alt="Don Quijote De La Mancha"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1
              className={`display-5 fw-bold lh-1 mb-3 ${selectors.textColor(
                theme
              )}  animate__animated animate__fadeInDown`}
            >
              The <span className="tiktok">Ingenious</span>{" "}
              <span className={selectors.textColor(theme)}>Full Stack</span>
            </h1>
            <p
              className={`lead ${selectors.textColor(
                theme
              )} animate__animated animate__fadeInLeft`}
            >
              Hello. My name is Erick Pacheco from Boston. I am learning to code
              with React and other frameworks. I consider myself a backend
              developer.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                className="btn bg-tiktok-red btn-lg px-4 me-md-2 shadow-lg animate__animated animate__fadeInDown"
                to="/projects"
              >
                Erick's Projects
              </Link>
              <Link
                className="btn bg-tiktok-aqua btn-lg px-4 shadow-lg animate__animated animate__fadeInUp"
                to="/about"
              >
                About Erick
              </Link>
            </div>
            <div className="my-3 animate__animated animate__fadeInLeft">
              <Themer />
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
