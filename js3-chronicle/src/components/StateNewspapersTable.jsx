import React from "react";
import { Link } from "react-router-dom";

export default function StateNewspapersTable(props) {
  const selectedStateName = props.match.params.stateName;
  const relevantNewspapers = props.newspaperList.filter
    ? props.newspaperList.filter(newspaper => newspaper.state === selectedStateName)
    : [];

  return (
    <div className="about-section">
      <h5>
        {relevantNewspapers.length} newspapers in the state of {selectedStateName}
      </h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>lccn</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {relevantNewspapers.map(newspaper => {
              const sanitizedNewspaperTitle = newspaper.title.replace(" [volume]", "");
              return (
                <tr key={newspaper.lccn}>
                  <td>
                    <Link to={`/newspaper/${newspaper.lccn}`}>{newspaper.lccn}</Link>
                  </td>
                  <td>{sanitizedNewspaperTitle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
