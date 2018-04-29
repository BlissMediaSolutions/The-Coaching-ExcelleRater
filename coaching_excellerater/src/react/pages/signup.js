import React, { Component } from 'react';
import Banner from '../components/banner';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: {},
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

  render() {
    let confirmPasswordClassName = "form-control"
    if (this.state.data.confirm_password !== undefined && this.state.data.confirm_password.length > 0) {
      confirmPasswordClassName += this.state.data.password === this.state.data.confirm_password 
        ?  " is-valid"
        :  " is-invalid"
    }


    return (
      <div>
        <Banner title="Sign Up" bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"></Banner>
        <div className="container">
          <div className="u-component"> 
            <h2>Create an account</h2>
            <div className="u-form-container">
            <form>
            <div className="row mb-3">
                <label htmlFor="organisation">Organisation</label>
                  <input 
                    type="text" 
                    name="organisation" 
                    id="organisation" 
                    className="form-control" 
                    placeholder="Organisation" 
                    value={this.state.data.organisation} 
                    onChange={this.onChange} />
                </div>
              <div className="row mb-3">
                <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={this.state.data.email} 
                    onChange={this.onChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  name="password"
                  id="password" 
                  className="form-control" 
                  placeholder="Password" 
                  value={this.state.data.password} 
                  onChange={this.onChange} />
              </div>

              <div className="row mb-3 form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                  type="password" 
                  name="confirm_password" 
                  id="confirm_password" 
                  className={confirmPasswordClassName}
                  placeholder="Confirm Password" 
                  value={this.state.data.confirm_password} 
                  onChange={this.onChange}/>
              </div>

              <div className="row">
                <input type="submit" onClick={this.onSubmit} className="btn btn-primary" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;