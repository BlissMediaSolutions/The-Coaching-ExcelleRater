import React, { Component } from 'react';
import Banner from '../components/banner';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';

var data = [
    {player: 'Old mate', quiz : 'Test', time: '2.00', score: 15},
    {player: 'Old mate Gaz', quiz : 'Test1', time: '2.05', score: 15},
    {player: 'Old mate Baz', quiz : 'Test2', time: '2.01', score: 16},
  ];
   

class Quiz extends Component {
  render() {
    return (
      <div>
        <Banner title="Quiz Overview" bgImage="http://i.cdn.turner.com/cnn/2010/SPORT/football/06/21/france.squad.crisis/t1larg.france.squad.afp.gi.jpg"></Banner>
        <div className="quiz">

          <div className="quiz__table">
          <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='player'>
            Player Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='quiz'>
            Quiz
            
          </TableHeaderColumn>
          <TableHeaderColumn dataField='time'>
            Time
          </TableHeaderColumn>
          <TableHeaderColumn datafield='score'>
            Score
          </TableHeaderColumn>
        </BootstrapTable>

          </div>


          <div className="quiz__additional">
                <h3 className="quiz__additional-heading"> Additional Info </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium  </p>

              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam facere animi quod excepturi deserunt ratione eos 
              ipsa? Laudantium nobis eligendi sit libero possimus necessitatibus nulla, 
              quam tenetur aliquid incidunt obcaecati voluptates ipsa, magni, praesentium 
              </p>

          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;