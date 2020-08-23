import React from "react";
import NewspaperPageCard from "./NewspaperPageCard";

export default function NewspaperPageList({ pageList = [] }) {
  return (
    <div>
      <div className="card-columns">
        {pageList.map((page, index) => {
          const pageNumber = index + 1;
          return <NewspaperPageCard key={pageNumber} pageNumber={pageNumber} />;
        })}
      </div>
    </div>
  );
}
