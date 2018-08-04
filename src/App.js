// React Required Imports,
// without this the application is not aware this is a react component
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// React Apollo Set up for communicating to the backend
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

// Styles
// You can import styles into JS the way  have set this up because webpack
// will see this import and know what to do. they will get rendered out to
// the dom in an embeded style tag (<style></style>)
// this is faster then the browser requesting muliple css file
import './styles/main.scss';


// Pages
import Home from './react/pages/home';
import Login from './react/pages/login';
import About from './react/pages/about';
import Signup from './react/pages/signup';
import Video from './react/pages/video';
import CreateWorkflow from './react/pages/createWorkflow';

// Custom components, these are the sections of our application, we put them in
// seperate files and import them to make the modular and scalable
import Nav from './react/components/nav';
import Footer from './react/components/footer';

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjken9aza3m0w01431phhi3v0"
});

class App extends Component {
  render() {

    client
      .query({
        query: gql`
          {
            hello {
              message
            }
          }
        `
      })
      .then(result => console.log(result));

    console.log(process.env.PUBLIC_URL);
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Nav></Nav>
          <div>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}/>
            <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About}/>
            <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login}/>
            <Route path={`${process.env.PUBLIC_URL}/signup`} exact component={Signup}/>
            <Route path={`${process.env.PUBLIC_URL}/videos`} exact component={Video}/>
            <Route path={`${process.env.PUBLIC_URL}/createWorkflow`} exact component={CreateWorkflow}/>
          </div>
          <Footer></Footer> 
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
