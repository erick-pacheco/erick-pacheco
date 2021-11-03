import React from "react";
import Header from "../Components/Header";

export default function Contact() {
  return (
    <>
      <div className="container py-2">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Contact Erick</h1>
            <p className="col-md-8 fs-4">
              Got any projects? I'd be happy to collaborate on open source
              projects. Please let's grab coffee if you have any ideas for
              projects that would help our community.
            </p>

            <div
              class="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-primary">
                <i class="far fa-envelope"></i> Send Email
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>GitHub</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button className="btn btn-outline-light" type="button">
                <i class="fab fa-github"></i> See @erick-pacheco on GitHub
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>LinkedIn</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                <i class="fab fa-linkedin"></i> See @erick-p on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}
