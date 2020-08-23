import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/dashboard.css";
import "./scss/App.scss";

import LayoutSimple from "./pages/LayoutSimple";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import StatesMenuList from "./components/StatesMenuList";
import StateNewspapersTable from "./components/StateNewspapersTable";
import SearchPage from "./pages/SearchPage";

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
          <Route
            path="/state/:stateName"
            render={props => {
              return (
                <LayoutSimple
                  sidebarContent={<StatesMenuList newspaperList={newspaperList} />}
                  mainContent={<StateNewspapersTable {...props} newspaperList={newspaperList} />}
                />
              );
            }}
          ></Route>
          <Route
            path={["/search/:searchParameter", "/search"]}
            render={props => {
              console.log("we are goin search boys");
              return (
                <LayoutSimple
                  sidebarContent={<StatesMenuList newspaperList={newspaperList} />}
                  mainContent={<SearchPage {...props} newspaperList={newspaperList} />}
                />
              );
            }}
          ></Route>
          <Route exact path={"/about"}>
            <LayoutSimple sidebarContent={<StatesMenuList />} mainContent={<AboutPage />} />
          </Route>
          <Route exact path={["/home", "/"]}>
            <LayoutSimple
              sidebarContent={<StatesMenuList newspaperList={newspaperList} />}
              mainContent={<HomePage newspaperList={newspaperList} />}
            />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
