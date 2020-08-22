import React from "react";
import { Link } from "react-router-dom";
import SearchHeaderBar from "../components/SearchHeaderBar";
import StateSelectionSidebar from "../components/StateSelectionSidebar";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <header>
        <SearchHeaderBar />
      </header>
      <body>
        <div class="container-fluid">
          <div class="row">
            <StateSelectionSidebar></StateSelectionSidebar>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}
