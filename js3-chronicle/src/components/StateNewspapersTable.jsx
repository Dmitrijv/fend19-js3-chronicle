import React from "react";

export default function StateNewspapersTable(props) {
  const stateName = props.match.params.stateName;
  console.log(stateName);
  console.log(props.newspaperList);
  return (
    <div>
      <h2>Newspapers in Wisconsin</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>lccn</th>
              <th>State</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>Sed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
