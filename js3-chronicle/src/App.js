import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/dashboard.css";
import "./scss/App.scss";

import LayoutSimple from "./pages/LayoutSimple";
import AboutSection from "./components/AboutSection";
import StatesMenuList from "./components/StatesMenuList";
import StateNewspapers from "./components/StateNewspapers";

function App() {
  const [newspaperList, setNewspaperList] = useState({});

  function fetchNewspaperList() {
    fetch("https://chroniclingamerica.loc.gov/newspapers.json")
      .then(res => res.json())
      .then(result => {
        setNewspaperList(result.newspapers);
      });
  }

  useEffect(() => {
    fetchNewspaperList();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path={["/about"]}>
            <LayoutSimple sidebarContent={<StatesMenuList />} mainContent={<AboutSection />} />
          </Route>
          <Route path={["/state"]}>
            <LayoutSimple
              sidebarContent={<StatesMenuList newspaperList={newspaperList} />}
              mainContent={<StateNewspapers />}
            />
          </Route>
          <Route path={["/state", "/"]}>
            <LayoutSimple
              sidebarContent={<StatesMenuList newspaperList={newspaperList} />}
              mainContent={<StateNewspapers />}
            />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
