import React, { Component } from 'react';
import Banner from '../components/banner';
import Nav from '../components/nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Banner title="Coaching / Excelerator"></Banner>
        <div className="container">
          <div className="u-component">
            <h2>What is coaching excellerator?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;