import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/banner';
import { NavLink } from 'react-router-dom';

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
    if(this.state.data.password && this.state.data.username){
      this.props.userLoginRequest(this.state);
      //axios.post('login.php', {user: this.state.data}); will move to redux soon
    } else {
      //Fire Input Validation
    }
  }

  render() {
    return (
      <div>
        <Banner title="Login" bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"></Banner>
          <div className="container">
            <div className="u-component">
              <h2>Test for toolbox animation</h2>
              <div>
                <nav className="menu">
                  <input type="checkbox" onClick={this.clickHandler} href="#" className="menu-open" name="menu-open" id="menu-open"/>
                  <label className="menu-open-button" htmlFor="menu-open">
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                  </label>
                  
                  <NavLink exact activeClassName="active" to="/" className="menu-item"> <i className="fa fa-home"></i> </NavLink>
                  <NavLink activeClassName="active" to="/articles" className="menu-item"> <i className="fa fa-newspaper-o"></i> </NavLink>
                  <NavLink activeClassName="active" to="/home" className="menu-item"> <i className="fa fa-heart"></i> </NavLink>
                  <NavLink activeClassName="active" to="/link3" className="menu-item"> <i className="fa fa-envelope"></i> </NavLink>    
                </nav>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="shadowed-goo">
                        
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h2>Log into an existing account</h2>
              <div className="u-form-container">
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

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default Login;
