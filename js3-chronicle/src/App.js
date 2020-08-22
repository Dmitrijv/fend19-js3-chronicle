import React from "react";
import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./pages/LayoutSimple";

import "./css/bootstrap.min.css";
import "./css/dashboard.css";
import "./scss/App.scss";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path={["/about", "/"]}>
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
