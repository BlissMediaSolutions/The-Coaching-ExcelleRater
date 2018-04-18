import React, { Component } from 'react';

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
            <div class="c-nav__item-wrapper">
              <a className="c-nav__link" href="">Home</a>
              <a className="c-nav__link" href="">About</a>
              <a className="c-nav__link" href="">Sign Up</a>
              <a className="c-nav__link" href="">Videos</a>
              <a className="c-nav__link" href="">Demo</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
