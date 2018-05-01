import React, { Component } from 'react';
import Banner from '../components/banner';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title="Coaching / Excelerator" bgImage="https://i.pinimg.com/originals/44/7e/2e/447e2e8f27045f2ec24eb0d7d4e2e1ea.png"></Banner>
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