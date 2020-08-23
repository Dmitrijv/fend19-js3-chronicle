import React from "react";

import NewspapersTable from "../components/NewspapersTable";

export default function StateNewspapersPage(props) {
  const selectedStateName = props.match.params.stateName;
  const relevantNewspapers = props.newspaperList.filter
    ? props.newspaperList.filter(newspaper => newspaper.state === selectedStateName)
    : [];

  return (
    <div className="about-section">
      <h5>
        {relevantNewspapers.length} newspapers in the state of {selectedStateName}
      </h5>
      <NewspapersTable newspaperList={relevantNewspapers} />
    </div>
  );
}
