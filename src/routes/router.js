import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";
import Header from "../Components/Header";
import View from "../Components/View";
import WelcomeHero from "../Components/WelcomeHero";
import { selectors, useStateValue } from "../data";
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
  let history = useHistory()
  const [{ theme }] = useStateValue()

  function delayandGo() {
    setTimeout(() => history.push('/'), 3000)
  }

  useEffect(() => delayandGo(), [])

  return (
    <View>
      <div
        className="mx-5 p-5"
        style={{
          minHeight: window.screen.availHeight,
          minWidth: window.screen.availWidth,
        }}
      >
        <p className={selectors.textColor(theme, 'mx-5 p-5 tiktok-link')}>No match for route &nbsp;
          <code className='py-1 px-5 bg bg-light'>{location.pathname}</code>
        </p>
        <p className={selectors.textColor(theme, 'mx-5')}>You'll return Home in 3 secs</p>
      </div>
    </View>
  );
}


