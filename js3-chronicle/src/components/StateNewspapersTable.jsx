import React from "react";

export default function StateNewspapersTable(props) {
  const selectedStateName = props.match.params.stateName;
  const relevantNewspapers = props.newspaperList.filter
    ? props.newspaperList.filter((newspaper) => newspaper.state === selectedStateName)
    : [];

  return (
    <div>
      <h5>
        {relevantNewspapers.length} newspapers in the state of {selectedStateName}
      </h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>LCCN number</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {relevantNewspapers.map((newspaper) => {
              const sanitizedNewspaperTitle = newspaper.title.replace(" [volume]", "");
              return (
                <tr key={newspaper.lccn}>
                  <td>{newspaper.lccn}</td>
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
