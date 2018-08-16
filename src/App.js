// React Required Imports,
// without this the application is not aware this is a react component
import React, { Component } from "react";

// Styles
// You can import styles into JS the way  have set this up because webpack
// will see this import and know what to do. they will get rendered out to
// the dom in an embeded style tag (<style></style>)
// this is faster then the browser requesting muliple css file
import "./styles/main.scss";

// Routes
import Routes from "./react/components/routes";

// Custom components, these are the sections of our application, we put them in
// seperate files and import them to make the modular and scalable
import Nav from "./react/components/nav";
import Footer from "./react/components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
