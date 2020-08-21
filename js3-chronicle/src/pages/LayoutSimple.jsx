import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <header>
        <div className="jumbotron">
          <h3>Javascript 3 - Assigment 3</h3>
          <p className="lead">
            Dmitrij Velström, Nackademin <br /> 2020-08-21
          </p>
        </div>
      </header>
      {children}
    </div>
  );
}
