import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div className="container">
      <header className="bs-docs-section">
        <div className="jumbotron">
          <h3>Javascript 3 - Chronicle Newspaper Assignment</h3>
          <p className="lead">
            Dmitrij Velström, Nackademin <br /> 2020-08-21
          </p>
        </div>
      </header>
      {children}
    </div>
  );
}
