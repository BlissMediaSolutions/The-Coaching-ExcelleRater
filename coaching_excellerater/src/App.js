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
import About from './react/pages/about';
import Nav from './react/components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </div>
      </div>
    );
  }
}

export default App;
