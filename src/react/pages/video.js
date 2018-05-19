import React, { Component } from 'react';
import Banner from '../components/banner';
import PropTypes from 'prop-types';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

   render() {
      //  const {videoURL} = this.props; Still need to work out how to pass the url from the textbox into the react url prop
        return(   
            <div>
        <Banner title="Videos" bgImage="http://www.lanlinglaurel.com/data/out/134/5131848-sports-wallpaper.jpeg"></Banner>
        <div className="Container">

          <div className="u-component">

          <div className="Container__controls">
              <input className="Container__url" type="text" placeholder="Enter URL" /> 
            <button className="Container__url-button" onClick={this.TestFunction}> Load The Video </button> 

            <div> 
          
            <ReactPlayer 
                className = 'Container__react-player'
                playing 
                url = 'https://www.youtube.com/watch?v=2XYw832CGKA&ab_channel=callisto150'
                volume = '1.0'
                width = '900px'
                height = '600px'/>


        <h4 className="Container__breakdown"> Breakdown of the situtation </h4>
            <p className="Container__breakdown-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            </p>
            <p className="Container__breakdown-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
    
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            </p>
        <h4 className="Container__additional"> Additional information </h4>
            <p className="Container__additional-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            </p>
            <p className="Container__additional-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              minus iste quae dolorem aperiam. Sit, laborum enim commodi provident deleniti 
              non iste iusto sed inventore.
            
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
        </div> 
      </div>
      
Video.propTypes = {
}

export default Video;
