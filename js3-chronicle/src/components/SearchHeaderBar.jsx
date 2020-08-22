import React from "react";
import { Link } from "react-router-dom";

export default function SearchHeaderBar() {
  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <Link class="navbar-brand col-sm-3 col-md-2 mr-0" to={`/about`}>
        <div>USA Chronicles</div>
      </Link>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search by title"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <Link class="nav-link" to={`/about`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
