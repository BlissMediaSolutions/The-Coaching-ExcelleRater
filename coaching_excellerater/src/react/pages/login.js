import React, { Component } from 'react';
import Banner from '../components/banner';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      rememberMe: false
    };
  }
    
  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onRememberMeChange = (event) => {
    this.setState({ rememberMe: event.target.value });
  }

  onSubmit = () => {
    //TO DO
  }

  render() {
    return (
      <div>
        <Banner title="Login" bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"></Banner>
          <div className="container">
            <div className="u-component">
              <h2>Log into an existing account</h2>
              <div className="c-login__container">
                <div className="row mb-3">
                <label>Username</label>
                  <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} />
                </div>
                <div className="row mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                </div>
                <div className="row justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" id="remember" className="form-check-input" onChange={this.onRememberMeChange} /> 
                    <label for="remember" className="form-check-label">Remember Me</label>
                  </div>
                  <input type="submit" onClick={this.onSubmit} className="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
