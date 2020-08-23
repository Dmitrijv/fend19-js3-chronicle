import React from "react";
import { useState, useEffect } from "react";

export default function SearchPage(props) {
  // console.log("search component");
  // console.log(props);
  const [searchParameter, setSearchParameter] = useState("");

  useEffect(() => {
    // console.log("updating search component");
    setSearchParameter(props.match.params.searchParameter);
  }, []);

  return (
    <div>
      <h5>Search results for "{searchParameter}"</h5>
    </div>
  );
}
