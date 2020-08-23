import React from "react";

export default function NewspaperIssuePage(props) {
  const lccn = props.match.params.lccn;
  const dateIssued = props.match.params.dateIssued;
  console.log({ lccn, dateIssued });
  return <div>this is an issue, yo</div>;
}
