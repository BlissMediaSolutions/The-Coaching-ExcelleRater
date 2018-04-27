import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Nav, NavItem } from 'react-bootstrap';


class Footer extends Component {
    render() {
        return(
            <footer className="c-footer"> 
                <div id="EmailContact">
                <p align="left"> Email: CoachXL@support.com </p>
                </div>

               <div id="Phone Support">
                <p align="left"> Phone: 0415063336 </p>
               </div>

               <div id="Address">
                <p align="left"> Address: 22 Sporty Street Rowville </p>
               </div>

               <div id="Logo">
                <p align="right"> Logo </p>
               </div>

               <hr/>

         
            <div>
                   <NavItem eventKey={1}>
                        <Link to="/videos"> Videos </Link> 
                   </NavItem>    
                    
                    <NavItem eventKey={2}>
                        <Link to="/about"> &nbsp;&nbsp;&nbsp;About Us  </Link>
                    </NavItem> 

                    <NavItem eventKey={3}>
                        <Link to="/termsandconditions"> &nbsp;&nbsp;&nbsp;Terms and Conditions </Link>
                    </NavItem>  
            </div>
                 <div>
                    <i classname="fa fa-facebook"></i>
                    <i classname="fa fa-instagram"></i>
                    <i classname="fa fa-twitter"></i>
                </div>     
                             
            </footer>
        )
    }
}
export default Footer; 