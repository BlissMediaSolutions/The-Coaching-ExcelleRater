import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { graphql } from "react-apollo";
import { updateUser } from "../../graphql/login";

import Banner from "../components/banner";
import InlineError from "../components/common/inlineError";

import { validateNonEmptyString } from "../../util/validators";
import { USER_TEAM, USER_LEVEL } from "../../constants/storageTokens";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      rememberMe: false,
      data: {
        username: "",
        password: ""
      },
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onCheckboxChange = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  };

  validate(data) {
    const errors = {};
    if (!validateNonEmptyString(data.username)) errors.username = "Required";
    if (!validateNonEmptyString(data.password)) errors.password = "Required";
    return errors;
  }

  onSubmit = () => {
    const { updateUser } = this.props;
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });
    sessionStorage.clear();
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      axios
        .post("/login.php", {
          ...data
        })
        .then(response => {
          const { success, team, userlevel } = response.data;
          if (success) {
            this.setState({ loading: false });
            // save in sessionStorage
            sessionStorage.setItem(USER_TEAM, team);
            sessionStorage.setItem(USER_LEVEL, userlevel);
            // update link state
            updateUser({ variables: { user: response.data } });
          } else {
            this.setState({
              loading: false,
              errors: { login: "Invalid username or password" }
            });
          }
        })
        .catch(() => {
          this.setState({
            loading: false,
            errors: { login: "Network Error" }
          });
        });
    }
  };

  render() {
    const { loading, rememberMe, data, errors } = this.state;
    return (
      <div>
        <Banner
          title="Login"
          bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"
        />
        <div className="container">
          <div className="u-component">
            <h2>Log into an existing account</h2>
            {loading ? (
              <div className="p-5">TO DO: BUILD LOADER</div>
            ) : (
              <div className="u-form-container">
                <div className="row mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={data.username}
                    onChange={this.onChange}
                  />
                  <InlineError text={errors.username} />
                </div>
                <div className="row mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  <InlineError text={errors.password} />
                </div>
                <div className="row justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="form-check-input"
                      value={rememberMe}
                      onChange={this.onCheckboxChange}
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      {" "}
                      Remember Me
                    </label>
                  </div>
                  <input
                    type="submit"
                    onClick={this.onSubmit}
                    className="btn btn-primary"
                  />
                </div>
                <InlineError text={errors.login} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

/*
Login.propTypes = {
  //
};
*/

export default graphql(updateUser, { name: "updateUser" })(Login);

/*
<div>
  <nav className="menu">
    <input
      type="checkbox"
      onClick={this.clickHandler}
      href="#"
      className="menu-open"
      name="menu-open"
      id="menu-open"
    />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>

    <NavLink
      exact
      activeClassName="active"
      to="/"
      className="menu-item"
    >
      {" "}
      <i className="fa fa-home" />{" "}
    </NavLink>
    <NavLink
      activeClassName="active"
      to="/articles"
      className="menu-item"
    >
      {" "}
      <i className="fa fa-newspaper-o" />{" "}
    </NavLink>
    <NavLink
      activeClassName="active"
      to="/home"
      className="menu-item"
    >
      {" "}
      <i className="fa fa-heart" />{" "}
    </NavLink>
    <NavLink
      activeClassName="active"
      to="/link3"
      className="menu-item"
    >
      {" "}
      <i className="fa fa-envelope" />{" "}
    </NavLink>
  </nav>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="shadowed-goo">
        <feGaussianBlur
          in="SourceGraphic"
          result="blur"
          stdDeviation="10"
        />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
        <feColorMatrix
          in="shadow"
          mode="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
          result="shadow"
        />
        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
        <feComposite in2="shadow" in="goo" result="goo" />
        <feComposite in2="goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="goo">
        <feGaussianBlur
          in="SourceGraphic"
          result="blur"
          stdDeviation="10"
        />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feComposite in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
  </svg>
</div> 
*/
