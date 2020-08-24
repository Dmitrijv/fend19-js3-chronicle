import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const columns = [
  {
    dataField: "index",
    text: "#",
    classes: "tiny-column",
    headerClasses: "tiny-column"
  },
  {
    dataField: "lccnLink",
    text: "lccn",
    classes: "small-column",
    headerClasses: "small-column"
  },
  {
    dataField: "title",
    text: "title"
  },
  {
    dataField: "state",
    text: "state",
    classes: "text-right",
    headerClasses: "text-right"
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

const lccnLinkFormatter = function(lccn) {
  return <Link to={`/newspaper/${lccn}`}>{lccn}</Link>;
};

export default function NewspapersTable({ newspaperList }) {
  newspaperList = newspaperList.map((newspaper, index) => {
    newspaper.index = index + 1;
    newspaper.lccnLink = lccnLinkFormatter(newspaper.lccn);
    newspaper.title = newspaper.title.replace(" [volume]", "");
    return newspaper;
  });

  useEffect(() => {
    const tabl = document.querySelector("div.react-bootstrap-table table");
    if (tabl) {
      tabl.classList.replace("table-bordered", "table-striped");
    }
  }, []);

  return (
    <BootstrapTable
      keyField="lccn"
      data={newspaperList}
      columns={columns}
      pagination={paginationFactory(pagnationOptions)}
    />
  );
}
