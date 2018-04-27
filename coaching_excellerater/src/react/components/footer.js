import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
            <footer> 
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
                <p align="right"> This is where the logo will go </p>
               </div>

               <hr/>

            <Grid>
               <Nav align="left">
                   <NavItem eventKey={1}>
                        <Link to="/videos"> Videos </Link> 
                   </NavItem>    

                    <NavItem eventKey={2}>
                        <Link to="/aboutus"> About Us </Link>
                    </NavItem> 

                    <NavItem eventKey={3}>
                        <Link to="/termsandconditions"> Terms and Conditions </Link>
                    </NavItem>  
            </Nav>
            </Grid>  
                <Grid>
                    <Nav align="right">
                         <NavItem eventKey={4}>
                            This will be a placeholder for the social media icons
                         </NavItem>   

                          <NavItem eventKey={5}>
                            This will be a placeholder for the social media icons
                         </NavItem>   

                          <NavItem eventKey={6}>
                            This will be a placeholder for the social media icons
                         </NavItem>   
                     </Nav>     
                </Grid>
                  
            </footer>
            </div>
        )
    }
}
