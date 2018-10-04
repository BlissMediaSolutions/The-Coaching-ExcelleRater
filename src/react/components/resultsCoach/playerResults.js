import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

import DetailedAnswer from "./detailedAnswer";

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
  state = {
    detailedAnswer: undefined
  };

  onRowClick = data => {
    this.setState({
      detailedAnswer: data
    });
  };

  backToPlayerResults = () => {
    this.setState({
      detailedAnswer: undefined
    });
  };

  render() {
    const { onBackClick, results, workflowName } = this.props;
    const { detailedAnswer } = this.state;

    const playerName = results ? results[0].playername : "";

    const options = {
      onRowClick: this.onRowClick
    };

    return (
      <div className="container">
        {detailedAnswer ? (
          <div className="back-button mt-2" onClick={this.backToPlayerResults}>
            <i className="fa fa-chevron-left mr-2" />
            <a>Back To Player Results</a>
          </div>
        ) : (
          <div className="back-button mt-2" onClick={onBackClick}>
            <i className="fa fa-chevron-left mr-2" />
            <a>Back To Team Results</a>
          </div>
        )}

        <h3 className="results__Heading">
          {playerName} - {workflowName}
        </h3>
        <div>
          {detailedAnswer ? (
            <DetailedAnswer {...detailedAnswer} />
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}
