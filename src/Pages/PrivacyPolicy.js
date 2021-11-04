import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import View from "../Components/View";
import { selectors, useStateValue } from "../data";

export default function PrivacyPolicy() {
  const [{ theme }] = useStateValue()
  return (
    <>
      <View>
        <Header />
        <div className='container'>
          <div className="col-lg-12 mx-auto p-3 py-2">

            <div class="alert alert-info" role="alert">
              Rest Assured, we do not track any of your information! And we do not use cookies. <i class="fas fa-cookie-bite"></i>
            </div>
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
              <a
                href="/"
                className="d-flex align-items-center text-dark text-decoration-none"
              >
                <span className={`fs-4 ${selectors.textColor(theme)}`}>
                  <i class="fas fa-exclamation-circle"></i> Privacy Policy
                </span>
              </a>
            </header>
            <main>
              <h1 className={selectors.textColor(theme)}>We Do NOT Track Your Information </h1>
              <p className={`fs-5 col-md-8 ${selectors.textColor(theme)}`}>
                Do Not Track (DNT) is a way to keep users’ online behavior from being followed across the Internet by behavioral advertisers, analytics companies, and social media sites. It combines both technology (a way to let users signal whether they want to be tracked) as well as a policy framework for how companies should respond to that signal.

              </p>
              <div className="mb-5">
                <a
                  href="https://www.eff.org/issues/do-not-track"
                  className="btn btn-primary btn-lg px-4"
                >
                  Learn More
                </a>
              </div>
              <hr className="col-3 col-md-2 mb-5" />
              <div className="row g-5">
                <div className="col-md-6">
                  <h2 className={selectors.textColor(theme)}>Using Website Template</h2>
                  <p className={selectors.textColor(theme)}>
                    Quickly and easily get started with Bootstrap's compiled,
                    production-ready files with this barebones example featuring some
                    basic HTML and helpful links. Download all our examples to get
                    started.

                  </p>
                  <p className={selectors.textColor(theme)}>
                    Ready to beyond the starter template? Check out this open
                    source projects which you can quickly duplicate to a new GitHub
                    repository.

                  </p>
                  <ul className={`icon-list ${selectors.textColor(theme)}`}>
                    <li>
                      <a href="#" class="link-info">Fork Template from GitHub</a>

                    </li>
                    <li >
                      <a href="#" class="link-secondary">Support</a>
                    </li>
                  </ul>
                </div>

              </div>
            </main>
          </div>
        </div>
      </View>

    </>
  );
}
