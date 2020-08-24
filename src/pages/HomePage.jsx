import React from "react";
import { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function HomePage({ newspaperList = [] }) {
  // clear selected usa state if any exist
  [].forEach.call(document.querySelectorAll("nav.sidebar li.nav-item.active"), function(item) {
    item.classList.remove("active");
  });

  useEffect(() => {
    const tabl = document.querySelector("div.react-bootstrap-table table");
    if (tabl) {
      tabl.classList.remove("table-bordered");
      tabl.classList.add("table-striped");
    }
  }, []);

  // map over all newspapers and build a dictionary of unique states with occurance counts as values
  let stateOccurrenceStats = newspaperList.reduce
    ? newspaperList.reduce((stats, newspaper) => {
        const stateName = newspaper.state;
        stats[stateName] = (stats[stateName] || 0) + 1;
        return stats;
      }, {})
    : [];

  return (
    <div className="about-section">
      <h5>
        API returned {newspaperList.length} newspaper records across {Object.keys(stateOccurrenceStats).length} states
      </h5>
      <br />
      <p>
        Select a state on the sidebar menu to list all recorded newspapers for that state. It is also possible to search
        for a specific newspaper by title substring.
      </p>
      <p>
        Data is pulled from{" "}
        <a href="https://chroniclingamerica.loc.gov/about/api/#json-views">chroniclingamerica.loc.gov</a>.
      </p>
      <p>
        Chronicling America provides access to information about historic newspapers and select digitized newspaper
        pages. For more information about the open source Chronicling America software please see the{" "}
        <a href="https://github.com/LibraryofCongress/chronam">LibraryOfCongress/chronam</a> GitHub site.
      </p>
      <p>
        <strong>[NOTE]</strong> You need to enable "Access Control-Allow-Origin - Unblock" extension for json data to
        load properly.
      </p>
    </div>
  );
}
