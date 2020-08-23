import React from "react";

export default function SearchPage(props) {
  const searchFilter = props.match.params.searchFilter;

  return (
    <div>
      <h5>Search results for "{searchFilter}"</h5>
    </div>
  );
}
