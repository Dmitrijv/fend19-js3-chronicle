import React from "react";
import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import NewspaperPageList from "../components/NewspaperPageList";

export default function NewspaperIssuePage(props) {
  const lccn = props.match.params.lccn;
  const dateIssued = props.match.params.dateIssued;
  const issueNumber = props.match.params.issueNumber;

  const [newspaperIssueData, setNewspaperIssueData] = useState({});
  function fetchNewspaperIssueData() {
    fetch(`https://chroniclingamerica.loc.gov/lccn/${lccn}/${dateIssued}/ed-1.json`)
      .then(res => res.json())
      .then(result => {
        setNewspaperIssueData(result);
      });
  }

  useEffect(() => {
    fetchNewspaperIssueData();
  }, []);

  const paperTitle =
    newspaperIssueData.title !== undefined ? newspaperIssueData.title.name.replace(" [volume]", "") : "";
  const numberOfPages = newspaperIssueData.pages !== undefined ? newspaperIssueData.pages.length : 0;
  return (
    <div className="about-section ">
      <FadeIn delay={300} transitionDuration={500}>
        <div className="notice-container">
          <div className="notice notice-lg">
            <h4>
              <strong>Issue #{issueNumber}: </strong> {paperTitle}
            </h4>
          </div>
          <div className="notice notice-info">
            <div>
              <strong>Newspaper lccn: </strong> {lccn}
            </div>
            <div>
              <strong>Date Issued: </strong> {dateIssued}
            </div>
          </div>
        </div>
        <div>
          <h5>{numberOfPages} pages on record</h5>
          <br />
          <NewspaperPageList pageList={newspaperIssueData.pages} />
        </div>
      </FadeIn>
    </div>
  );
}
