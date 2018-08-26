import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
import { userQuery } from "../../graphql/login";

// Pages
import Home from "../pages/home";
import Login from "../pages/login";
import About from "../pages/about";
import Signup from "../pages/signup";
import Video from "../pages/video";
import CreateWorkflow from "../pages/createWorkflow";
import Quiz from "../pages/Quiz";
import { validateNonEmptyString } from "../../util/validators";

class Routes extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        {// if there is a team to the user(is logged in)
        validateNonEmptyString(user.team) ? (
          <Switch>
            <Route path={`/`} exact component={Home} />
            <Route
              path={`/about`}
              exact
              component={About}
            />
            <Route
              path={`/login`}
              exact
              component={Login}
            />
            <Route
              path={`/signup`}
              exact
              component={Signup}
            />
            <Route
              path={`/videos`}
              exact
              component={Video}
            />
            <Route
              path={`/createWorkflow`}
              exact
              component={CreateWorkflow}
            />
             <Route
              path={`/quiz`}
              exact
              component={Quiz}
            />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route
              path={`/`}
              exact
              component={Login}
            />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    );
  }
}

export default graphql(userQuery, {
  props: ({ data: { user } }) => ({
    user
  })
})(Routes);
