import React from "react";
import { useEffect } from "react";

export default function SearchPage(props) {
  console.log("search component");
  //   console.log(props);
  useEffect(() => {
    console.log(props.match.params.searchParameter);
  }, []);

  return (
    <div>
      <h5>Search results for "{props.match.params.searchParameter}"</h5>
    </div>
  );
}
