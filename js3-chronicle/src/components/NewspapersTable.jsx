import React from "react";
import { Link } from "react-router-dom";

export default function NewspapersTable({ newspaperList }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>lccn</th>
            <th className="text-right">State</th>
          </tr>
        </thead>
        <tbody>
          {newspaperList.map((newspaper, index) => {
            const sanitizedNewspaperTitle = newspaper.title.replace(" [volume]", "");
            index++;
            return (
              <tr key={newspaper.lccn}>
                <td>{index}</td>
                <td>{sanitizedNewspaperTitle}</td>
                <td>
                  <Link to={`/newspaper/${newspaper.lccn}`}>{newspaper.lccn}</Link>
                </td>
                <td className="text-right">{newspaper.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
