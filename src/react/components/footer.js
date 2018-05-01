import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Nav, NavItem } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(

        <footer className="c-footer"> 
        <div className="container">
            <div className="c-footer__container">   
                <div>      
                    <span className="c-footer__list-item"> Email: CoachXL@support.com </span>           
                    <span className="c-footer__list-item"> Phone: 0415063336 </span>    
                    <span className="c-footer__list-item"> Address: 22 Sporty Street Rowville </span> 
                 </div>   
                <div>
                   <i className="fa fa-anchor"> </i> 
                </div> 
             </div>

            <div className="c-footer__bottom">
                <div> 
                    <Link className="c-footer__link" to="/videos"> Videos </Link>  
                    <Link className="c-footer__link" to="/about"> About Us  </Link>      
                    <Link className="c-footer__link" to="/termsandconditions"> Terms and Conditions </Link>
                </div>

                <div>
                    <a className="c-footer__social-link"> <i className="fa fa-facebook"></i> </a>
                    <a className="c-footer__social-link"> <i className="fa fa-instagram"></i> </a>
                    <a className="c-footer__social-link"> <i className="fa fa-twitter"></i> </a>
                </div>  
            </div>   

          </div>  
                             
        </footer>
        )
    }
}
export default Footer; 

           
