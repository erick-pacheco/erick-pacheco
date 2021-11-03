import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Header from "../Components/Header";
import WelcomeHero from "../Components/WelcomeHero";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Projects from "../Pages/Projects";

// You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*> always matches

export default function RenderRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomeHero />
        </Route>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div
      className="container"
      style={{
        minHeight: window.screen.availHeight,
        minWidth: window.screen.availWidth,
      }}
    >
      <p>
        No match for <code>{location.pathname}</code>
      </p>
      <p>returning home in 3 seconds</p>
    </div>
  );
}
