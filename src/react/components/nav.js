import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { graphql } from "react-apollo";
import { userQuery } from "../../graphql/login";
import { validateNonEmptyString } from "../../util/validators";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler() {
    this.setState({
      hamburgerOpen: !this.state.hamburgerOpen
    });
  }

  _closeNavMenu() {
    this.setState({
      hamburgerOpen: false
    });
  }

  render() {
    const { user } = this.props;

    // If user is not logged in, hide nav
    if (!validateNonEmptyString(user.team)) {
      return <div />;
    }

    return (
      <nav className="c-nav">
        <div className="c-nav__main">
          <div
            onClick={() => this._clickHandler()}
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
              <NavLink
                activeClassName="is-active"
                exact
                className="c-nav__link"
                to={`${process.env.PUBLIC_URL}/`}
                onClick={() => this._closeNavMenu()}
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                className="c-nav__link"
                to={`${process.env.PUBLIC_URL}/about`}
                onClick={() => this._closeNavMenu()}
              >
                About
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                className="c-nav__link"
                to={`${process.env.PUBLIC_URL}/createWorkflow`}
                onClick={() => this._closeNavMenu()}
              >
                Quizzes
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                className="c-nav__link"
                to={`${process.env.PUBLIC_URL}/videos`}
                onClick={() => this._closeNavMenu()}
              >
                Videos
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                className="c-nav__link"
                to={`${process.env.PUBLIC_URL}/demo`}
                onClick={() => this._closeNavMenu()}
              >
                Demo
              </NavLink>
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
