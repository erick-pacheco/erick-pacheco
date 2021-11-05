import React from "react";
import Header from "../Components/Header";
import View from "../Components/View";
import { animated, animations } from '../theme/animations'

export default function Contact() {
  return (
    <>
      <Header />
      <View>
        <div className="container py-2">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className={animated('display-5 fw-bold', animations.animate__backInDown)}>Contact Erick</h1>
              <p className={animated('col-md-8 fs-4', animations.animate__backInLeft)}>
                Got any projects? I'd be happy to collaborate on open source
                projects. Please let's grab coffee if you have any ideas for
                projects that would help our community.
              </p>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a href="mailto:linarespachecoerick@gmail.com" type="button" className={animated('btn tiktok-link', animations.animate__fadeInUpBig)}>
                  <i className="far fa-envelope"></i> Send Email
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-md-stretch">
            <div className={animated('col-md-6', animations.animate__fadeInRight)}>
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>GitHub</h2>
                <p>
                  GitHub is where over 73 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.
                </p>
                <a href='https://github.com/erick-pacheco/erick-pacheco' type='button' className="btn btn-outline-light" type="button">
                  <i className="fab fa-github"></i> See @erick-pacheco on GitHub
                </a>
              </div>
            </div>
            <div className={animated("col-md-6", animations.animate__fadeInLeft)}>
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>LinkedIn</h2>
                <p>
                  Or, keep it light and add a border for some added definition to
                  the boundaries of your content. Be sure to look under the hood
                  at the source HTML here as we've adjusted the alignment and
                  sizing of both column's content for equal-height.
                </p>
                <a href='https://www.linkedin.com/in/erick-p/' type='button' className="btn btn-outline-secondary" type="button">
                  <i className="fab fa-linkedin"></i> See @erick-p on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </View>
    </>
  );
}
