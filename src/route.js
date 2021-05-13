import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './Home/Home';
import Projects from './Projects/Projects';
import ProjectOne from './ProjectPages/ProjectOne';
import ProjectTwo from './ProjectPages/ProjectTwo';
import ProjectThree from './ProjectPages/ProjectThree';
import ProjectFour from './ProjectPages/ProjectFour';
import Teams from './Teams/Teams';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function RouteDetails() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/projectOne">
            <ProjectOne />
          </Route>
          <Route path="/projectTwo">
            <ProjectTwo />
          </Route>
          <Route path="/projectThree">
            <ProjectThree />
          </Route>
          <Route path="/projectFour">
            <ProjectFour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

