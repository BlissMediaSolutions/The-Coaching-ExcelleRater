// React Required Imports,
// without this the application is not aware this is a react component
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styles
// You can import styles into JS the way  have set this up because webpack
// will see this import and know what to do. they will get rendered out to
// the dom in an embeded style tag (<style></style>)
// this is faster then the browser requesting muliple css file
import './styles/main.scss';


// Custom components, these are the sections of our application, we put them in
// seperate files and import them to make the modular and scalable
import Home from './react/pages/home';
import Login from './react/pages/login';
import About from './react/pages/about';
import Nav from './react/components/nav';
import Footer from './react/components/footer';
import Signup from './react/pages/signup';

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="App">
        <Nav></Nav>
        <div>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}/>
          <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About}/>
          <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login}/>
          <Route path={`${process.env.PUBLIC_URL}/signup`} exact component={Signup}/>
        </div>
        <div>
          <Footer> </Footer>
        </div>  
      </div>
      
    );
  }
}

export default App;
