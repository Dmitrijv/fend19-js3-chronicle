import React from "react";
import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

export default function NewspaperPage(props) {
  const lccn = props.match.params.lccn;
  const [newspaperData, setNewspaperData] = useState({});
  function fetchNewspaperData() {
    fetch(`https://chroniclingamerica.loc.gov/lccn/${lccn}.json`)
      .then(res => res.json())
      .then(result => {
        setNewspaperData(result);
      });
  }

  useEffect(() => {
    fetchNewspaperData();
  }, []);

  const newspaperIssues = newspaperData.issues !== undefined ? newspaperData.issues : [];
  const sanitizedNewspaperTitle = newspaperData.name !== undefined ? newspaperData.name.replace(" [volume]", "") : "";

  return (
    <div className="about-section ">
      <FadeIn delay={300} transitionDuration={500}>
        <div className="notice-container">
          <div className="notice notice-lg">
            <h4>
              <strong>Newspaper: </strong> {sanitizedNewspaperTitle}
            </h4>
          </div>
          <div className="notice notice-info">
            <div>
              <strong>lccn: </strong> {newspaperData.lccn}
            </div>
            <div>
              <strong>Publisher: </strong> {newspaperData.publisher}
            </div>
            <div>
              <strong>Place of publication: </strong> {newspaperData.place_of_publication}
            </div>
            <div>
              <strong>Running time: </strong> {newspaperData.start_year}-{newspaperData.end_year}
            </div>
          </div>
        </div>

        <div>
          <h5>{newspaperData.issues ? newspaperData.issues.length : 0} issues on record</h5>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Issue #</th>
                <th>Issue Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {newspaperIssues.map((issue, index) => {
                const issueNumber = index + 1;
                return (
                  <tr key={index}>
                    <td>{issueNumber}</td>
                    <td>{issue.date_issued}</td>
                    <td>
                      <Link to={`/newspaper/${newspaperData.lccn}/issue/${issue.date_issued}/${issueNumber}`}>
                        explore
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  );
}
