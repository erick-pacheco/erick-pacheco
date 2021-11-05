import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { selectors, useStateValue } from "../data";
import Themer from "../theme/Themer";

export default function Header() {
  const [{ theme }] = useStateValue();
  const path = useLocation()
  const { pathname } = path
  const navLinkCss = (match) => `nav-link ${pathname === match ? `tiktok-link shadow-lg active` : ''}`

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${selectors.textColor(theme)}`} to="/">
            Erick Pacheco
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={ navLinkCss('/about')} to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className={navLinkCss('/projects')} to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className={navLinkCss('/contact')} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/privacy"
                  className={navLinkCss('/privacy')}
                  data-bs-toggle="tooltip"
                  title="Site's Terms and Conditions"
                  data-bs-original-title="Another one here too"
                >
                  <i class="fas fa-exclamation-circle"></i> Privacy
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Themer />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
