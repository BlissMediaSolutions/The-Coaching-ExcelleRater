import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

const tableStructure = [
  {
    dataField: "wfname",
    className: "results__table-quiz cursor-pointer",
    title: "Workflow"
  },
  {
    dataField: "playername",
    className: "results__table-player-name cursor-pointer",
    title: "Player"
  },
  {
    dataField: "wfdate",
    className: "results__table-player-name cursor-pointer",
    title: "Date Completed"
  },
  {
    dataField: "totalscore",
    className: "results__table-score cursor-pointer",
    title: "Score"
  }
];

export default class TeamResults extends Component {
  render() {
    const { options, results } = this.props;

    return (
      <div className="container">
        <h3 className="results__Heading">Completed Workflows</h3>
        <div>
          <BootstrapTable
            data={results}
            options={options}
            className="results__table-layout"
            trClassName="cursor-pointer"
            hover
            responsive
            striped
            bordered
            condensed
          >
            {tableStructure.map((item, index) => {
              const { dataField, className, title } = item;
              let icon = null;
              if (options.sortName === dataField) {
                icon =
                  options.sortOrder === "asc" ? (
                    <i className="fa fa-chevron-up" />
                  ) : (
                    <i className="fa fa-chevron-down" />
                  );
              }
              return (
                <TableHeaderColumn
                  key={index}
                  isKey={index === 0}
                  dataField={dataField}
                  className={className}
                  dataSort={true}
                >
                  <span className="d-inline-flex w-100 justify-content-between">
                    {title}
                    {icon}
                  </span>
                </TableHeaderColumn>
              );
            })}
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
