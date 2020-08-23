import React from "react";

export default function NewspaperPageCard({ pageNumber = 1, pdfUrl = "https://via.placeholder.com/362x180" }) {
  return (
    <div className="card newspaper-page-card">
      <img className="card-img-top" src={pdfUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Page #{pageNumber}</h5>
      </div>
    </div>
  );
}
