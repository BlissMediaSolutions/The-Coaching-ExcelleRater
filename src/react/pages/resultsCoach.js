import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { resultsQuery, updateResults } from "../../graphql/results";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import Banner from "../components/common/banner";
import Preloader from "../components/common/preloader";

import { USER_ID } from "../../constants/storageTokens";
import { TEAM_RESULTS } from "../../graphql/types";

/*
const tableStructure = [
  {
    dataField: "playerid",
    className: "results__table-player-name",
    title: 'Player Id'
  },
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
*/

class ResultsCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
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

  render() {
    const { results } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <Preloader />;
    }

    console.log(results.teamResults);

    return (
      <div className="mb-footer">
        <Banner
          title="Workflow Results"
          bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"
        />
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
