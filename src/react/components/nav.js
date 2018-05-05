import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    };

    
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(){
    this.setState({
      hamburgerOpen: !this.state.hamburgerOpen
    })
  }

  render() {
    return (
      <nav className="c-nav">
        <div className="c-nav__main">
          <div onClick={() => this._clickHandler()} className={`${this.state.hamburgerOpen ? 'c-nav__hamburger-open' : ''} c-nav__hamburger`} >
            <span className="c-nav__hamburger-bar"></span>
            <span className="c-nav__hamburger-bar"></span>
            <span className="c-nav__hamburger-bar"></span>
          </div>
          <div className={`${this.state.hamburgerOpen ? 'c-nav__menu-open' : 'c-nav__menu-closed'} c-nav__items`}>
            <div className="c-nav__item-wrapper">
              <NavLink activeClassName='is-active' exact className="c-nav__link" to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
              <NavLink activeClassName='is-active' exact className="c-nav__link" to={`${process.env.PUBLIC_URL}/about`}>About</NavLink>
              <NavLink activeClassName='is-active' exact className="c-nav__link" to={`${process.env.PUBLIC_URL}/signup`}>Sign Up</NavLink>
              <NavLink activeClassName='is-active' exact className="c-nav__link" to={`${process.env.PUBLIC_URL}/videos`}>Videos</NavLink>
              <NavLink activeClassName='is-active' exact className="c-nav__link" to={`${process.env.PUBLIC_URL}/demo`}>Demo</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
