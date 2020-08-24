import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function IssueTable({ issueList = [], lccn }) {
  const columns = [
    {
      dataField: "index",
      text: "issue #"
    },
    {
      dataField: "date_issued",
      text: "issue date"
    },
    {
      dataField: "issueLink",
      text: "details",
      classes: "text-center",
      headerClasses: "text-center"
    }
  ];

  const pagnationOptions = {
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: false,
    disablePageTitle: true,
    sizePerPageList: [15]
  };

  const issueLinkFormatter = function(lccn, date_issued, issueNumber) {
    return <Link to={`/newspaper/${lccn}/issue/${date_issued}/${issueNumber}`}>explore</Link>;
  };

  issueList = issueList.map((issue, index) => {
    issue.index = index + 1;
    issue.issueLink = issueLinkFormatter(lccn, issue.date_issued, issue.index);
    return issue;
  });

  useEffect(() => {
    const tabl = document.querySelector("div.react-bootstrap-table table");
    if (tabl) {
      tabl.classList.replace("table-bordered", "table-striped");
      tabl.classList.add("table-sm");
    }
  }, []);

  return (
    <BootstrapTable
      keyField="index"
      data={issueList}
      columns={columns}
      pagination={paginationFactory(pagnationOptions)}
    />
  );
}
