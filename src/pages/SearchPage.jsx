import React from "react";
import NewspapersTable from "./../components/NewspapersTable";
import { useEffect } from "react";

const MIN_SEARCH_FILTER_LENGTH = 3;

export default function SearchPage(props) {
  const searchFilter =
    props.match.params.searchFilter !== undefined ? props.match.params.searchFilter.toLowerCase() : "";
  const searchResultList = props.newspaperList.filter
    ? props.newspaperList.filter(newspaper => newspaper.title.toLowerCase().includes(searchFilter))
    : [];

  // remove active class from currently clicked menu item
  [].forEach.call(document.querySelectorAll("nav.sidebar li.nav-item.active"), function(item) {
    item.classList.remove("active");
  });

  if (searchFilter.length < MIN_SEARCH_FILTER_LENGTH) {
    return (
      <div className="about-section">
        <div className="alert alert-danger" role="alert">
          search input must be at least {MIN_SEARCH_FILTER_LENGTH} characters
        </div>
      </div>
    );
  } else if (searchResultList.length === 0) {
    return (
      <div className="about-section">
        <h5>
          found {searchResultList.length} results for "{searchFilter}"
        </h5>
      </div>
    );
  }

  return (
    <div className="about-section">
      <h5>
        found {searchResultList.length} results for "{searchFilter}"
      </h5>
      <NewspapersTable newspaperList={searchResultList} />
    </div>
  );
}
