import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { resultsQuery, updateResults } from "../../graphql/results";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import Banner from "../components/common/banner";
import Preloader from "../components/common/preloader";

import { USER_ID } from "../../constants/storageTokens";
import { TEAM_RESULTS } from "../../graphql/types";

const tableStructure = [
  {
    dataField: "wfname",
    className: "results__table-quiz",
    title: "Workflow"
  },
  {
    dataField: "playername",
    className: "results__table-player-name",
    title: "Player"
  },
  {
    dataField: "wfdate",
    className: "results__table-player-name",
    title: "Date Completed"
  },
  {
    dataField: "totalscore",
    className: "results__table-score",
    title: "Score"
  }
];

class ResultsCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sortName: undefined,
      sortOrder: undefined
    };
  }

  componentDidMount() {
    const { results, updateResults } = this.props;
    console.log(results);
    if (results.teamResults.length < 1) {
      const variables = {
        coachid: sessionStorage.getItem(USER_ID)
      };
      axios
        .post("/getworkflowstats.php", variables)
        .then(response => {
          this.setState({
            loading: false
          });
          updateResults({
            variables: { type: TEAM_RESULTS, data: response.data }
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  onSortChange = (sortName, sortOrder) => {
    this.setState({
      sortName,
      sortOrder
    });
  };

  onRowClick = data => {
    console.log(data);
  };

  render() {
    const { results } = this.props;
    const { loading, sortName, sortOrder } = this.state;

    if (loading) {
      return <Preloader />;
    }

    console.log(results.teamResults);

    const options = {
      sortName: sortName,
      sortOrder: sortOrder,
      sortIndicator: false,
      onSortChange: this.onSortChange,
      onRowClick: this.onRowClick
    };

    console.log(sortName, sortOrder);

    return (
      <div className="mb-footer">
        <Banner
          title="Workflow Results"
          bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"
        />
        <div className="container">
          <h3 className="results__Heading">Completed Workflows</h3>
          <div>
            <BootstrapTable
              data={results.teamResults}
              options={options}
              className="results__table-layout"
              hover
              responsive
              striped
              bordered
              condensed
            >
              {tableStructure.map((item, index) => {
                const { dataField, className, title } = item;
                let icon = null;
                if (sortName === dataField) {
                  icon =
                    sortOrder === "asc" ? (
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
      </div>
    );
  }
}

export default compose(
  graphql(resultsQuery, {
    props: ({ data: { results } }) => ({
      results
    })
  }),
  graphql(updateResults, { name: "updateResults" })
)(ResultsCoach);
