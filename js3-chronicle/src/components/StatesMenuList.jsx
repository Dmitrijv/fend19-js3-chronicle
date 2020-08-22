import React from "react";

export default function StatesMenuList({ newspaperList }) {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Alabama
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Alaska
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Arizona
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Arkansas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          California
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Colorado
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Connecticut
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Delaware
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Florida
        </a>
      </li>
    </ul>
  );
}
