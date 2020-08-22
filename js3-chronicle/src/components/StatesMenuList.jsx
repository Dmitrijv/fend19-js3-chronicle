import React from "react";
import { Link } from "react-router-dom";

export default function StatesMenuList({ newspaperList = [] }) {
  //   console.log(typeof newspaperList);
  //   console.log(newspaperList);

  // map over all newspapers and build a dictionary of unique states with occurance counts as values
  let stateOccurrenceStats = newspaperList.reduce
    ? newspaperList.reduce((stats, newspaper) => {
        const stateName = newspaper.state;
        stats[stateName] = (stats[stateName] || 0) + 1;
        return stats;
      }, {})
    : [];

  //console.log(stateOccurrenceStats);

  function updateActiveNavItem(event) {
    const thisItem = event.currentTarget;
    // remove active class from currently clicked menu item
    // should only be 1 but for sanity search for all possible
    [].forEach.call(document.querySelectorAll("li.nav-item.active"), function(item) {
      item.classList.remove("active");
    });
    // add active class to clicked menu item
    thisItem.classList.add("active");
  }

  return (
    <ul className="nav flex-column">
      {Object.keys(stateOccurrenceStats).map(stateName => {
        const newspaperCount = stateOccurrenceStats[stateName];
        return (
          <li className="nav-item" key={stateName} onClick={updateActiveNavItem}>
            <Link className="nav-link" to={`/state/${stateName}`}>
              {stateName} <span className="badge badge-primary badge-pill bg-dark text-white"> {newspaperCount} </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
