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

// Axios
import axios from "axios";

// Apollo GQL Related imports
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// Apollo link state
import defaults from "./graphql/defaults";
import resolvers from "./graphql/resolvers";

// axios set up
axios.defaults.baseURL = "http://144.6.226.54/php";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Apollo link state set up
const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Nav />
          <Routes />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
