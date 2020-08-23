import React from "react";
import { useEffect, useState } from "react";
import pdfLogo from "./../pdfLogo.svg";

export default function NewspaperPageCard({ pageNumber = 1, pageDataUrl = "google.com" }) {
  const [pagePdfUrl, setPagePdfUrl] = useState({});
  function fetchPageDetails() {
    fetch(pageDataUrl)
      .then(res => res.json())
      .then(result => {
        setPagePdfUrl(result.pdf);
      });
  }
  useEffect(() => {
    fetchPageDetails(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card newspaper-page-card">
      <a className="noStyle" href={pagePdfUrl} target="_blank" rel="noopener noreferrer">
        <img className="card-img-top" src={pdfLogo} alt="pdf link to page" />
      </a>
      <div className="card-footer">
        <h5 className="card-title text-center">Page #{pageNumber}</h5>
      </div>
    </div>
  );
}
