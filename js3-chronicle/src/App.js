import React from "react";

import "./css/bootstrap.min.css";
import "./css/dashboard.css";
import "./scss/App.scss";

import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./pages/LayoutSimple";
import AboutSection from "./components/AboutSection";
import StateNewspapers from "./components/StateNewspapers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/state">
            <LayoutSimple>
              <StateNewspapers></StateNewspapers>
            </LayoutSimple>
          </Route>
          <Route path={["/about", "/home", "/"]}>
            <LayoutSimple>
              <AboutSection />
            </LayoutSimple>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
