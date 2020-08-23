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
              <th>#</th>
              <th>Title</th>
              <th>lccn</th>
            </tr>
          </thead>
          <tbody>
            {relevantNewspapers.map((newspaper, index) => {
              const sanitizedNewspaperTitle = newspaper.title.replace(" [volume]", "");
              index++;
              return (
                <tr key={newspaper.lccn}>
                  <td>{index}</td>
                  <td>{sanitizedNewspaperTitle}</td>
                  <td>
                    <Link to={`/newspaper/${newspaper.lccn}`}>{newspaper.lccn}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
