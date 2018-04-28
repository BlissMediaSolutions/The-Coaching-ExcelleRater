import React, { Component } from 'react';
import Banner from '../components/banner';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: {
        remember_me: false
      },
    };
  }
    
  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  onCheckboxChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: !this.state.data[e.target.name]
      }
    });
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
                <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" id="username" placeholder="Username" value={this.state.data.username} onChange={this.onChange} />
                </div>
                <div className="row mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.data.password} onChange={this.onChange} />
                </div>
                <div className="row justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" name="remember_me" id="remember_me" className="form-check-input" value={this.state.data.remember_me} onChange={this.onCheckboxChange} /> 
                    <label htmlFor="remember_me" className="form-check-label"> Remember Me</label>
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
