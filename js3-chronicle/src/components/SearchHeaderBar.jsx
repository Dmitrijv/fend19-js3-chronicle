import React from "react";

export default function SearchHeaderBar() {
  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        USA Chronicles
      </a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search by title"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
