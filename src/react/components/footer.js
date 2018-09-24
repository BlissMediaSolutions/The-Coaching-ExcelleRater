import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images/svgs/logo"

class Footer extends Component {
  
  render() {
    return (
      <footer className="c-footer">
        <div className="container">
          <div className="c-footer__container">
            <div>
              <span className="c-footer__list-item">
                Email: CoachXL@support.com
              </span>
              <span className="c-footer__list-item"> Phone: 0415063336 </span>
              <span className="c-footer__list-item">
                Address: 22 Sporty Street Rowville
              </span>
            </div>
            <div>
              {logo}
            </div>
          </div>

          <div className="c-footer__bottom">
            <div>
              <Link className="c-footer__link" to="/video">
                Videos  
              </Link>
              <Link className="c-footer__link" to="/about">
                About Us
              </Link>
              <Link className="c-footer__link" to="/termsandconditions">
                Terms and Conditions
              </Link>
            </div>

            <div>
              <a className="c-footer__social-link">
                <i className="fa fa-facebook" />
              </a>
              <a className="c-footer__social-link">
                <i className="fa fa-instagram" />
              </a>
              <a className="c-footer__social-link">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
