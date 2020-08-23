import React from "react";
import pdfLogo from "./../pdfLogo.svg";

export default function NewspaperPageCard({ pageNumber = 1, pdfUrl = "https://via.placeholder.com/362x180" }) {
  return (
    <div className="card newspaper-page-card">
      <img className="card-img-top" src={pdfLogo} alt="view pdf" />
      <div className="card-footer">
        <h5 className="card-title text-center">Page #{pageNumber}</h5>
      </div>
    </div>
  );
}
