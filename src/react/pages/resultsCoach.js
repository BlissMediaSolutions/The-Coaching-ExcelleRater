import React, { Component } from "react";
import axios from "axios";
import { compose, graphql } from "react-apollo";
import { resultsQuery, updateResults } from "../../graphql/results";

import Banner from "../components/common/banner";
import Preloader from "../components/common/preloader";
import TeamResults from "../components/resultsCoach/teamResults";

import { USER_ID } from "../../constants/storageTokens";
import { TEAM_RESULTS, INDIVIDUAL_RESULTS } from "../../graphql/types";
import PlayerResults from "../components/resultsCoach/playerResults";

class ResultsCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      individualResults: false,
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
    const { updateResults } = this.props;
    const { playerid, workflowid, wfname } = data;

    this.setState({
      loading: true
    });

    const variables = {
      playerid,
      workflowid
    };
    axios
      .post("/getplayerstats.php", variables)
      .then(response => {
        this.setState({
          loading: false,
          individualResults: true
        });
        updateResults({
          variables: {
            type: INDIVIDUAL_RESULTS,
            data: { results: response.data, wfname: wfname }
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };

  onBackClick = () => {
    this.setState({
      individualResults: false
    });
  };

  render() {
    const { results } = this.props;
    const { loading, individualResults, sortName, sortOrder } = this.state;

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

    return (
      <div className="mb-footer">
        <Banner
          title="Workflow Results"
          bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"
        />
        {individualResults ? (
          <PlayerResults
            results={results.individualResults.results}
            workflowName={results.individualResults.wfname}
            onBackClick={this.onBackClick}
          />
        ) : (
          <TeamResults results={results.teamResults} options={options} />
        )}
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
