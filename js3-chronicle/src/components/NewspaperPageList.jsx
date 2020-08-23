import React from "react";
import Masonry from "react-masonry-css";
import NewspaperPageCard from "./NewspaperPageCard";

export default function NewspaperPageList({ pageList = [] }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 3
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {pageList.map((page, index) => {
          const pageNumber = index + 1;
          return <NewspaperPageCard key={pageNumber} pageNumber={pageNumber} />;
        })}
      </Masonry>

      <div className="card-deck"></div>
    </div>
  );
}
