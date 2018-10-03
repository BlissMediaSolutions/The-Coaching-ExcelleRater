import React, { Component } from "react";
import { compose, graphql } from "react-apollo";
import { resultsQuery } from "../../graphql/results";
import { Container } from "reactstrap";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import Banner from "../components/common/banner";

const tableStructure = [
  {
    dataField: "question",
    className: "results__table-quiz",
    title: 'Question Completed'
  },
  {
    dataField: "score",
    className: "results__table-score",
    title: 'Score'
  },
]

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        videoData: [],
        players: []
      }
    };
  }

  render() {
    const { results } = this.props;

    const playerResults = results.individualResults.results
    const workflowVideos = results.individualResults.workflowVideos
    const workflow = results.individualResults.workflow
    const workflowName = workflow ? workflow.wfname : null
    
    const mergedData = playerResults ? playerResults.reduce((prev, current, index) => {
      const mergedPlayerData = {...current, ...workflowVideos[index]}

      if (index === 0) {
        return [mergedPlayerData]
      } else {
        return prev.concat(mergedPlayerData)
      }
    }, []) : []

    return (
      <div className="mb-footer">
        <Banner
          title="Workflow Results"
          bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"
        />

        <Container>
          <h3 className="results__Heading"> Results of Completed Workflow {workflowName ? `(${workflowName})` : ''} </h3>
          <div>
            <BootstrapTable
              data={mergedData}
              className="results__table-layout"
              hover
              responsive
              striped
              bordered
              condensed
            >
              {
                tableStructure.map((item, index) => {
                  const { dataField, className, title } = item;

                  return <TableHeaderColumn isKey={index === 0} dataField={dataField} className={className}>
                    {title}
                  </TableHeaderColumn>
                })
              }
            </BootstrapTable>
          </div>
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(resultsQuery, {
    props: ({ data: { results } }) => ({
      results
    })
  })
)(Results);
