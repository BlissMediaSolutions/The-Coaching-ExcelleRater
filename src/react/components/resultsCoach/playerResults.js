import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

const tableStructure = [
  {
    dataField: "question",
    className: "results__table-player-name cursor-pointer",
    title: "Question Answered"
  },
  {
    dataField: "score",
    className: "results__table-score cursor-pointer",
    title: "Score"
  }
];

export default class PlayerResults extends Component {
  render() {
    const { onBackClick, results, workflowName } = this.props;

    const playerName = results ? results[0].playername : "";

    return (
      <div className="container">
        <div className="back-button mt-2" onClick={onBackClick}>
          <i className="fa fa-chevron-left mr-2" />
          <a>Back To Results</a>
        </div>
        <h3 className="results__Heading">{playerName} - {workflowName}</h3>
        <div>
          <BootstrapTable
            data={results.teamResults}
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

              return (
                <TableHeaderColumn
                  key={index}
                  isKey={index === 0}
                  dataField={dataField}
                  className={className}
                  dataSort={true}
                >
                  {title}
                </TableHeaderColumn>
              );
            })}
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
