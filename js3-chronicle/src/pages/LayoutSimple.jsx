import React, { Children } from "react";
import SearchHeaderBar from "../components/SearchHeaderBar";
import SidebarNav from "../components/SidebarNav";

export default function LayoutSimple({ sidebarContent, mainContent }) {
  return (
    <div>
      <section>
        <SearchHeaderBar />
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <SidebarNav sidebarContent={sidebarContent}></SidebarNav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              {mainContent}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
