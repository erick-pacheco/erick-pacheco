import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Header from "../Components/Header";
import View from "../Components/View";
import WelcomeHero from "../Components/WelcomeHero";
import { selectors, useStateValue } from "../data";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Projects from "../Pages/Projects";

export default function RenderRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<WelcomeHero />} />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoMatch />} />
      </Switch>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  const [{ theme }] = useStateValue();

  return (
    <View>
      <div
        className="mx-5 p-5"
        style={{
          minHeight: window.screen.availHeight,
          minWidth: window.screen.availWidth,
        }}
      >
        <p className={selectors.textColor(theme, "mx-5 py-5 tiktok-link")}>
          No match for route &nbsp;
          <code className="py-1 px-5 bg bg-light">{location.pathname}</code>
        </p>
        <p className={selectors.textColor(theme, "mx-5")}>
          You'll return Home in 3 secs
        </p>
      </div>
    </View>
  );
}
