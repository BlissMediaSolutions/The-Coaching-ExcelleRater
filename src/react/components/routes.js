import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
import { userQuery } from "../../graphql/login";

// Pages
import Home from "../pages/home";
import Login from "../pages/login";
import About from "../pages/about";
import VideoFlow from "../pages/videoFlow";
import CreateWorkflow from "../pages/createWorkflow";
import Results from "../pages/results";
// import Quiz from "../pages/Quiz";

const coach = [
  { path: "/", component: Home },
  { path: "/createWorkflow", component: CreateWorkflow },
  { path: "/results", component: Results }
];
const player = [
  { path: "/", component: Home },
  { path: "/sequence", component: VideoFlow },
  { path: "/results", component: Results }
];
const noLogin = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login }
];

class Routes extends Component {
  render() {
    const { user } = this.props;

    console.log(user.level)

    let routes = [];
    switch (user.level) {
      case "1": {
        // coach
        routes = coach;
        break;
      }
      case "2": {
        // player
        routes = player;
        break;
      }
      default: {
        // not logged in
        routes = noLogin;
        break;
      }
    }

    console.log(routes);

    return (
      <Switch>
        {routes.map(r => (
          <Route key={r.path} exact path={r.path} component={r.component} />
        ))}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default graphql(userQuery, {
  props: ({ data: { user } }) => ({
    user
  })
})(Routes);
