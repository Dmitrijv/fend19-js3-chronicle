import React from "react";
import { Link } from "react-router-dom";

export default function StatesMenuList({ newspaperList }) {
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

  console.log(stateOccurrenceStats);

  return (
    <ul className="nav flex-column">
      {Object.keys(stateOccurrenceStats).map(stateName => {
        const newspaperCount = stateOccurrenceStats[stateName];
        return (
          <Link to={`/states/${stateName}`}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {stateName}{" "}
                <span className="badge badge-primary badge-pill bg-dark text-white"> {newspaperCount} </span>
              </a>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
