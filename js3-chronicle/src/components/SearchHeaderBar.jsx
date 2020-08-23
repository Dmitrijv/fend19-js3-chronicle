import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navigate, useNavigate } from "@reach/router";
import SearchPage from "./../pages/SearchPage";

export default function SearchHeaderBar() {
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    console.log("useEffect in SearchHeaderBar");
    console.log(searchFilter);
    navigate(`/search/${searchFilter}`, { state: { searchFilter: searchFilter } });
  }, []);

  function onSearchbarKeyPress(event) {
    if (event.charCode === 13) {
      //   window.location.href = `/search/${event.currentTarget.value}`;
      console.log(event.currentTarget.value);
      setSearchFilter(event.currentTarget.value);
      navigate(`/search/${event.currentTarget.value}`, { replace: true });
      //   navigateByUrl(`/search/${event.currentTarget.value}`);
      //   history.push(`/search/${event.currentTarget.value}`);
      //adaw
    }
  }

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to={`/home`}>
        <div>USA Chronicle</div>
      </Link>

      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search by title"
        aria-label="Search"
        onKeyPress={onSearchbarKeyPress}
      />

      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Link className="nav-link" to={`/about`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
