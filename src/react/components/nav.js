import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { graphql } from "react-apollo";
import { userQuery } from "../../graphql/login";

const coach = [
  { path: "", name: "Home" },
  { path: "createWorkflow", name: "Workflow" },
  { path: "upload", name: "Upload" },
  { path: "results", name: "Results" }
];
const player = [
  { path: "", name: "Home" },
  { path: "sequence", name: "Sequences" },
  { path: "results", name: "Results" }
];
const noLogin = [
  { path: "", name: "Home" },
  { path: "login", name: "Login" },
  { path: "about", name: "About" },
  { path: "demo", name: "Demo" }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    };
  }

  _clickHandler = () => {
    this.setState({
      hamburgerOpen: !this.state.hamburgerOpen
    });
  };

  logoutHandler = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const { user } = this.props;

    let navOptions = [];
    let navClassName = "c-nav__link ";
    switch (user.level) {
      case "1": {
        // coach
        navOptions = coach;
        navClassName += "c-nav__link--coach";
        break;
      }
      case "2": {
        // player
        navOptions = player;
        navClassName += "c-nav__link--player";
        break;
      }
      default: {
        // not logged in
        navOptions = noLogin;
        navClassName += "c-nav__link--no";
        break;
      }
    }

    return (
      <nav className="c-nav">
        <div className="c-nav__main">
          <div
            onClick={this._clickHandler}
            className={`${
              this.state.hamburgerOpen ? "c-nav__hamburger-open" : ""
            } c-nav__hamburger`}
          >
            <span className="c-nav__hamburger-bar" />
            <span className="c-nav__hamburger-bar" />
            <span className="c-nav__hamburger-bar" />
          </div>
          <div
            className={`${
              this.state.hamburgerOpen
                ? "c-nav__menu-open"
                : "c-nav__menu-closed"
            } c-nav__items`}
          >
            <div className="c-nav__item-wrapper">
              {navOptions.map(n => (
                <NavLink
                  key={"key-" + n.path}
                  activeClassName="is-active"
                  exact
                  className={navClassName}
                  to={`/${n.path}`}
                  onClick={this._clickHandler}
                >
                  {n.name}
                </NavLink>
              ))}
              {user.level ? (
                <NavLink
                  to=""
                  className={navClassName}
                  onClick={this.logoutHandler}
                >
                  Logout
                </NavLink>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default graphql(userQuery, {
  props: ({ data: { user } }) => ({
    user
  })
})(Nav);
