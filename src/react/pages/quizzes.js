import React, { Component } from 'react';
import Banner from '../components/banner';

export class Quizzes extends Component {
  render() {
    return <div>
      <Banner title="Quiz Overview" bgImage="http://getwallpapers.com/wallpaper/full/4/4/3/382939.jpg"></Banner>
      <div className="container">
        <div className="u-component">
          <h2>Recent Quizzes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
            ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
            quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam facere animi quod excepturi deserunt ratione eos 
          </p>
        </div>
      </div>
    </div>
  }
}